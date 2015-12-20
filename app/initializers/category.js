export function initialize(app) {
  app.inject('route', 'category', 'service:category');
}

export default {
  name: 'category',
  initialize: initialize
};
