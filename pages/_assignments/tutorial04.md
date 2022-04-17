---
layout: two-column
title: CSS Grid & Media Queries
type: tutorial
abbreviation: Tutorial 4
draft: 0
num: 4
points: 2.5
due_date: 2022-04-22
description: 
    - Practice with CSS Grid
---

<a href="/spring2022/course-files/tutorials/tutorial04.zip" class="nu-button">Download Tutorial Files <i class="fas fa-download"></i></a>

CSS is notoriously a nightmare -- particularly when it comes to layouts. As an effort to provide some guidance re: using some more modern techniques for layout, the course staff and I have created a basic CSS tutorial, where multiple layouts can be easily supported using CSS Grid -- the latest in a long line of strategies for simplifying layouts.

## Background

There are many different ways to use CSS grid to make a layout. In this tutorial, we will follow an approach that involves:

1. Setting up columns and rows using the `grid-template-columns` and `grid-template-rows` properties.
1. Naming the regions of your grid using the `grid-template-areas` property.
1. Assigning different elements to different regions of your grid using the `grid-area` property. 
1. Creating margins in your grid using the `grid-row-gap` and `grid-column-gap` properties.
1. Scaling your columns flexibly using "fractional units" (fr). For more info on the `fr` unit, see the [CSS units page](/spring2022/css-reference/units/).

For instance, the following code uses these properties to generate the layout pictured right:

### CodePen
<p class="codepen" data-height="400" data-theme-id="light" data-default-tab="css,result" data-user="vanwars" data-slug-hash="jOyxJqR" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="CSS Grid">
  <span>See the Pen <a href="https://codepen.io/vanwars/pen/jOyxJqR">
  CSS Grid</a> by Sarah (<a href="https://codepen.io/vanwars">@vanwars</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://cpwebassets.codepen.io/assets/embed/ei.js"></script>

### References
Please see [Lecture 8](../lectures/lecture08) for more examples and resources.

## Your Tasks

### 1. Create the three layouts shown below

Please download the tutorial files and implement the three layouts below using CSS Grid. You should use the same stylesheet for all three views. Your TA will help you get started and walk you through one way of defining CSS Grids. 

<img src="{{site.baseurl}}/assets/images/css-layouts.png">

### 2. Update your homepage to link to your tutorial04
Please update your index.html page from last week's tutorial so that it links to your completed `Tutorial 4` assignment. See Sarah's <a href="https://vanwars.github.io/cs130-coursework" target="_blank">example homepage</a>.


## Checklist
Please make sure that you have completed the following:

{:.checkbox-list}
* Implemented desktop layout using CSS Grid
* Implemented tablet layout using CSS Grid
* Implemented mobile layout using CSS Grid
* Your homepage (from Tutorial 3) links to your completed `tutorials/tutorial04/index.html` webpage. 
* Everything committed to GitHub (stage, commit, and sync).

## What to turn in
Paste a link to your GitHub pages homepage on Canvas under the Tutorial 4 assignment.