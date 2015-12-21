import Ember from 'ember';
import DS from 'ember-data';
import Category from 'test-app/models/category';

export default Ember.Service.extend({
  fetchCategory: function (id, store) {
  	return store.find('category', id).then(function(category){

  		return store.query('category', {parent: category.id}).then(function(subCat){
  			var result = category.toJSON();
  			result.subCategories = subCat;
  			return result;
  		}).catch(function(){
  			return category;
  		});
  	})
  }
});


