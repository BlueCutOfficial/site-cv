import Controller from '@ember/controller';
import { tracked } from '@glimmer/tracking';

export default class CvController extends Controller {
  cvs = [
    {
      id: 1,
      file: '/pdf/CV_Marine_Dunstetter_en.pdf',
    },
  ];

  @tracked index = 0;

  get selected() {
    return this.cvs[this.index];
  }
}
