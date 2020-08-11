Title: Deploying Pelican on Netlify
Date: 2020-06-20
Category: notes
Tags: pelican, python, netlify
Slug: netlify-pelican-deployment
Authors: David Smit
Summary: Notes I took during Pelican deployment

I mostly followed Raz's [post](https://dev.to/razcodes/how-to-deploy-your-static-pelican-website-to-netlify-55d7) on [dev.to](https//dev.to) and followed the instructions on [Netlify](https://www.netlify.com). 

The only other step I had to do to get things working was to add a runtime.txt file to the directory of the project that included:

`3.7`

This told [Netlify](https://www.netlify.com)to use [Python](http://www.python.org) 3.7 instead of 2.7. 

