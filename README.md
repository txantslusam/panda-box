# Panda Box

A Lightbox plugin written in TypeScript.

[Demo](https://txantslusam.github.io/panda-box/)

## 1. Installation

Using npm:
```
  $ npm install panda-box --save
```
or yarn:
```
  $ yarn add panda-box
```

Then import it in your javascript files:

```js
import PandaBox from 'panda-box';
```

Also make sure that you include styles:

```js
import 'panda-box/dist/pandaBox.css';
```

## 2. Usage

Add attribute `data-pandabox` to container of gallery and call `new PandaBox();`

Or pass your own selector to class constructor:
```js
  new PandaBox('.galleryContainer')
```

### 2.1 HTML Structure

A gallery must be in a form of `<img src="#">` with a `<a href="#">` wrap eg.:

```html
  <div data-pandabox>
    <a href="1.jpg">
      <img src="1-thumb.jpg" />
    </a>
    <a href="2.jpg">
      <img src="2-thumb.jpg" />
    </a>  
  </div>
```

## 3. Additional options

### 3.1. `data-title=""`

Add data-title attribute with string inside it to attach title to image.

### 3.2. `data-description=""`

Add data-description attribute with string inside it to attach description to image.

## 4. Support

IE 11+, all evergreeen browsers
