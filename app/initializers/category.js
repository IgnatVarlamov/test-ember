export function initialize(container, app) {
  app.inject('route', 'category', 'service:category');
}

export default {
  name: 'category',
  initialize: initialize
};
