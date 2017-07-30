import Ember from 'ember';
import ENV from '../config/environment';

export default Ember.Route.extend({
    headTags: [
        {
            type: 'title',
            content: 'Como funciona' + ENV.separator + ENV.title
        },
        {
            type: 'meta',
            tagId: 'meta-description',
            attrs: {
                name: 'description',
                content: 'Aprenda como funciona o botão de ajuda em caso de emergência ou acionamento comum.'
            }
        },
        {
            type: 'link',
            tagId: 'canonical-link',
            attrs: {
                rel: 'canonical',
                href: ENV.domainURL + '/como-funciona'
            }
        }]
});
