import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL,

  didTransition() {
    this._super(...arguments);
    window.scrollTo(0, 0);
  }
});

Router.map(function () {
  this.route('how-it-work', { path: '/como-funciona' });
  this.route('benefits', { path: '/beneficios' });
  this.route('technology', { path: '/tecnologia' });
  this.route('contact', { path: '/fale-conosco' });
  this.route('press', { path: '/kit-de-imprensa' });

  this.route('products', { path: '/produtos' }, function () {
    this.route('omt', { path: '/omt' });
    this.route('show', { path: '/:product_slug' });
  });

  this.route('not-found', { path: '*:' });
});

export default Router;
