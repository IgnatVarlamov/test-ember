import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    //  return this.store.query('category', {parent: null});
    return this.store.findAll('category').then(function(data){
      return data.filter(function(item){
        return !item.get('parent').get('id')
      })
    });
  },

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
