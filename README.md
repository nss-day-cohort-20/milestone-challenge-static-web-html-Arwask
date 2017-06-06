# milestone-challenge-static-web-html-Arwask
```# The Static Web: HTML + CSS Milestone Challenge
### Create a page for your personal branding that will showcase your work and be used as part of your graduation self-marketing.
## Setup

These commands are a helpful quick start. You may choose to ignore them completely and create your own directory structure. If you choose to use this recommendation, just copy the commands below. It doesn't matter what directory you are currently in.
Run the following command in your terminal:

```bash
mkdir -p ~/workspace/challenges/static-web/html && cd $_
```

This will create a project folder and cd you into it.
When you are ready to start the challenge, request the Github Classroom link from your instructor  
+ Once your repository is created on GitHub, copy the list of commands under **"..or create a new repository on the command line"** by clicking on the clipboard icon  
+ Paste the commands into your terminal. This will create a README.md file, add it, commit it, connect your local repo to GitHub, and set you up to push changes. (If the last command, `git push origin master` isn't automatically executed, hit enter/return to run it).

All of your work should be on a branch, NOT on master. To do this, type:

```bash
git checkout -b challenge
touch index.html
mkdir css && touch css/styles.css
mkdir images
```
You are now ready to work in the `challenge` branch.

If you would like to have your work reviewed, push up the branch (`git push origin challenge`), submit a pull request on Github, and Slack the instruction team with a request for review (be sure to include a link to your repo). A member of the instruction team will take a look and give feedback. Your work does not need to be complete to receive feedback.


## Instructions

Create a page for your own personal branding that can be treated as the beginning of your portfolio. You should focus on HTML structure and syntax with basic layout using styles.


### Content and Technical Requirements
1. Title - make it meaningful.
1. Header element `<h1>` - This is the main headline; include your name and what this page is.
1. Photo
1. Section element containing your bio
1. Section element with links to resources or sites you like
1. Section element with two sections for future projects (placeholders)
1. Section area containing your blog posts. Each of these should use
```article```
element.
1. Footer element with email and professional social media links; Github, twitter, LinkedIn, etc.
1. Semantic mark-up for all major elements.
1. Validate your html page with W3 validator: https://validator.w3.org/
1. Appropriate folder structure: images, css.
1. Color scheme - choose primary, secondary, and tertiary colors in addition to black and white. Use these colors consistently in your stylesheet.
1. The page will have a linked JavaScript file for the blog posts section. Create an array to hold your posts (at least 2 posts). Each item in the array must be an object that contains at a minimum the following information: Title, Copy, Date. Use JavaScript to add each post to the DOM.


## Notes
* Examples of non-semantic elements: `<div>` and `<span>` - Tells nothing about its content.
* Examples of semantic elements: `<form>`, `<table>`, and `<article>` - Clearly defines the content.

* Page Titles and Headings: http://meetcontent.com/blog/introducing-content-page-titles-headings/
* Explore and create color combinations: https://color.adobe.com
* Material Color: https://material.io/guidelines/style/color.html#color-color-system
    - Material color tool - https://material.io/color/#!/?view.left=0&view.right=0