var bookmark0 = {url: "https://www.facebook.com/", name: "Facebook"};
var bookmark1 = {url: "https://www.twitter.com/", name: "Twitter"};
var bookmark2 = {url: "https://www.instagram.com/", name: "Instagram"};

var bookmarks = [];
bookmarks.push(bookmark0);
bookmarks.push(bookmark1);
bookmarks.push(bookmark2);

var WIDGET = {};

WIDGET.bookmarkWidget = {
  
    /**
     * Takes a single bookmark object and creates some HTML
     * @param {Object} bookmark
     */
    createBookmarkHtml: function(bookmark) {
      return '<li><a href= "'+ bookmark.url + '">' + bookmark.name + '</a></li>';
    },

    /**
     * Renders an array of bookmark objects in #bookmarks
     * @param {Array} bookmarks - the data
     */
    render: function(bookmarks, containerSelector) {
        var self = this;  
        $(containerSelector).ready(function(e) {
          $(containerSelector).append('<ul>');
          
          for(var i = 0; i < bookmarks.length; i++) {
              $(containerSelector).append(self.createBookmarkHtml(bookmarks[i]));
          }
          $(containerSelector).append('</ul>');
          
        });
    }
};

WIDGET.bookmarkWidget.render(bookmarks, "#bookmarks");