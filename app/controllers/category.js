import Ember from 'ember';
// import moment from 'moment';

export default Ember.Controller.extend({
  newName: '',
  disabledCategory: function() {
    return Ember.isEmpty(this.get('newName'));
  }.property('newName'),
  disabledExpenditure: function() {
    return Ember.isEmpty(this.get('expName') && this.get('expCost') && this.get('expDate'));
  }.property('expName', 'expCost', 'expDate'),
  filterComputed: function() {
    let self = this;
    if(self.get('filterDate')){
      return self.get('model.expenditures').filter(function(item){
        return !moment(item.get('date')).startOf('day').diff(moment(self.get('filterDate')).startOf('day'))
      })
    }
    return self.get('model.expenditures');
  }.property('model.expenditures', 'filterDate')
});
