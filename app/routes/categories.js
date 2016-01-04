import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
     createCategory: function(model) {
	    var controller = this.get('controller'),
          store = this.store;

      var category = store.createRecord('category', {
        name: controller.get('newName')
      });
	    category.save().then(function(result){
        controller.set('newName', '');
      });
    }
  }
});
