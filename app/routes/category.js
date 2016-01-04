import Ember from 'ember';

export default Ember.Route.extend({
	model(params){
		let store = this.store;
		this.store.findAll('expenditure');
		return this.store.peekRecord('category', params.id);
	},

	actions: {
     createSubCategory: function(model) {
	    var controller = this.get('controller');

	    var category = this.store.createRecord('category', {
	      name: controller.get('newName'),
	      parent: model
	    });
	    category.save().then(function(){
        	controller.set('newName', '');
      });
    },
    createExpenditure: function(model) {
    	let controller = this.get('controller');
    	let expenditure = this.store.createRecord('expenditure', {
	      name: controller.get('expName'),
	      cost: controller.get('expCost'),
	      date: controller.get('expDate'),
	      category: model
	    });
	    expenditure.save().then(function(){
        	controller.set('expName', '');
					controller.set('expCost', '');
					controller.set('expDate', '');
      });;
    }
  }
});
