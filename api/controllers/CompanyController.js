/**
 * CompanyController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

//const Company = require("../models/Company");

module.exports = {

  getAll: async (request,response) => {
      allcompanies = await Company.find({});
      response.json(allcompanies);
  },
  addCompany: async (request, response) => {

      try{

      let name = request.body.name;
      let address = request.body.address;
      let zipcode = request.body.zipcode;
      let country = request.body.country;

    await Company.create({name, address, zipcode, country});
    response.json({status: 'success', message: 'Done adding'});
      }catch(error){
          response.json(error.message);
      }
    },
    removeCompany: async (request, response) => {

      try{
      let id = request.params.id;
    await Company.destroy(id);
    response.json({status: 'success', message: 'removing company'});
      }catch(error){
          response.json(error.message);
      }
    },
    updateCompany: async (request, response) => {
      try{
        let name = request.body.name;
        let address = request.body.address;
        let zipcode = request.body.zipcode;
        let country = request.body.country;
        let id = request.params.id;
        Company.update(
        {id: id},
        {name,address,zipcode,country}
        ).exec(function(error) {
          if (error) {
            response.json(error);
          }
          response.redirect("/company");
        });
        
      }catch(error){
          response.json(error.message);
      }
    }

};

