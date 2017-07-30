import Ember from 'ember';

export default Ember.Component.extend({
    sentences: [
        'Cerca de 30% dos idosos caem ao menos uma vez por ano',
        '80% dos idosos acima dos 90 anos não levantam sozinhos após quedas',
        '30% dos idosos permanecem no chão por mais de 1 hora após a queda',
        '70% das quedas em idosos ocorrem dentro de casa'
    ],

    sentence: Ember.computed('currentPath', function () {
        let sentences = this.get('sentences');
        let random = Math.floor(Math.random() * sentences.length);

        return sentences[random];
    }),

});