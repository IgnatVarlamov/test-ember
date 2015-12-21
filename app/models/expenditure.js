import DS from 'ember-data';

export default DS.Model.extend({
	name: DS.attr('string'),
	cost: DS.attr('string'),
	category: DS.belongsTo('category'),
	date: DS.attr('string')
});
