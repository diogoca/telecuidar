import Ember from 'ember';
import ENV from '../../config/environment';

export default Ember.Route.extend({

    slug: null,

    model(params) {
        this.set('slug', params.product_slug);

        var products = this.get('store').peekAll('product');

        if (products.get('length') === 0) {
            products = this.get('store').findAll('product');
        }

        return products;
    },

    afterModel(model) {
        let self = this;
        
        let matchedProduct = model.filterBy('slug', this.get('slug'));
        let currentProduct = matchedProduct[0];
        let length = model.get('length');
        
        let controller = self.controllerFor('products.show');

        for (let i = 0; i < length; i++) {  
            let product = model.objectAt(i);

            if (product.get('id') === currentProduct.get('id')) {
                let nextProduct = (model.objectAt(i + 1) || false);
                let prevProduct = (model.objectAt(i - 1) || false);

                controller.set('prevProduct', prevProduct);
                controller.set('nextProduct', nextProduct);
            }
        }

        controller.set('currentProduct', currentProduct);

        self.setHeadTags(currentProduct);
    },

    setHeadTags(currentProduct) {
        let headTags = [
            {
                type: 'title',
                content: currentProduct.get('name') + ENV.separator + ENV.title
            },
            {
                type: 'link',
                tagId: 'canonical-link',
                attrs: {
                    rel: 'canonical',
                    href: ENV.domainURL + '/produtos/' + currentProduct.get('slug')
                }
            }];

        this.set('headTags', headTags);
    }

});
