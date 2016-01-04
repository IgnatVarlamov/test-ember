import Ember from 'ember';
// import moment from 'moment';

export default Ember.Controller.extend({
  newName: '',
  // expName: '',
  // expCost: '',
  // expDate: '',
  disabledCategory: function() {
    return Ember.isEmpty(this.get('newName'));
  }.property('newName'),
  // disabledExpenditure: function() {
  //   return Ember.isEmpty(this.get('expName') && this.get('expCost') && this.get('expDate'));
  // }.property('expName').property('expCost').property('expDate'),
});
