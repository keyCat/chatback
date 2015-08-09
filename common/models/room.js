module.exports = function ( Room ) {
  Room.validatesUniquenessOf('name');

  Room.beforeCreate = function ( next, instance ) {
    instance.setAttribute('created', Date.now());

    next();
  };
};
