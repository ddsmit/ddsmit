Title: branch
Date: 2020-07-19
Category: this
Tags: git, github
Slug: this-branch
Authors: David Smit
Summary: Branching out is important.

## def branch(self, day=3)

After deploying the website to [Netlify](https://www.netlify.com/), it became clear that I would need to figure out how to use branches in [git](https://git-scm.com/)/[github](https://www.github.com) if I wanted to make larger structural changes without disrupting the live website (I didn't want to disable the automated deployment to [Netlify](https://www.netlify.com/)).

A quick google search brought me to [pull request tutorial](https://yangsu.github.io/pull-request-tutorial/#:~:text=What%20is%20a%20Pull%20Request,follow%2Dup%20commits%20if%20necessary.) that provided enough information to get me going. First, I had to create a new branch using "checkout":

`git checkout -b theme-updates`

This created a new branch with the name "theme-updates" and switched to that branch. 

I then tried creating a test page to make sure that it could be commited and pushed without updating the website. I created a blank resume page (which will be not blank very soon), commited the change, and then pushed it to [github](https://www.github.com) with the following command:

`git push origin theme-updates`

The new branch I pushed showed up in the [repo](https://www.github.com/ddsmit/ddsmit), and the website did not update. Success! 

Now that I have more confidence I can break things locally and push incomplete changes up to [github](https://www.github.com) without creating havok, I'm going to start building out some other sections of the site. The next item I'm going to tackle is building out a dynamic resume using HTML, CSS, and JavaScript and see what it takes to fit it into Pelican.

Stay tuned!