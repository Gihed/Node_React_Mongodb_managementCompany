/**
 * QuoteController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

// const Quote = require("../models/Quote");

 module.exports = {
 
   getAll: async (request,response) => {
       allquote = await Quote.find({});
       response.json(allquote);
   },
   addQuote: async (request, response) => {
    try{
        let client = request.body.client;
        let total = request.body.total;
        let reduction = request.body.reduction;
        let status = request.body.status;

  await Quote.create({client, total,reduction, status});
  response.json({status: 'success', message: 'done adding'});
    }catch(error){
        response.json(error.message);
    }
    },
    removeQuote: async (request, response) => {

        try{
        let id = request.params.id;
      await Quote.destroy(id);
      response.json({status: 'success', message: 'removing Quote'});
        }catch(error){
            response.json(error.message);
        }
    },
    updateQuote: async (request, response) => {
        try{

        let total = request.body.total;
        let reduction = request.body.reduction;
        let status = request.body.status;
          let id = request.params.id;
          Quote.update(
          {id: id},
          {total,reduction,status}
          ).exec(function(error) {
            if (error) {
              response.json(error);
            }
            response.redirect("/quote");
          });
          
        }catch(error){
            response.json(error.message);
        }
      }
      
}

