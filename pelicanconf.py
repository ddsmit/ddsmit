#!/usr/bin/env python
# -*- coding: utf-8 -*- #
from __future__ import unicode_literals

AUTHOR = 'David Smit'
SITENAME = 'ddsmit'
SITEURL = 'https://www.ddsmit.com'

THEME = 'blueidea'
PATH = 'content'

TIMEZONE = 'EST'

DEFAULT_LANG = 'English'

# Feed generation is usually not desired when developing
FEED_ALL_ATOM = None
CATEGORY_FEED_ATOM = None
TRANSLATION_FEED_ATOM = None
AUTHOR_FEED_ATOM = None
AUTHOR_FEED_RSS = None

# Blogroll
LINKS = (
    ('Courageous Engineer','https://www.courageousengineer.com'),
)

# Social widget
SOCIAL = (
    ('Twitter', 'https://twitter.com/davidouglasmit'),
    ('My GitHub','https://www.github.com/ddsmit'),
    ('Gmail', 'mailto:david.d.smit@gmail.com'),
    ('LinkIn', 'https://www.linkedin.com/in/david-smit-b8220ba6/')
)

DEFAULT_PAGINATION = 10

# Uncomment following line if you want document-relative URLs when developing
#RELATIVE_URLS = True