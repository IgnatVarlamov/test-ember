import Ember from 'ember';
import DS from 'ember-data';
import Category from 'test-app/models/category';

export default Ember.Service.extend({
  fetchCategory: function () {
  	console.dir(Category);
    return Category.create({ 
    	  name: "name!",
          cost: "12412",
        });
  }
});
