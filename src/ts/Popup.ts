import Image from './Image';

/* tslint:disable */
const ARROW = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 669 1024"><path d="M480 992c19.2 19.2 48 32 76.8 32 60.8 0 112-48 112-112 0-32-12.8-57.6-32-76.8l-329.6-329.6 323.2-329.6c19.2-19.2 28.8-44.8 28.8-73.6 0-25.6-9.6-48-22.4-67.2v0c-22.4-22.4-48-35.2-80-35.2v0c-32 0-57.6 12.8-76.8 35.2v0l-480 476.8 480 480z"></path></svg>`;
const CLOSE_BUTTON = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/><path d="M0 0h24v24H0z" fill="none"/></svg>`;
/* tslint:enable */

export default class Popup {
  private root: HTMLElement;
  private title: HTMLElement;
  private imagesContainer: HTMLElement;
  private description: HTMLElement;
  private prevArrow: HTMLElement;
  private nextArrow: HTMLElement;
  private closeButton: HTMLElement;
  private activeImagesElements: HTMLElement[];
  private activeImages: Image[];
  private activeIndex: number;
  private activeImage: Image;

  constructor() {
    this.prepareRoot();
    this.prepareSlider();
    this.prepareButtons();
    this.setEvents();
  }

  public loadGallery(images: Image[], startingImage: number = 0) {
    this.activeImages = images;
    this.imagesContainer.innerHTML = '';

    this.activeImagesElements = images.map((image) => {
      const imageWrapper: HTMLElement = document.createElement('div');
      imageWrapper.className = 'pandaBoxPopup__imageWrapper';
      const imageElement: HTMLElement = document.createElement('img');
      imageElement.setAttribute('src', image.src);
      imageWrapper.appendChild(imageElement);

      this.imagesContainer.appendChild(imageWrapper);
      return imageElement;
    });

    this.activeImagesElements.forEach(el =>
      // prevent event from bubbling up
      el.addEventListener('click', (e) => {
        e.stopPropagation();
      }));

    this.setActiveIndex(startingImage, true);

    this.openPopup();
  }

  private prepareRoot() {
    this.root = document.createElement('div');
    this.root.className = 'pandaBoxPopup';
    this.root.id = '#pandaBoxPopup';
    this.root.setAttribute('role', 'dialog');
    document.body.appendChild(this.root);
  }

  private prepareSlider() {
    const wrapper = document.createElement('div');
    wrapper.className = 'pandaBoxPopup__wrapper';
    this.title = document.createElement('div');
    this.title.className = 'pandaBoxPopup__title';

    this.description = document.createElement('div');
    this.description.className = 'pandaBoxPopup__description';

    this.imagesContainer = document.createElement('div');
    this.imagesContainer.className = 'pandaBoxPopup__container';

    wrapper.appendChild(this.imagesContainer);

    this.root.appendChild(this.title);
    this.root.appendChild(wrapper);
    this.root.appendChild(this.description);
  }

  private prepareButtons() {
    this.prevArrow = document.createElement('button');
    this.prevArrow.setAttribute('type', 'button');
    this.prevArrow.setAttribute('aria-label', 'Previous');
    this.prevArrow.className = 'pandaBoxPopup__arrow pandaBoxPopup__arrow--prev';
    this.prevArrow.innerHTML = ARROW;

    this.nextArrow = document.createElement('button');
    this.nextArrow.setAttribute('type', 'button');
    this.nextArrow.setAttribute('aria-label', 'Next');
    this.nextArrow.className = 'pandaBoxPopup__arrow pandaBoxPopup__arrow--next';
    this.nextArrow.innerHTML = ARROW;

    this.closeButton = document.createElement('button');
    this.closeButton.setAttribute('type', 'button');
    this.closeButton.setAttribute('aria-label', 'Close');
    this.closeButton.className = 'pandaBoxPopup__closeButton';
    this.closeButton.innerHTML = CLOSE_BUTTON;

    this.root.appendChild(this.prevArrow);
    this.root.appendChild(this.nextArrow);
    this.root.appendChild(this.closeButton);
  }

  private setEvents() {
    // prevent event from bubbling up
    this.title.addEventListener('click', (e) => {
      e.stopPropagation();
    });
    this.description.addEventListener('click', (e) => {
      e.stopPropagation();
    });

    this.prevArrow.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();
      this.showPreviousImage();
    });

    this.nextArrow.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();
      this.showNextImage();
    });

    this.closeButton.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();
      this.closePopup();
    });

    this.root.addEventListener('click', () => this.closePopup());
    document.addEventListener('keydown', e => this.keyDownHandler(e));
  }

  private setActiveIndex(index: number, immediateChange: boolean = false) {
    this.activeIndex = index;
    if (immediateChange) {
      this.imagesContainer.style.transition = 'none';
    }

    this.imagesContainer.style.transform = `translate3d(${index * -100}%, 0, 0)`;
    this.imagesContainer.style.webkitTransform = `translate3d(${index * -100}%, 0, 0)`;

    setTimeout(() => {
      this.imagesContainer.style.transition = '';
    },         1);
  }

  private openPopup() {
    this.root.classList.add('pandaBoxPopup--active');

    if (this.activeImages.length === 1) {
      this.root.classList.add('pandaBoxPopup--singleImage');
    }
  }

  private closePopup() {
    this.activeImagesElements.forEach(el =>
      // prevent event from bubbling up
      el.removeEventListener('click', (e) => {
        e.stopPropagation();
      }));

    this.root.className = 'pandaBoxPopup';
    this.activeIndex = 0;
    this.activeImages = [];
    this.activeImagesElements = [];
  }

  private indicateEnd(isAtStart: boolean = false) {
    const SHIFT_VALUE = 5;
    if (isAtStart) {
      this.imagesContainer.style.transform =
      this.imagesContainer.style.webkitTransform =
        `translate3d(${this.activeIndex * -100 + SHIFT_VALUE}%, 0, 0)`;
    } else {
      this.imagesContainer.style.transform =
      this.imagesContainer.style.webkitTransform =
        `translate3d(${this.activeIndex * -100 - SHIFT_VALUE}%, 0, 0)`;
    }

    setTimeout(() => {
      this.imagesContainer.style.transform = `translate3d(${this.activeIndex * -100}%, 0, 0)`;
      this.imagesContainer.style.webkitTransform = `translate3d(${this.activeIndex * -100}%, 0, 0)`;
    },         300);
  }

  private showPreviousImage() {
    if (this.activeIndex === 0) {
      this.indicateEnd(true);
      return;
    }

    this.setActiveIndex(this.activeIndex - 1);
  }

  private showNextImage() {
    if (this.activeIndex === this.activeImages.length - 1) {
      this.indicateEnd();
      return;
    }

    this.setActiveIndex(this.activeIndex + 1);
  }

  private keyDownHandler(event: KeyboardEvent) {
    switch (event.keyCode) {
      case 37: // Left arrow
        this.showPreviousImage();
        break;
      case 39: // Right arrow
        this.showNextImage();
        break;
      case 27: // Esc
        this.closePopup();
        break;
      case 36: // Home
        this.setActiveIndex(0);
        break;
      case 35: // End
        this.setActiveIndex(this.activeImages.length - 1);
        break;
    }
  }
}
