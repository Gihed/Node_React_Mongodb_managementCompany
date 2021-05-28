/**
 * Company.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

    name:{ type: 'string', required: true},
    address:{type: 'string'},
    zipcode: {type:'number', required: true},
    country: {type:'string', required: true}
 },
 datastore: "mongodb"

};

