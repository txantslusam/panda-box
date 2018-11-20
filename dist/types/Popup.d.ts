import Image from './Image';
export default class Popup {
    private root;
    private title;
    private imagesContainer;
    private description;
    private prevArrow;
    private nextArrow;
    private closeButton;
    private activeImagesElements;
    private activeImages;
    private activeIndex;
    private activeImage;
    constructor();
    loadGallery(images: Image[], startingImage?: number): void;
    private prepareRoot;
    private prepareSlider;
    private prepareButtons;
    private setEvents;
    private setActiveIndex;
    private setTitleAndDescription;
    private openPopup;
    private closePopup;
    private indicateEnd;
    private showPreviousImage;
    private showNextImage;
    private keyDownHandler;
}
