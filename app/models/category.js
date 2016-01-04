import DS from 'ember-data';

export default DS.Model.extend({
  name:  DS.attr('string'),
  expenditures: DS.hasMany('expenditure'),
  parent: DS.belongsTo('category', { inverse: 'subCategories'}),
  subCategories: DS.hasMany('category', { inverse: 'parent'}),
  cost: Ember.computed('expenditures', 'subCategories', function() {
    let cost = 0;
    this.get('expenditures').toArray().forEach(function(item){
      cost+=+item.get('cost');
    })
    this.get('subCategories').toArray().forEach(function(item){
      cost+=+item.get('cost');
    })
    return cost
  })
});
