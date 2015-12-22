import DS from 'ember-data';

export default DS.Model.extend({
  name:  DS.attr('string'),
  expenditures: DS.hasMany('expenditure',{async: true}),
  parent: DS.belongsTo('category', { inverse: 'subCategories', async: true } ),
  subCategories: DS.hasMany('category', { inverse: 'parent' , async: true}),
});
