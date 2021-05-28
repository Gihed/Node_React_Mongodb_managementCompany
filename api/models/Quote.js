/**
 * Quote.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

    client:{ model: 'company', required: true},
    total:{ type: 'number', required: true},
    reduction: { type: 'number'},
    status:{type: 'string', isIn:['approved', 'declined'],required: true}
  },
  datastore: "mongodb"

};

