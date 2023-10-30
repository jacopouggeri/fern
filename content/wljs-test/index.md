---

title: "Interactive figures demo"
authors:
  - name: "@JerryI"
    affiliation: "University of Augsburg, EKM"
    email: "krikus.ms@gmail.com"

date: "2023-10-19"
abstract: "This is a short demonstartion of a Wolfram Language used for making online interactive figures."
keywords:
  - Wolfram Language
  - Javascript
  - d3.js
  - three.js
  - plotly.js

objects:
  - id: "plotly"
    file: "plotly.js"  
    caption: "A simple graph plotted using *Plotly* function"

  - id: "plot"
    file: "plot.js"  
    caption: "A simple graph plotted using *Plot* function (use a mouse to pan and zoom)"  
    
  - id: "plot3d"
    file: "plot3d.js"  
    caption: "An example of 3D graphics"     

content: "md" # "yaml" or "md", in case of "yaml" content should be stored in section-<title>.yaml, in case of "md" content should be written below.
citationStyle: "apa"
---

## Content
As a proof of concept, we export this line of code as a JSON string from Wolfram Engine

```mathematica
Plot[Accumulate@Table[Sin[a n], {n,5}]//Evaluate, {a,0,2 Pi}, 
  FrameLabel->{"\alpha (sec^{-1})", "y"}, Frame->True
]
```

and substitute as `plot.js` file into a file section in this sample page. On this page a [Javascript Wolfram Kernel](https://jerryi.github.io/wljs-docs/docs/interpreter/intro) with a couple of graphical libraries executes it in your browser and plots the result into a DOM element. 

In general, you do not need Wolfram Engine installed, since Javascript core works as a standalone interpreter.

You can find in __Objects__ section the result.