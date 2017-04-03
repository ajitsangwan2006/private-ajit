'use strict';
    //angular.module('phonecatApp').controller('customerController', ['customerService', CustomerController]);
    
    function CustomerController(customerService) {
        var self = this;
        
        self.selected = null;
        self.customers = [];
        self.selectedIndex = 0;
        self.filterText = null;
        self.selectCustomer = selectCustomer;
        self.deleteCustomer = deleteCustomer;
        self.saveCustomer = saveCustomer;
        self.createCustomer = createCustomer;
        self.filter = filterCustomer;
        
        // Load initial data
        getAllCustomers();
        
        const button = document.getElementById('button');

        button.addEventListener('click', evt => {
          new Notification('Angular Material FTW!');
        });
        
        //----------------------
        // Internal functions 
        //----------------------
        
        function selectCustomer(customer, index) {
            self.selected = angular.isNumber(customer) ? self.customers[customer] : customer;
            self.selectedIndex = angular.isNumber(customer) ? customer: index;
        }
        
        function deleteCustomer($event) {
        	customerService.destroy(self.selected.customer_id, function (affectedRows) {
                self.customers.splice(self.selectedIndex, 1);
            });
        }
        
        function saveCustomer($event) {
            if (self.selected != null && self.selected.customer_id != null) {
                customerService.update(self.selected, function (affectedRows) {                	
                });
            }
            else {
                //self.selected.customer_id = new Date().getSeconds();
                customerService.create(self.selected, function (affectedRows) {                	
                });
            }
        }
        
        function createCustomer() {
            /*self.selected = {};
            self.selectedIndex = null;*/
            customerService.createCustomer(self.selected, function(customer){
            	getAllCustomers();
            });
        }
        
        function getAllCustomers() {
            customerService.getCustomers(function (customers) {
                self.customers = [].concat(customers);
                self.selected = customers[0];
            });
        }
        
        function filterCustomer() {
            if (self.filterText == null || self.filterText == "") {
                getAllCustomers();
            }
            else {
                customerService.getByName(self.filterText, function (customers) {
                    self.customers = [].concat(customers);
                    self.selected = customers[0];
                });
            }
        }
    }