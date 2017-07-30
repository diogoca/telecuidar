import Ember from 'ember';

export default Ember.Controller.extend({

    // @Override
    prevProduct: null,
    currentProduct: null,
    nextProduct: null,

    // Computed
    isPrevDisabled: Ember.computed.not('prevProduct'),
    isNextDisabled: Ember.computed.not('nextProduct'),

});
