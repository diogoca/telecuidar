import Ember from 'ember';

export default Ember.Controller.extend({

    showForm: true,
    showResponseMessage: Ember.computed.not('showForm')

});
