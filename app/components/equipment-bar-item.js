import Component from '@glimmer/component';

export default class EquipmentBarItemComponent extends Component {
  thumbs = [
    {
      keyroute: 'home.cv',
      name: 'CV',
      sprite: '/img/icons/icon-synopsis.png',
    },
    {
      keyroute: 'home.projects',
      name: 'Projets',
      sprite: '/img/icons/icon-project.png',
    },
    {
      keyroute: 'home.skills',
      name: 'Compétences',
      sprite: '/img/icons/icon-skill.png',
    },
  ];
}
