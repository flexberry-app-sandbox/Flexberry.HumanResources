import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType
});

Router.map(function () {
  this.route('i-i-s-human-resources-company-l');
  this.route('i-i-s-human-resources-company-e',
  { path: 'i-i-s-human-resources-company-e/:id' });
  this.route('i-i-s-human-resources-company-e.new',
  { path: 'i-i-s-human-resources-company-e/new' });
  this.route('i-i-s-human-resources-person-position-l');
  this.route('i-i-s-human-resources-person-position-e',
  { path: 'i-i-s-human-resources-person-position-e/:id' });
  this.route('i-i-s-human-resources-person-position-e.new',
  { path: 'i-i-s-human-resources-person-position-e/new' });
});

export default Router;
