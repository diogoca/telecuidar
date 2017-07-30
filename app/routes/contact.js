import Ember from 'ember';
import ENV from '../config/environment';

export default Ember.Route.extend({
    headTags: [
        {
            type: 'title',
            content: 'Fale conosco' + ENV.separator + ENV.title
        },
        {
            type: 'link',
            tagId: 'canonical-link',
            attrs: {
                rel: 'canonical',
                href: ENV.domainURL + '/fale-conosco'
            }
        }
    ],

    model() {
        return this.store.createRecord('contact');
    },

    actions: {

        sendEmail(newContact) {

            this.send('loading');

            let serializedFields = 'name=' + newContact.get('name') + '&email=' + 
                newContact.get('email') + '&phone=' + newContact.get('phone');

            Ember.$.post('thank-you', serializedFields, () => {
                this.send('finished');
                this.controller.set('showForm', false);
            });

        },

        willTransition() {
            this.controller.set('showForm', true);
            this.controller.get('model').rollbackAttributes();
        }

    }

});
