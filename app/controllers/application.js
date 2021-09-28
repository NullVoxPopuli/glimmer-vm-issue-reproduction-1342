import Controller from '@ember/controller';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class ApplicationController extends Controller {
  @tracked fooIsRunning = false;

  @tracked isShown = true;

  @action
  fooFunc() {
    // await Promise.resolve();
    this.fooIsRunning = true;
  }

  @action
  hide() {
    // await Promise.resolve();
    console.log('hide()');
    this.isShown = false;
  }
}
