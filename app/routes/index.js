import Ember from 'ember';
import ENV from '../config/environment';

export default Ember.Route.extend({
    headTags: [
        {
            type: 'title',
            content: ENV.title + ENV.separator + 'Botão de Emergência para Idosos'
        },
        {
            type: 'meta',
            tagId: 'meta-description',
            attrs: {
                name: 'description',
                content: 'Serviço de apoio médico e monitoramento 24h através do botão de ajuda para terceira idade. Teleassistência em João Pessoa, Paraíba.'
            }
        },
        {
            type: 'link',
            tagId: 'canonical-link',
            attrs: {
                rel: 'canonical',
                href: ENV.domainURL
            }
        }],
});
