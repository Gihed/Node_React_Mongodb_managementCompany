/**
 * User.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

    fullName: {
      type: 'string',
      required: true,
      columnName: 'full_name'
    },
    email: {
      type: 'string',
      required: true,
      unique: true,
    },
    password: {
      type: 'string',
      required: true
    }
  },
  customToJSON: function () {
    return _.omit(this, ['password']);
  },
  // LIFE CYCLE
  beforeCreate: async function (values, proceed) {
    // Hash password
    const hashedPassword = await sails.helpers.passwords.hashPassword(
      values.password
    );
    values.password = hashedPassword;
    return proceed();
  },
  datastore: "mongodb"

};

