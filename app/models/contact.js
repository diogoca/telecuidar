import Ember from 'ember';
import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  email: DS.attr('string'),
  phone: DS.attr('string'),

  isValid: Ember.computed.notEmpty('name') && Ember.computed.notEmpty('email') && Ember.computed.notEmpty('phone'),
  isDisabled: Ember.computed.not('isValid'),

  mask: {
    phone: ['(', /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/]
  }

});
