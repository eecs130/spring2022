---
layout: two-column
title: CSS Grid & Media Queries
type: tutorial
abbreviation: Tutorial 3
draft: 0
num: 3
points: 2.5
due_date: 2021-04-16
description: 
    - Practice with CSS Grid
---
<a href="/spring2021/course-files/tutorials/tutorial03.zip" class="nu-button">Download Tutorial Files <i class="fas fa-download"></i></a>

CSS is notoriously a nightmare -- particularly when it comes to layouts. As an effort to provide some guidance re: using some more modern techniques for layout, the course staff and I have created a basic CSS tutorial, where multiple layouts can be easily supported using CSS Grid -- the latest in a long line of strategies for simplifying layouts.

## Background

There are many different ways to use CSS grid to make a layout. In this tutorial, we will follow an approach that involves:

1. Setting up columns and rows using the `grid-template-columns` and `grid-template-rows` properties.
1. Naming the regions of your grid using the `grid-template-areas` property.
1. Assigning different elements to different regions of your grid using the `grid-area` property. 
1. Creating margins in your grid using the `grid-row-gap` and `grid-column-gap` properties.
1. Scaling your columns flexibly using "fractional units" (fr). For more info on the `fr` unit, see the [CSS units page](/spring2021/css-reference/units/).

For instance, the following code uses these properties to generate the layout pictured right:

### CodePen
<p class="codepen" data-height="400" data-theme-id="light" data-default-tab="css,result" data-user="vanwars" data-slug-hash="jOyxJqR" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="CSS Grid">
  <span>See the Pen <a href="https://codepen.io/vanwars/pen/jOyxJqR">
  CSS Grid</a> by Sarah (<a href="https://codepen.io/vanwars">@vanwars</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://cpwebassets.codepen.io/assets/embed/ei.js"></script>

### References
The <a href="https://css-tricks.com/snippets/css/complete-guide-grid/" target="_blank">CSS Tricks: "A Complete Guide to Grid"</a> tutorial is great tutorial will essentially walk you through some of the key idea of today's lab. In addition, there are some resources on the course website that also cover relevant ideas:

* [CSS Grid]({{ site.baseurl }}/css-reference/css-grid/)
* [Media Queries]({{ site.baseurl }}/css-reference/media-queries/)

## Instructions

Please download the tutorial files and implement the three layouts below using CSS Grid. You should use the same stylesheet for all three views. Your TA will help you get started and walk you through one way of defining CSS Grids. 

<img src="{{site.baseurl}}/assets/images/css-layouts.png">


## What to turn in
To submit this week's Tutorial assignment, please do the following: 

1. Save all of your Tutorial 3 files in a folder called `tutorial03`
2. Add your `tutorial03` folder to your git repository, commit them, and push them to github. Your commands should look something like this:

```shell
$ git add tutorial03
$ git commit -am "Checking in my tutorial03 folder"
$ git push
```

When you're done, paste a link to your tutorial03 GitHub pages on Canvas under the Tutorial 3 assignment.