Title: deploy
Date: 2020-06-20
Category: this
Tags: pelican, python, netlify, github
Slug: this-deploy
Authors: David Smit
Summary: Finding a place to roost.

## def deploy(self, day=2, host=netlify)

After building a quick and dirty website using Pelican, I wanted to get it out to the public to share. I started looking at GitHub pages first because it would be relatively simple, but Python wasn't treated as a first class citizen and I didn't find any good resources on deploying from Pelican.

After doing a little more research, I decided to try Netlify. Netlify made initial setup of my account really easy, and I got 95% of the way by using Raz's [post](https://dev.to/razcodes/how-to-deploy-your-static-pelican-website-to-netlify-55d7) on [dev.to](https//dev.to). 

The only other snag I ran into is Netlify uses legacy (2.7) [Python](http://www.python.org) by default. After a little research, I found out that the only thing that was needed to specify another version of [Python](http://www.python.org) was to include a "runtime.txt" file in the project dirrectory with the text:

`3.7`

This sets the version of Python to 3.7 (I would have prefered 3.8, but it's nice to be back to modern Python). 

After that, it was smooth sailing....maybe a little too smooth. I've not gotten into a habit of using branches in my personal projects, and Netlify is set up to autmoatically build and deploy when the main branch on GitHub is updated.

This brings up a gap in how I work that I know I want to work on (utilizing branches in GitHub), sounds like a great challenge for day 3. 

