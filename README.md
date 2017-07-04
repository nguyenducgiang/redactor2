Make sure you have Redactor lisense

```js
// require redactor
// require redactor/inlinestyle
// require redactor/source
// require redactor/codemirror
// require redactor/alignment
// require redactor/table
// require redactor/fullscreen
// require redactor/fontsize
// require redactor/fontcolor
// require redactor/fontfamily
// require redactor/video
// require redactor/imagemanager
// require redactor/filemanager
// require redactor/properties
// require redactor/definedlinks
// require redactor/clips
// require redactor/limiter
// require redactor/textdirection
// require redactor/counter
// require redactor/imagelink
```

```js
@import "redactor";
@import "redactor/alignment";
@import "redactor/clips";
```
Example of an editor with all the plugins (except UploadCare):

```js
$(function() {
  $('#redactor').redactor({
    plugins: ['inlinestyle', 'source', 'codemirror', 'alignment', 'table', 'fullscreen',
      'fontsize', 'fontcolor', 'fontfamily', 'video', 'imagemanager', 'filemanager',
      'properties', 'definedlinks', 'clips', 'limiter', 'textexpander', 'textdirection',
      'counter', 'imagelink'],
    codemirror: {
      lineNumbers: true,
      mode: 'xml',
      indentUnit: 4
    },
    imageUpload: '/upload.php',
    imageManagerJson: '/images/images.json',
    fileUpload: '/upload.php',
    fileManagerJson: '/files/files.json',
    definedLinks: '/defined-links.json',
    limiter: 20,
    textexpander: [
      ['lorem', 'Lorem ipsum...'],
      ['text', 'Text']
    ],
    callbacks: {
      counter: function(data) {
        console.log('Words: ' + data.words);
        console.log('Characters: ' + data.characters);
        console.log('Characters w/o spaces: ' + (data.characters - data.spaces));
      }
    }
  });
});
```
