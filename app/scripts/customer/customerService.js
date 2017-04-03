var Datastore = require('nedb'); 
var customerDB = new Datastore({ filename: 'customerDB.db', autoload: true });

angular.module('phonecatApp')
.service('customerService', [CustomerService]);

function CustomerService() {
	return {
	    getCustomers: getCustomers,
	    getById: getCustomerById,
	    getByName: getCustomerByName,
	    create: createCustomer,
	    destroy: deleteCustomer,
	    update: updateCustomer
	};
	
	function getCustomers() {
	    var customers;
	    customerDB.find({}, function (err, docs) {
	    	customers = docs;
	    });
	    return customers;
	}

    
    function getCustomerById(id) {
    	var customer;
    	customerDB.findOne({ _id: id }, function (err, doc) {
    		  customer = doc
    		});
	    return customer;
    }
    
    function getCustomerByName(_name) {
    	var customer;
    	customerDB.findOne({ name: _name }, function (err, doc) {
    		  customer = doc
    		});
	    return customer;
    }
    
    function createCustomer(customer) {
    	var customer;
    	customerDB.insert(customer, function (err, newDoc) {
    		customer = newDoc
		});
    	return customer;
    }
    
    function deleteCustomer(id) {
    	customerDB.remove({ _id: id }, {}, function (err, numRemoved) {
    		  // numRemoved = 1
    		});
    }
    
    function updateCustomer(newCustomer) {
    	var oldCustomer;
    	customerDB.findOne({ _id: newCustomer.id }, function (err, doc) {
    		oldCustomer = doc
  		});
    	customerDB.update(oldCustomer, newCustomer, {}, function (err, numReplaced) {
    		});
    }
}