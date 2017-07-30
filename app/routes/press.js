import Ember from 'ember';
import ENV from '../config/environment';

export default Ember.Route.extend({

    headTags: [
        {
            type: 'title',
            content: 'Kit de Imprensa' + ENV.separator + ENV.title
        },
        {
            type: 'link',
            tagId: 'canonical-link',
            attrs: {
                rel: 'canonical',
                href: ENV.domainURL + '/kit-de-imprensa'
            }
        }
    ]

});
