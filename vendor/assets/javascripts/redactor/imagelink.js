(function($)
{
  $.Redactor.prototype.imagelink = function()
  {
    return {
      langs: {
        en: {
          "upload": "Upload",
          "choose": "From URL"
        }
      },
      init: function()
      {
        this.modal.addCallback('image', this.imagelink.load);
      },
      load: function()
      {
        var $box = $('<div style="overflow: auto; height: 300px; display: none;" class="redactor-modal-tab" data-title="From URL"><input type="text" value="" placeholder="image url" id="js-redactor-image-url"/><br/><br/><button id="js-redactor-insert-image-url">Insert</buton>');
        this.modal.getModal().append($box);

        $('#js-redactor-insert-image-url').click($.proxy(this.imagelink.insert, this));


      },
      insert: function(e)
      {
        var json = { url: decodeURI($('#js-redactor-image-url').val()) };
        this.image.insert(json, null);
      }
    };
  };
})(jQuery);
