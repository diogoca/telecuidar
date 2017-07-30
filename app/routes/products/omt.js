import Ember from 'ember';
import ENV from '../../config/environment';

export default Ember.Route.extend({
    headTags: [
        {
            type: 'title',
            content: 'OMT' + ENV.separator + ENV.title
        },
        {
            type: 'meta',
            tagId: 'meta-description',
            attrs: {
                name: 'description',
                content: 'Receba orientação médica por telefone 24 horas por dia.'
            }
        },
        {
            type: 'link',
            tagId: 'canonical-link',
            attrs: {
                rel: 'canonical',
                href: ENV.domainURL + '/fale-conosco'
            }
        }],
});
