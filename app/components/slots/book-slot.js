import Component from '@ember/component';

// Composant qui représente le slot d'un livre, le clic envoie sur la page de vente
export default Component.extend({

  // La classe picture-slot gère l'affichage comme en galerie, la classe book-slot adapte les dimensions
  classNames: ['picture-slot', 'book-slot', 'inline', 'aligncenter'],

  slotParams: undefined

});
