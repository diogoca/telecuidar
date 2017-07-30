import Ember from 'ember';

export default Ember.Controller.extend({
    isNotContactPath: Ember.computed('currentPath', function() {
        return (this.get('currentPath') !== 'contact');
    })
});
