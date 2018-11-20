(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["PandaBox"] = factory();
	else
		root["PandaBox"] = factory();
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
__webpack_require__(1);
var Gallery_1 = __importDefault(__webpack_require__(2));
var Popup_1 = __importDefault(__webpack_require__(4));
var PandaBox = /** @class */ (function () {
    function PandaBox(selector) {
        var _this = this;
        this.defaultSelector = '[data-pandabox]';
        this.selector = selector || this.defaultSelector;
        this.popup = new Popup_1.default();
        this.galleries = Array.from(document.querySelectorAll(this.selector))
            .map(function (element) { return new Gallery_1.default(element, _this.popup); });
    }
    return PandaBox;
}());
exports.default = PandaBox;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy90cy9tYWluLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsNkJBQTJCO0FBRTNCLHNEQUFnQztBQUNoQyxrREFBNEI7QUFFNUI7SUFNRSxrQkFBWSxRQUFnQjtRQUE1QixpQkFLQztRQVZPLG9CQUFlLEdBQVcsaUJBQWlCLENBQUM7UUFNbEQsSUFBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLElBQUksSUFBSSxDQUFDLGVBQWUsQ0FBQztRQUNqRCxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksZUFBSyxFQUFFLENBQUM7UUFDekIsSUFBSSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7YUFDbEUsR0FBRyxDQUFDLFVBQUEsT0FBTyxJQUFJLE9BQUEsSUFBSSxpQkFBTyxDQUFDLE9BQU8sRUFBRSxLQUFJLENBQUMsS0FBSyxDQUFDLEVBQWhDLENBQWdDLENBQUMsQ0FBQztJQUN0RCxDQUFDO0lBQ0gsZUFBQztBQUFELENBQUMsQUFaRCxJQVlDIn0=

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Image_1 = __importDefault(__webpack_require__(3));
var Gallery = /** @class */ (function () {
    function Gallery(rootElement, popup) {
        this.popup = popup;
        this.root = rootElement;
        this.collectImages();
        if (!this.images.length) {
            return;
        }
        this.setEvents();
    }
    Gallery.prototype.collectImages = function () {
        this.imageAnchors = Array.from(this.root.querySelectorAll('a'))
            .filter(function (anchor) { return anchor.firstElementChild.nodeName === 'IMG'; });
        this.images = this.imageAnchors.map(function (anchor) { return new Image_1.default(anchor.getAttribute('href'), anchor.getAttribute('data-title'), anchor.getAttribute('data-description')); });
    };
    Gallery.prototype.setEvents = function () {
        var _this = this;
        this.imageAnchors.forEach(function (anchor, index) {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                _this.popup.loadGallery(_this.images, index);
            });
        });
    };
    return Gallery;
}());
exports.default = Gallery;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiR2FsbGVyeS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy90cy9HYWxsZXJ5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsa0RBQTRCO0FBRzVCO0lBS0UsaUJBQVksV0FBb0IsRUFBVSxLQUFZO1FBQVosVUFBSyxHQUFMLEtBQUssQ0FBTztRQUNwRCxJQUFJLENBQUMsSUFBSSxHQUFHLFdBQVcsQ0FBQztRQUN4QixJQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7UUFFckIsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxFQUFFO1lBQ3ZCLE9BQU87U0FDUjtRQUVELElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQztJQUNuQixDQUFDO0lBRU8sK0JBQWEsR0FBckI7UUFDRSxJQUFJLENBQUMsWUFBWSxHQUFHLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxHQUFHLENBQUMsQ0FBQzthQUM1RCxNQUFNLENBQUMsVUFBQSxNQUFNLElBQUksT0FBQSxNQUFNLENBQUMsaUJBQWlCLENBQUMsUUFBUSxLQUFLLEtBQUssRUFBM0MsQ0FBMkMsQ0FBQyxDQUFDO1FBRWpFLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxHQUFHLENBQUMsVUFBQSxNQUFNLElBQUksT0FBQSxJQUFJLGVBQUssQ0FDckQsTUFBTSxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUMsRUFDM0IsTUFBTSxDQUFDLFlBQVksQ0FBQyxZQUFZLENBQUMsRUFDakMsTUFBTSxDQUFDLFlBQVksQ0FBQyxrQkFBa0IsQ0FBQyxDQUN4QyxFQUo2QyxDQUk3QyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRU8sMkJBQVMsR0FBakI7UUFBQSxpQkFPQztRQU5DLElBQUksQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLFVBQUMsTUFBTSxFQUFFLEtBQUs7WUFDdEMsTUFBTSxDQUFDLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxVQUFDLENBQUM7Z0JBQ2pDLENBQUMsQ0FBQyxjQUFjLEVBQUUsQ0FBQztnQkFDbkIsS0FBSSxDQUFDLEtBQUssQ0FBQyxXQUFXLENBQUMsS0FBSSxDQUFDLE1BQU0sRUFBRSxLQUFLLENBQUMsQ0FBQztZQUM3QyxDQUFDLENBQUMsQ0FBQztRQUNMLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUNILGNBQUM7QUFBRCxDQUFDLEFBbkNELElBbUNDIn0=

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Image = /** @class */ (function () {
    function Image(src, title, description) {
        this.src = src;
        this.title = title;
        this.description = description;
    }
    return Image;
}());
exports.default = Image;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiSW1hZ2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvdHMvSW1hZ2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQTtJQUNFLGVBQ1MsR0FBVyxFQUNYLEtBQWEsRUFDYixXQUFtQjtRQUZuQixRQUFHLEdBQUgsR0FBRyxDQUFRO1FBQ1gsVUFBSyxHQUFMLEtBQUssQ0FBUTtRQUNiLGdCQUFXLEdBQVgsV0FBVyxDQUFRO0lBQ3pCLENBQUM7SUFDTixZQUFDO0FBQUQsQ0FBQyxBQU5ELElBTUMifQ==

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/* tslint:disable */
var ARROW = "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 669 1024\"><path d=\"M480 992c19.2 19.2 48 32 76.8 32 60.8 0 112-48 112-112 0-32-12.8-57.6-32-76.8l-329.6-329.6 323.2-329.6c19.2-19.2 28.8-44.8 28.8-73.6 0-25.6-9.6-48-22.4-67.2v0c-22.4-22.4-48-35.2-80-35.2v0c-32 0-57.6 12.8-76.8 35.2v0l-480 476.8 480 480z\"></path></svg>";
var CLOSE_BUTTON = "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\"><path d=\"M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z\"/><path d=\"M0 0h24v24H0z\" fill=\"none\"/></svg>";
/* tslint:enable */
var Popup = /** @class */ (function () {
    function Popup() {
        this.prepareRoot();
        this.prepareSlider();
        this.prepareButtons();
        this.setEvents();
    }
    Popup.prototype.loadGallery = function (images, startingImage) {
        var _this = this;
        if (startingImage === void 0) { startingImage = 0; }
        this.activeImages = images;
        this.imagesContainer.innerHTML = '';
        this.activeImagesElements = images.map(function (image) {
            var imageWrapper = document.createElement('div');
            imageWrapper.className = 'pandaBoxPopup__imageWrapper';
            var imageElement = document.createElement('img');
            imageElement.setAttribute('src', image.src);
            imageWrapper.appendChild(imageElement);
            _this.imagesContainer.appendChild(imageWrapper);
            return imageElement;
        });
        this.activeImagesElements.forEach(function (el) {
            // prevent event from bubbling up
            return el.addEventListener('click', function (e) {
                e.stopPropagation();
            });
        });
        this.setActiveIndex(startingImage, true);
        this.openPopup();
    };
    Popup.prototype.prepareRoot = function () {
        this.root = document.createElement('div');
        this.root.className = 'pandaBoxPopup';
        this.root.id = '#pandaBoxPopup';
        this.root.setAttribute('role', 'dialog');
        document.body.appendChild(this.root);
    };
    Popup.prototype.prepareSlider = function () {
        var wrapper = document.createElement('div');
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
    };
    Popup.prototype.prepareButtons = function () {
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
    };
    Popup.prototype.setEvents = function () {
        var _this = this;
        // prevent event from bubbling up
        this.title.addEventListener('click', function (e) {
            e.stopPropagation();
        });
        this.description.addEventListener('click', function (e) {
            e.stopPropagation();
        });
        this.prevArrow.addEventListener('click', function (e) {
            e.preventDefault();
            e.stopPropagation();
            _this.showPreviousImage();
        });
        this.nextArrow.addEventListener('click', function (e) {
            e.preventDefault();
            e.stopPropagation();
            _this.showNextImage();
        });
        this.closeButton.addEventListener('click', function (e) {
            e.preventDefault();
            e.stopPropagation();
            _this.closePopup();
        });
        this.root.addEventListener('click', function () { return _this.closePopup(); });
        document.addEventListener('keydown', function (e) { return _this.keyDownHandler(e); });
    };
    Popup.prototype.setActiveIndex = function (index, immediateChange) {
        var _this = this;
        if (immediateChange === void 0) { immediateChange = false; }
        this.activeIndex = index;
        if (immediateChange) {
            this.imagesContainer.style.transition = 'none';
        }
        this.imagesContainer.style.transform =
            this.imagesContainer.style.webkitTransform =
                "translate3d(" + index * -100 + "%, 0, 0)";
        this.setTitleAndDescription(index);
        setTimeout(function () {
            _this.imagesContainer.style.transition = '';
        }, 10);
    };
    Popup.prototype.setTitleAndDescription = function (index) {
        var image = this.activeImages[index];
        this.title.innerHTML = image.title;
        this.description.innerHTML = image.description;
        if (image.title) {
            this.title.style.visibility = 'visible';
        }
        else {
            this.title.style.visibility = 'hidden';
        }
        if (image.description) {
            this.description.style.visibility = 'visible';
        }
        else {
            this.description.style.visibility = 'hidden';
        }
    };
    Popup.prototype.openPopup = function () {
        this.root.classList.add('pandaBoxPopup--active');
        if (this.activeImages.length === 1) {
            this.root.classList.add('pandaBoxPopup--singleImage');
        }
    };
    Popup.prototype.closePopup = function () {
        this.activeImagesElements.forEach(function (el) {
            // prevent event from bubbling up
            return el.removeEventListener('click', function (e) {
                e.stopPropagation();
            });
        });
        this.root.className = 'pandaBoxPopup';
        this.activeIndex = 0;
        this.activeImages = [];
        this.activeImagesElements = [];
    };
    Popup.prototype.indicateEnd = function (isAtStart) {
        var _this = this;
        if (isAtStart === void 0) { isAtStart = false; }
        var SHIFT_VALUE = 5;
        if (isAtStart) {
            this.imagesContainer.style.transform =
                this.imagesContainer.style.webkitTransform =
                    "translate3d(" + (this.activeIndex * -100 + SHIFT_VALUE) + "%, 0, 0)";
        }
        else {
            this.imagesContainer.style.transform =
                this.imagesContainer.style.webkitTransform =
                    "translate3d(" + (this.activeIndex * -100 - SHIFT_VALUE) + "%, 0, 0)";
        }
        setTimeout(function () {
            _this.imagesContainer.style.transform = "translate3d(" + _this.activeIndex * -100 + "%, 0, 0)";
            _this.imagesContainer.style.webkitTransform = "translate3d(" + _this.activeIndex * -100 + "%, 0, 0)";
        }, 300);
    };
    Popup.prototype.showPreviousImage = function () {
        if (this.activeIndex === 0) {
            this.indicateEnd(true);
            return;
        }
        this.setActiveIndex(this.activeIndex - 1);
    };
    Popup.prototype.showNextImage = function () {
        if (this.activeIndex === this.activeImages.length - 1) {
            this.indicateEnd();
            return;
        }
        this.setActiveIndex(this.activeIndex + 1);
    };
    Popup.prototype.keyDownHandler = function (event) {
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
    };
    return Popup;
}());
exports.default = Popup;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUG9wdXAuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvdHMvUG9wdXAudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFFQSxvQkFBb0I7QUFDcEIsSUFBTSxLQUFLLEdBQUcsMFVBQW9VLENBQUM7QUFDblYsSUFBTSxZQUFZLEdBQUcsb09BQTBOLENBQUM7QUFDaFAsbUJBQW1CO0FBRW5CO0lBYUU7UUFDRSxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDbkIsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO1FBQ3JCLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQztRQUN0QixJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7SUFDbkIsQ0FBQztJQUVNLDJCQUFXLEdBQWxCLFVBQW1CLE1BQWUsRUFBRSxhQUF5QjtRQUE3RCxpQkF3QkM7UUF4Qm1DLDhCQUFBLEVBQUEsaUJBQXlCO1FBQzNELElBQUksQ0FBQyxZQUFZLEdBQUcsTUFBTSxDQUFDO1FBQzNCLElBQUksQ0FBQyxlQUFlLENBQUMsU0FBUyxHQUFHLEVBQUUsQ0FBQztRQUVwQyxJQUFJLENBQUMsb0JBQW9CLEdBQUcsTUFBTSxDQUFDLEdBQUcsQ0FBQyxVQUFDLEtBQUs7WUFDM0MsSUFBTSxZQUFZLEdBQWdCLFFBQVEsQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDaEUsWUFBWSxDQUFDLFNBQVMsR0FBRyw2QkFBNkIsQ0FBQztZQUN2RCxJQUFNLFlBQVksR0FBZ0IsUUFBUSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUNoRSxZQUFZLENBQUMsWUFBWSxDQUFDLEtBQUssRUFBRSxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDNUMsWUFBWSxDQUFDLFdBQVcsQ0FBQyxZQUFZLENBQUMsQ0FBQztZQUV2QyxLQUFJLENBQUMsZUFBZSxDQUFDLFdBQVcsQ0FBQyxZQUFZLENBQUMsQ0FBQztZQUMvQyxPQUFPLFlBQVksQ0FBQztRQUN0QixDQUFDLENB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

/***/ })
/******/ ])["default"];
});