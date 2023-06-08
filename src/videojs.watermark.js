console.log('watermark: Start');

(function() {
  console.log('watermark: Init defaults');
  var defaults = {
        //file: 'Owned_Stamp.png',
        xpos: 0,
        ypos: 0,
        xrepeat: 0,
        opacity: 100,
        clickable: false,
        url: "",
        className: 'vjs-watermark',
	text: false,
	debug: false
    },
    extend = function() {
      var args, target, i, object, property;
      args = Array.prototype.slice.call(arguments);
      target = args.shift() || {};
      for (i in args) {
        object = args[i];
        for (property in object) {
          if (object.hasOwnProperty(property)) {
            if (typeof object[property] === 'object') {
              target[property] = extend(target[property], object[property]);
            } else {
              target[property] = object[property];
            }
          }
        }
      }
      return target;
    };

    //! global varible containing reference to the DOM element
    var grid;

  /**
   * register the thubmnails plugin
   */
  videojs.plugin('watermark', function(settings) {
    if (settings.debug) console.log('watermark: Register init');

    var options, player, video, img, link;
    options = extend(defaults, settings);

    /* Grab the necessary DOM elements */
    player = this.el();
    video = this.el().getElementsByTagName('video')[0];

    grid = document.createElement('div');
    grid.style.display = 'grid';
    grid.style.gridTemplateColumns = 'repeat('+options.columns+', 1fr)';
    grid.style.gridAutoRows = 'minmax(100px, auto)'; // Adjust the minimum and maximum height of each row
  
    var totalItems = options.rows * options.columns;

    for (var i = 0; i < totalItems; i++) {
      var gridDiv = document.createElement('div');
      if(options.text)gridDiv.textContent = options.text;
      if(options.file){
        img = document.createElement('img');
        gridDiv.appendChild(img);
        img.src = options.file;
      }
      gridDiv.style.fontSize = options.fontSize;
      grid.appendChild(gridDiv);
    }

    grid.style.opacity = options.opacity;
    grid.style.pointerEvents = 'none'; // Ignore user interactions on the grid container

    player.appendChild(grid);
    
    if (options.debug) console.log('watermark: Register end');
  });
})();
