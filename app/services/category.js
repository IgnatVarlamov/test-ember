import Ember from 'ember';
import DS from 'ember-data';
import Category from 'test-app/models/category';

export default Ember.Service.extend({
  fetchCategory: function () {
  /*	console.dir(DS.store);
  	DS.store.createRecord({
  		name: "TEST",
  		cost : "123"
  	});
  	return DS.store.findAll('category');*/
  }
});
