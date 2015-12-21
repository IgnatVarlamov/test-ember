import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.query('expenditure', {parent: null});
  },

  actions: {
     createCategory: function() {
	    var controller = this.get('controller');

	    var expenditure = this.store.createRecord('expenditure', {
	    	name: 'name',
	    	cost: '1234',
	    	date: new Date()
	    })

	    var category = this.store.createRecord('category', {
	      name: controller.get('newName'),
	      expenditure: expenditure
	    });
	    
	    category.save().then(function(){
        controller.set('newName', '');
      });
    }
  }
});
