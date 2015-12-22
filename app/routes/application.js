import Ember from 'ember';

export default Ember.Route.extend({
	model(){
		let store = this.store;
		this.store.query('category', { parent: null }).catch(function(){
			 let category = store.createRecord('category', {
			      name: 'New Category'
    		 });	
    		 category.save();		 
		});
	}
});
