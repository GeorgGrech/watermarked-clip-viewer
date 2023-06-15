# Video Watermark Generator

This is a simple proof-of-concept for a video clip viewer that generates a custom watermark based on the ID of the viewer.

This protoype generates a custom watermark using an image as well as text that includes an assignable variable. This watermark is repeated as a grid to cover the entire video.  

The base video viewer uses [Video.js](https://github.com/videojs/video.js/).
The watermark uses a modified version of the [Video.js Watermark](https://github.com/xbgmsharp/videojs-watermark) plugin by xbgmsharp.

It should be noted that the dependence on an external browser means that this solution is not tamperproof, and the watermark can be deleted via Inspect Element. For greater safety, the solution would be ideally deployed as a standalone application.

The example can be run by downloading this project and opening `example\index.html`. After putting a value in the identifier field and clicking "Login", you should be redirected to the clip viewer using an appropriately updated watermark.