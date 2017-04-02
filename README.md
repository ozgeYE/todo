# todo

When the "grunt cssmin" command is executed, 
  the css files in the css folder are minimized and 
  the minify file is added under 
  the "minify" folder with the extension ".min.css"
  
When the "grunt uglify" command is executed, 
  the js files in the js folder are minimized and 
  the minify file is added under 
  the "minify" folder with the extension ".min.js"
  
When the "grunt concat" command is executed,
  all ".min.css" files in the minify folder are created as "output.css" under "web / css" and 
  all ".min.js" files in the minify folder are created as "output.js" under "web / js".
