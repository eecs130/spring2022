---
layout: assignment-two-column
title: Getting Started with GitHub
type: tutorial
abbreviation: Tutorial 2
draft: 0
due_date: 2021-04-09
num: 2
points: 2.5
description:
    - Setting up GitHub
---
<style>
    img {
        max-width: 750px;
        width: 60%;
        border: solid 1px #000;
    }
    img.large {
        max-width: 100%;
        width: 100%;
        border: solid 1px #000;
    }
    .schematic {
        border: none;
        max-width: 850px;
        width: 70%;
        display: block;
        margin: auto;
    }
    table.instructions td, table.instructions th {
        font-size: 1.0em;
    }
    table.instructions td:first-child {
        white-space: nowrap;
    }
    ul.spaced li, ol.spaced li {
        margin-bottom: 25px;
    }

</style>

{:.blockquote-no-margin}
> **LEARNING OBJECTIVES**
> 1. Get familiar with the command line
> 1. Install git and practice using it
> 1. Register for GitHub and configure Git Pages


## Part 1: Do the GitHub Tutorial (Ideally Prior to Your Tutorial)
Please complete the <a href="https://www.linkedin.com/learning/collections/6619359376471842816?u=75814418" target="_blank">LinkedIn Learning GitHub tutorial</a> **before the tutorial** to help you better follow along. In order to access the LinkedIn content, please sign in with your NU account.


## Part 2: Intro to the Command Line
In tutorial, your TA will go over how to use the command line and some common commands. <a href="https://tutorial.djangogirls.org/en/intro_to_command_line/" target="_blank">Django Girls</a> is a good resource. I've also created a cheat sheet for you:

{:.instructions}
| | DOS (Windows) | Shell (Mac / Linux) |
|--|--|--|
| **What directory am I in?** | `> cd` | `$ pwd` |
| **Change directories** | `> cd {{your_file_path}}` | `$ cd {{your_file_path}}` |
| **List files & directories** | `> dir`<br> `> tree  # lists subdirectories` | `$ ls`<br>`$ ls -l` |
| **Navigate to descendant directory** | `> cd  eecs130\lectures\lecture03` | `$ cd  eecs130/lectures/lecture03` |
| **Navigate to sibling directory** | `> cd ..\lecture02` | `$ cd  ../lecture02` |
| **Navigate to ancestor directory** | `> cd ..\..\` | `$ cd  ../../` |
| **Navigate to home directory** | `> cd` | `$ cd` |
| **Command history** | `> doskey /HISTORY` | `$ history` |

Other optional commands you may find useful...

{:.instructions}
| | DOS (Windows) | Shell (Mac / Linux) |
|--|--|--|
| **Create a new file** | `> echo . > my_file.txt` | `$ echo . > my_file.txt`<br> `$ touch my_file.txt` |
| **Append to a file** | `> echo "some text" >> my_file.txt` | `$ echo "some text" > my_file.txt` |
| **Save history to a file** | `> doskey /HISTORY > my_history.txt` | `$ history > my_history.txt` |
| **Move a file** | `> move my_history.txt Documents/.` | `$ mv my_history.txt Documents/.` |
| **Make a folder** | `> mkdir my_folder` | `$ mkdir my_folder` |
| **Delete a file** | `> del my_history.txt` | `$ rm my_history.txt` |
| **Delete a folder** | `> rmdir my_folder` | `$ rm -r my_folder` |


## Part 3: Install Git
In order to interact with GitHub, you need to install git. Before you install it, check and make sure it’s not already installed by:

1. Opening your Terminal (Mac) or Command Prompt (Windows) and typing the word `git` at the command prompt. 
2. If you get a message that says "not recognized" or something along those lines, then you need to install it: <a href="https://git-scm.com/book/en/v2/Getting-Started-Installing-Git" target="_blank">https://git-scm.com/book/en/v2/Getting-Started-Installing-Git</a> 


## Part 4: Register for an account on GitHub
If you don’t already have a GitHub account, register for one: <a href="https://github.com/" target="_blank">https://github.com/join</a>.

You will also need to create a **"Personal Access Token"**. The process is described <a href="https://docs.github.com/en/github/authenticating-to-github/creating-a-personal-access-token" target="_blank">here</a>.

## Part 5: Set Up Your repository

### 1. Create repository
1. Once you’ve logged into GitHub, click on the "Repositories" tab (upper left-hand side of your screen), and then click the green "New" button. 
1. Name your repository `cs130-coursework`, ensure that "public" is selected, and make sure you do **NOT** create a README.md file. 
3. Then click the green "Create Repository" button.

<img src="/spring2021/assets/images/tutorials/tutorial02/image1.png" />

### 2. Set up your local git repository and link it to GitHub
After you create your repository, you will be redirected to a screen that looks like the one pictured below:

<img class="large" src="/spring2021/assets/images/tutorials/tutorial02/image3a.png" />

Copy the code underneath the "...or create a new repository on the command line" (by clicking the clipboard icon).

### 3. In your local cs130 folder, create a new folder called repo:

```shell
cs130
   ├── homework
   ├── tutorials
   ├── lectures
   └── repo
```

Navigate into your repo folder, and then paste the text you just copied from GitHub, which will look something like the text below (but different, as it will be pointing to ***your*** GitHub repository). 
{% assign repo_address = '{{ your repo address }}' %}

```shell
git init
git add README.md
git commit -m "first commit"
git branch -M main
git remote add origin {{ repo_address }}
git push -u origin main
```

**What the above code means...**

{:.instructions}
| `git init` | Initializes an empty git repository on your file system |
| `git add README.md` | Added the README.md file that git made to the list of files that are "tracked" by the repository. |
| `git commit -m "first commit"` | "Commits" the change locally (analogous to registering a savepoint with git) |
| `git branch -M main"` | Creates a new branch called "main." |
| `git remote add origin {{ repo_address }}` | Creates an association between your computer and **your GitHub repository** (see step 2 above). |
| `git push -u origin main` | Posts your files to GitHub |

### 4. Add and commit tutorial01 folder (from last week) to your local and remote repo

{:.spaced}
1. Copy your tutorial01 folder into your repo folder
1. Check the status of your repo by typing:<br>`$ git status`<br>
It should say that your tutorial01 files are "untracked"
1. Add all of your tutorial01 files to the list of files that are tracked by the repo by typing:<br>`$ git add tutorial01`
1. Check the status of your repo again:<br>`$ git status`<br>
It should now say that you tutorial01 files are being tracked.
1. Now, commit your new tutorial01 files to the repo by typing:<br>`$ git commit -m "Adding my tutorial01 to the repo"`
1. Finally, "push" your files to GitHub:<br>`$ git push origin main`

## Part 6. Finally, Configure GitHub Pages
GitHub also allows you to host pages. To enable GitHub pages, go to your repository and click on the settings tab. Then, scroll halfway down to the GitHub Pages section, and in the dropdown menu below "Source," select your main branch and then click the "Save" button. 

<img src="/spring2021/assets/images/tutorials/tutorial02/image2.png" />


This will generate a link to your GitHub site. A few caveats:

{:.spaced}
1. GitHub pages are a bit buggy. For whatever reason, for the first few hours after you enable github pages , you *may have to tack on a index.html after the root website so that you don’t get a HTTP404 (page not found) error. Eventually, GitHub pages will resolve the root URL.
2. GitHub pages does not support backends, but we will be addressing this in future homeworks.

## What to turn in
Just paste in your links to Canvas:
1. A link to your GitHub repository
2. A link to your GitHub Pages