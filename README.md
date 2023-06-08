# Video Watermark Generator

This is a simple proof-of-concept for a video clip viewer that generates a custom watermark based on the ID of the viewer.

This protoype generates a custom watermark using an image as well as text that includes an assignable variable. This watermark is repeated as a grid to cover the entire video.  

The base video viewer uses [Video.js](https://github.com/videojs/video.js/).
The watermark uses a modified version of the [Video.js Watermark](https://github.com/xbgmsharp/videojs-watermark) plugin by xbgmsharp.

The example can be viewed by opening `example\index.html`