import Ember from 'ember';

export default Ember.Route.extend({
	model(){
		this.store.findAll('expenditure');
		this.store.findAll('category');
	}
});
