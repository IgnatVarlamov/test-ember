import Ember from 'ember';

export default Ember.Route.extend({
	model(params){
		let store = this.store;
		return this.store.find('category', params.id).then(function(category){
			return category.get('expenditures').then(function(){
				return category
			})
		});
		/*return this.category.fetchCategory(params.id, this.store)*/
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
	      date: new Date(),
	      category: model
	    });
	    expenditure.save();
    }
  }
});
