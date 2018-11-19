import Gallery from './Gallery';
import Popup from './Popup';

export default class PandaBox {
  private defaultSelector: string = '[data-pandabox]';
  private selector: string;
  private galleries: Gallery[];
  private popup: Popup;

  constructor(selector: string) {
    this.selector = selector || this.defaultSelector;
    this.popup = new Popup();
    this.galleries = Array.from(document.querySelectorAll(this.selector))
      .map(element => new Gallery(element, this.popup));
  }
}
