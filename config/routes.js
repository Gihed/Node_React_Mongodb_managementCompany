/**
 * Route Mappings
 * (sails.config.routes)
 *
 * Your routes tell Sails what to do each time it receives a request.
 *
 * For more information on configuring custom routes, check out:
 * https://sailsjs.com/anatomy/config/routes-js
 */

module.exports.routes = {

  /***************************************************************************
  *                                                                          *
  * Make the view located at `views/homepage.ejs` your home page.            *
  *                                                                          *
  * (Alternatively, remove this and add an `index.html` file in your         *
  * `assets` directory)                                                      *
  *                                                                          *
  ***************************************************************************/

  '/': { view: 'pages/homepage' },

  /**** Company methodes ****/
  'GET /company' :{
    controller : 'CompanyController',
    action : 'getAll'
  },
  'POST /company/create' :{
    controller : 'CompanyController',
    action : 'addCompany'
  },
  'DELETE /company/remove/:id' :{
    controller : 'CompanyController',
    action : 'removeCompany'
  },
  'POST /company/edit/:id' :{
    controller : 'CompanyController',
    action : 'updateCompany'
  },

  /**** Contact methodes *****/
  'GET /contact' :{
    controller : 'ContactController',
    action : 'getAll'
  },
  'POST /contact/create' :{
    controller : 'ContactController',
    action : 'addContact'
  },
  'DELETE /contact/remove/:id' :{
      controller : 'ContactController',
      action : 'removeContact'
    },
  'POST /contact/edit/:id' :{
      controller : 'ContactController',
      action : 'updateContact'
  },

/**** methods quotes ****/
'GET /quote' :{
  controller : 'QuoteController',
  action : 'getAll'
},
'POST /quote/create' :{
  controller : 'QuoteController',
  action : 'addQuote'
},
'DELETE /quote/remove/:id' :{
  controller : 'QuoteController',
  action : 'removeQuote'
},
'POST /quote/edit/:id' :{
  controller : 'QuoteController',
  action : 'updateQuote'
},

/**** methods Item *****/
'GET /item' :{
  controller : 'ItemController',
  action : 'getAll'
},
  'POST /item/create' :{
    controller : 'ItemController',
    action : 'addItem'
},
  'DELETE /item/remove/:id' :{
    controller : 'ItemController',
    action : 'removeItem'
},
  'POST /item/edit/:id' :{
    controller : 'ItemController',
    action : 'updateItem'

},

'POST /user/register': 'user/register',
'POST /user/login': 'user/login',

  '*': {response : 'page no found'}


  //'*': { view: '404' }


  /***************************************************************************
  *                                                                          *
  * More custom routes here...                                               *
  * (See https://sailsjs.com/config/routes for examples.)                    *
  *                                                                          *
  * If a request to a URL doesn't match any of the routes in this file, it   *
  * is matched against "shadow routes" (e.g. blueprint routes).  If it does  *
  * not match any of those, it is matched against static assets.             *
  *                                                                          *
  ***************************************************************************/


};
