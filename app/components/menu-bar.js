import Component from '@glimmer/component';

export default class EquipmentBarItemComponent extends Component {
  thumbs = [
    {
      keyroute: 'home.apps',
      name: 'nav.apps',
    },
    {
      keyroute: 'home.opensource',
      name: 'nav.opensource',
    },
    {
      keyroute: 'home.games',
      name: 'nav.games',
    },
    {
      keyroute: 'home.art',
      name: 'nav.art',
    },
    {
      keyroute: 'home.cv',
      name: 'nav.cv',
    },
  ];
}
