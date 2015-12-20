import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  /*this.route('categories', function() {
    this.route('category', {path: "/category/:id"});
  })*/
    this.route('categories')
    this.route('category', {path: "/category/:id"});
});

export default Router;
