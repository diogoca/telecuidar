import Ember from 'ember';
import ENV from '../config/environment';

export default Ember.Route.extend({
     headTags: [
        {
            type: 'title',
            content: 'Benefícios' + ENV.separator + ENV.title
        },
        {
            type: 'meta',
            tagId: 'meta-robots',
            attrs: {
                name: 'robots',
                content: 'noindex'
            }
        },
       ]
});
