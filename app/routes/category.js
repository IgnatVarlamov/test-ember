import Ember from 'ember';

export default Ember.Route.extend({
	model(params){
		return this.store.find('category', params.id).then(function(data){
			console.log(data.toJSON())
		})
	},

	actions: {
     createSubCategory: function(model) {
	    var controller = this.get('controller');

	    var category = this.store.createRecord('category', {
	      name: controller.get('newName'),
	      parent: model
	    });
	    category.save();
    }
  }
});
