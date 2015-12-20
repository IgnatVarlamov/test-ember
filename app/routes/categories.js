import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    return this.store.query('category', {"parent": null});
  },

  actions: {
     createCategory: function() {
	    var controller = this.get('controller');

	    var category = this.store.createRecord('category', {
	      name: controller.get('newName')
	    });
	    category.save();
    }
  }
});
