---
layout: assignment-two-column
title: Music Player
type: tutorial
abbreviation: Tutorial 6
draft: 0
due_date: 2022-05-06
num: 6
points: 2.5
description:
    - Functions and Event Handlers
---

<a href="/spring2022/course-files/tutorials/tutorial06.zip" class="nu-button">Download Tutorial Files <i class="fas fa-download"></i></a>

Today you will be writing the code that allows you to view and listen to samples of songs by Bob Dylan. Specifically, you will:

1. Write the code to output the names of each song and its corresponding album image.
2. Write an event handler so that when your user clicks on any album, the song preview should play in the audio player.

## Background
This week in tutorial, we're going to review some concepts that will hopefully be helpful in [Homework 3](hw03). Please download the `tutorial06` files and save them to your `/cs130/tutorials` folder. Before you begin, take stock of the files you have been given (except for the hints):

Open the `index.html` in VS Code. Note that the body of `index.html` doesn't have much in it other than a `header` section, a `main` section, and an `audio` tag (which uses HTML5's built-in audio functionality). 

Now open `index.js` in VS Code. At the top, there are a list of tracks by Bob Dylan, represented as a list of object. Each object has 4 properties: 
* `id`: a Spotify ID
* `name`: the name of the track
* `preview_url`: a link to a 30-second clip of the track
* `image_url`: a link to an image of the album.

Below this list are two notes and some starter code (explained in more detail below).

The `styles.css` is pretty straightforward. Nothing new here. Feel free to modify this file however you like.

Please preview the `index.html` file in your browser. Note that when you click the one card shown, the song plays.

## Your Tasks
Please complete the following two tasks:

### 1. Output all of the song names and album covers to the screen
Write some code that iterates through every item in your tracks list and outputs a card to the screen for each track.

* If you get stuck, take a look at `hints/hint-1.js`
* Note that there is an attribute on the div tag called "data-index", which indicates where the track is positioned in the list. You will be taking advantage of this in part 2.

### 2. Modify the playSong() event handler
Modify the `playSong()` event handler so that it loads in the track associated with the album that has just been clicked. If you were successful, it should look like this (but don't view the source of the example just yet!):

* <a href="https://vanwars.github.io/cs130-coursework/tutorials/tutorial06/index.html" target="_blank">Tutorial 6 Demo</a>

#### Hints
* Hint 1: How can you make use of the "data-index" attribute to access the corresponding `preview_url` from the original `tracks` list? 
* Hint 2: If you get stuck, take a look at `hints/hint-2.js`

### Optional: feel free to switch out the tracks
If you want, you can search for songs and tracks that YOU LIKE. Do to this, please navigate to this link and search for some more suitable data:

* <a href="https://www.apitutor.org/spotify/simple/v1/search?q=the%20arcade%20fire&type=track&limit=3" target="_blank">https://www.apitutor.org/spotify/simple/v1/search?q=the%20arcade%20fire&type=track&limit=3</a>

You'll put your search term directly after the **?q=** (replace `the%20arcade%20fire`). And if you want to adjust the number of results returned, you'll adjust the `limit=3` query parameter.

When you've found a song you like, just replace the values of `id`, `name`, `preview_url` and `image_url` in one of your tracks and test it out!

## What to turn in
Before you submit this week, please edit the homepage that you made in [Tutorial 3](tutorial03) by adding a link to the `index.html` file that you made in today's tutorial. When you're done, paste a link to your GitHub pages homepage (website) + your Github repository (code files) on Canvas under the Tutorial 6 assignment.