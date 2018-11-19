import Image from './Image';
import Popup from './Popup';

export default class Gallery {
  private root: Element;
  private imageAnchors: Element[];
  private images: Image[];

  constructor(rootElement: Element, private popup: Popup) {
    this.root = rootElement;
    this.collectImages();

    if (!this.images.length) {
      return;
    }

    this.setEvents();
  }

  private collectImages(): void {
    this.imageAnchors = Array.from(this.root.querySelectorAll('a'))
      .filter(anchor => anchor.firstElementChild.nodeName === 'IMG');

    this.images = this.imageAnchors.map(anchor => new Image(
      anchor.getAttribute('href'),
      anchor.getAttribute('data-title'),
      anchor.getAttribute('data-description'),
    ));
  }

  private setEvents() {
    this.imageAnchors.forEach((anchor, index) => {
      anchor.addEventListener('click', (e) => {
        e.preventDefault();
        this.popup.loadGallery(this.images, index);
      });
    });
  }
}
