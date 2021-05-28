/**
 * ItemController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

 //const Item = require("../models/Item");
 

 module.exports = {
 
   getAll: async (request,response) => {
       allitem = await Item.find({});
       response.json(allitem);
   },
   addItem: async (request, response) => {

    try{
    
    let name = request.body.name;
    let description = request.body.description;
    let price = request.body.price;
    let quantity = request.body.quantity;
    let quote =request.body.quote;

  await Item.create({quote, name, description, price, quantity});
  response.json({status: 'success', message: 'Done adding'});
    }catch(error){
        response.json(error.message);
    }
  },
  removeItem: async (request, response) => {

    try{
    let id = request.params.id;
  await Item.destroy(id);
  response.json({status: 'success', message: 'Removing item'});
    }catch(error){
        response.json(error.message);
    }
  },
  updateItem: async (request, response) => {
    try{
        let name = request.body.name;
        let description = request.body.description;
        let price = request.body.price;
        let quantity = request.body.quantity;
      let id = request.params.id;
      Item.update(
      {id: id},
      {name,description,price,quantity}
      ).exec(function(error) {
        if (error) {
          response.json(error);
        }
        response.redirect("/item");
      });
      
    }catch(error){
        response.json(error.message);
    }
  }





};

