import DS from 'ember-data';

export default DS.Model.extend({
  name:  DS.attr('string'),
  expenditures: DS.hasMany('expenditure'),
  parent: DS.belongsTo('category', { inverse: 'subCategories' }),
  subCategories: DS.hasMany('category', { inverse: 'parent' }),
});
