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
            tagId: 'meta-description',
            attrs: {
                name: 'description',
                content: 'Conheça todos os benefícios de utilizar o botão de emergência.'
            }
        },
        {
            type: 'link',
            tagId: 'canonical-link',
            attrs: {
                rel: 'canonical',
                href: ENV.domainURL + '/beneficios'
            }
        }]
});
