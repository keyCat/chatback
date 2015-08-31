# Description

Chatback is a webchat application with rooms, buddylist and instant messaging. It is created with NodeJS on server and AngularJS on client.

# Technical Requirements

* NodeJS 0.10.x+
* NPM 2+

# Development
## Prerequisite

Use `db` as datasource for your models during development as it is allows to reproduce environment by copying `server/db.json`. Distribute this file on the case-by-case basis, rather then push it in repository.

## Common

Beforehand, run

`$ npm install`

to install required dependencies.

## Server

Since server uses [LoopBack.io framework](http://loopback.io) you may choose to install [strongloop package](https://www.npmjs.com/package/strongloop) via npm globally on your machine

`$ npm install -g strongloop`

You can learn more about LoopBack by reading [official documentation](https://docs.strongloop.com/display/public/LB/LoopBack).

### Datasource connectors

Currently project includes only Memory and MongoDB LoopBack connectors. If you wish to use different type of datasources, refer to [LoopBack documentation on datasources](https://docs.strongloop.com/display/public/LB/Connecting+models+to+data+sources)

### Environment-specific configuration

#### NODE_ENV=DEVELOPMENT

`server/config.development.js`

`server/middleware.development.js`

#### NODE_ENV=PRODUCTION

`server/config.production.js`

`server/middleware.production.js`

## Client

During development you may add/change your LoopBack models. You will need to regenerate JS code for LoopBack Angular resource and manually paste it in file `client/scripts/loopback/services/lb-generated.service.js`
More on LoopBack Angular JavaScript SDK you can find in [LB documentation](https://docs.strongloop.com/display/public/LB/AngularJS+JavaScript+SDK)

Use Gulp for building and testing your application. Run `$ gulp help` for info on the tasks available.
