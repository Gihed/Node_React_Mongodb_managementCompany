/**
 * ContactController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

 //const Contact = require("../models/Contact");

 module.exports = {
 
   getAll: async (request,response) => {
       allcontact = await Contact.find({});
       response.json(allcontact);
   },
   addContact: async (request, response) => {
    try{
    let firstName = request.body.firstName;
    let lastName = request.body.lastName;
    let email= request.body.email;
    let phone = request.body.phone;
      sails.log(email)
  await Contact.create({firstName, lastName, email, phone});
  response.json({status: 'success', message: 'done adding'});
    }catch(error){
        response.json(error.message);
    }
  },
  removeContact: async (request, response) => {

    try{
    let id = request.params.id;
  await Contact.destroy(id);
  response.json({status: 'success', message: 'removing Contact'});
    }catch(error){
        response.json(error.message);
    }
  },
  updateContact: async (request, response) => {
    try{
        let firstName = request.body.firstName;
        let lastName = request.body.lastName;
        let email= request.body.email;
        let phone = request.body.phone;
      let id = request.params.id;
      Contact.update(
      {id: id},
      {firstName,lastName,email,phone}
      ).exec(function(error) {
        if (error) {
          response.json(error);
        }
        response.redirect("/contact");
      });
      
    }catch(error){
        response.json(error.message);
    }
  }

};

