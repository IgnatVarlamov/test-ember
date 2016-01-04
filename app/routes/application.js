import Ember from 'ember';

export default Ember.Route.extend({
	model(){
		var promises = []
		let self = this;
		promises.push(this.store.findAll('expenditure'));
		promises.push(this.store.findAll('category'));
		//return Promise.all(promises)
		return Promise.all(promises).then(function(){
			Ember.set(self, 'allCategoriesAtStore', self.store.peekAll('category'));
		});
	}
});
