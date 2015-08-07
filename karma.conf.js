'use strict';

var args = require('yargs').argv;
var constants = require('./gulp_tasks/common/constants')();
var webpack = require('./webpack.config');
var isWebpack = constants.moduleManager === 'webpack';

module.exports = function(config) {
    var debug = false;
    try {
        debug = JSON.parse(args._[0]).debug;
    } catch(err) {}
    debug = debug || args.debug;

    var autowatch = true;
    try {
        autowatch = JSON.parse(args._[0]).autowatch;
    } catch(err) {}
    autowatch = autowatch || args.autowatch;

    var reporters = ['mocha', 'coverage'];
    var browserify = {
        debug: true,
        transform: [
            ['browserify-istanbul', {
                instrumenter: require('isparta'),
                ignore: ['**/*.test.js', '**/*.html', '**/bower_components/**', '**/node_modules/**', '**/client/scripts/lbServices.js']
            }],
            ['babelify', {
                'stage': 0,
                'optional': ['es7.asyncFunctions'],
                'ignore': ['./node_modules', './bower_components']
            }]
        ]
    };

    webpack.cache = true;
    webpack.devtool = 'inline-source-map';
    webpack.module.preLoaders = webpack.module.preLoaders || [];
    webpack.module.preLoaders.push({
        test: /\.js$/,
        exclude: /(tests.webpack.js|.test.js|node_modules|bower_components)/,
        loader: 'istanbul-instrumenter'
    });

    var preprocessors;
    if (isWebpack) {
        preprocessors = {
            './client/scripts/tests.webpack.js': ['webpack', 'sourcemap']
        };
    } else {
        preprocessors = {
            './client/scripts/**/*.test.js': ['browserify']
        };
    }

    if (debug === true) {
        delete browserify.transform;
        reporters.splice(reporters.indexOf('coverage'), 1);
    }

    config.set({
        browserNoActivityTimeout: 60000,

        // base path that will be used to resolve all patterns (eg. files, exclude)
        basePath: '',

        // frameworks to use
        // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
        frameworks: isWebpack ? ['jasmine'] : ['browserify', 'jasmine'],

        // list of files / patterns to load in the browser
        files: [
            //'./client/scripts/**/*.html',
            isWebpack ? './client/scripts/tests.webpack.js' : './client/scripts/**/*.test.js'
        ],

        // list of files to exclude
        exclude: [
            './client/scripts/bundle*.js',
            './client/scripts/main*.js'
        ],

        // preprocess matching files before serving them to the browser
        // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
        preprocessors: preprocessors,

        // test results reporter to use
        // possible values: 'dots', 'progress'
        // available reporters: https://npmjs.org/browse/keyword/karma-reporter
        //  reporters: ['dots', 'coverage'],
        reporters: reporters,

        // web server port
        port: 9876,

        // enable / disable colors in the output (reporters and logs)
        colors: true,

        // level of logging
        // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
        logLevel: config.LOG_ERROR,

        // enable / disable watching file and executing tests whenever any file changes
        autoWatch: autowatch,

        // start these browsers
        // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
        browsers: ['PhantomJS'],

        // Continuous Integration mode
        // if true, Karma captures browsers, runs the tests and exits
        singleRun: false,
        mochaReporter: {
            output: 'full'
        },

        coverageReporter: {
            reporters: [{
                type: 'text'
            }, {
                type: 'text-summary'
            }, {
                type: 'cobertura',
                file: 'coverage.xml'
            }, {
                type: 'lcov'
            }]
        },
        webpack: webpack,
        webpackMiddleware: {
            noInfo: true,
            stats: {
                hash: false,
                version: false,
                colors: true,
                moduleSort: 'name'
            }
        },
        browserify: browserify
    });
};
