Title: Linux Server for Flask (Notes)
Date: 2020-06-20
Category: notes
Tags: linux, python, flask, nginx, uwisgi
Slug: linux-flask-deployment
Authors: David Smit
Summary: Notes I took during a Flask App Deployment

These are the notes I took for deploying a Flask App using micro wisgi and nginx on Ubuntu 20 via a Linode Nanode. These notes were derived while following [Corey Schafer's Flask Tutorial](https://www.youtube.com/watch?v=goToXTC96Co). I did not take notes about setting up the Nanode or Putty (SSH on Windows). If there is any interest, please shoot me an email or a tweet and I will add it to my list. These notes are meant to be for my personal use, and not as a comprehensive tutorial. If you have never set up a server for a Flask app, I would follow Corey's tutorial.

## Initial Server Setup
When you first SSH into the server, you will be at the root level. The first thing you will want to do is to update and upgrade Ubuntu using the following command:
`
$ apt update && apt upgrade #Upgrades and updates ubuntu
`
The next step is to set up the hostname for the server. 
`
$ hostnamectl set-hostname <your host name>
`
You can then verify the host name is set with the following command:
`
$ hostname (returns the hostname set)
`
set host name and host file
$  nano /etc/hosts
put in our IP address in after the localhost IP address and the host name
add limited user to the machine to avoid root (best practice)
$ adduser ddsmit
create a password then enter the information
Now you want to add the user to the sudo group
$ adduser ddsmit sudo
log out then log in as new user
now we need to set up SSH key based authentication
$ pwd to show dirrectory
create a dirrectory for the ssh keys
mkdir .ssh
Now you need to generate the key. For windows, you use keygen and follow the dirrections on linode:
https://www.linode.com/docs/security/authentication/use-public-key-authentication-with-ssh/#windows

These dirrections will also set permissions. This is done with 
$ sudo chmod 700 ~/.ssh/
$ sudo chmod 600 ~/

First digit is the user permissions, the 2nd digit is for the group, third digit is for everyone else

Now that the keys are working, we need to disable password logins for root

$ sudo nano /etc/ssh/sshd_config

This is the ssh configuration file. We need to change 2 values in this file

PermitRootLogin should be now
PasswordAuthentication should be uncommented and changed to no

Save these changes, then restart

sudo systemctl restart sshd

Now we need to set up a firewalls
$ sudo apt install ufw

Now we need to set up the rules

$ sudo ufw default allow outgoing
$ sudo ufw default deny incoming

Now we need to explicitly allow actions on certain ports OR YOU WILL NOT BE ABLE TO SSH INTO THE SERVER!!
$ sudo ufw default allow ssh
Now we will allow access to the local port to make sure everything is working
$ sudo ufw default allow 5000
Now we need to enable the rules. Be sure everything is correct because the SSH connection may be interupted.
$ sudo ufw enable

Now you need to git clone the repo

Now install PIP and venv
$sudo apt install python3-pip
$sudo apt install python3-venv

Create a venv in the project using 
python3 -m venv <location>
Then activate it
$ source venv/bin/activate

Now install of the requirments for the project
$ pip install -r requirements.txt

Now test with the dev server, but first you need to set the env variables

We will create a JSON file with these files

$ sudo touch /etc/config.json

Then edit the file to include the env variables


{
    "SECRET_KEY":"CasdAS342fd41af915fbe41ebd10e4b772ef88d4a6",
    "SQLALCHEMY_DATABASE_URI":"sqlite:///site.db"
}

Now we have to export the flask app so it can be used locally but exposed

$ export FLASK_APP=run.py

To run FLASK_APP, you do a flask run and pass 0.0.0.0 as the host.

Now we want to get our application working with nginx and guninicorn

To install nginx 
$ sudo apt install nginx

Make sure you are in the venv and pip install gunicorn

Now we need to update a couple of configurations files for nginx and gunicorn

nginx handles the static files and passes the other requests to gunincorn

Remove the default configurations file for nginx.

$ sudo rm /etc/nginx/sites-enabled/default

Then you create a new configuration file.

$ sudo nano /etc/nginx/sites-enabled/courageousengineer

make the following edit

server {
	listen 80; #listening on port 80
	server_name your IP;
	
	location /static {
		alias /home/ddsmit/chrissmit/chrissmit/static #sets the static route to the static files in the project
	}
	location / {
		proxy_pass http://localhost:8000 # passes all other traffic to gunicorn
		include /etc/nginx/proxy_params;
		proxy_redirct off;
	}
}

Now you have to open up the firewall for port 80 and stop port 5000

$ sudo ufw allow http/tcp
$ sudo ufw delete allow 5000
$ sudo ufw enable

Now we need to restart nginx
$ sudo systemctl restart nginx

Now we need to run gunicorn so the python code is active

$ gunicorn -w 3 run:app

Ref, to know the number of cores you have, use

$nproc --all

Use 2*cores + 1

We need to install and use software called supervisor to start and restart gunicorn

$ sudo apt install supervisor

Now we need to set up a configuration file for supervisor

@ sudo nano  /etc/supervisor/conf.d/courageousengineer.conf

[program:courageousengineer]
directory=/home/ddsmit/chrissmit
command=/home/ddsmit/chrissmit/chrissmit/venv/bin/gunicorn -w 3 run:app
user=ddsmit
autostart=true
autorestart=true
stopasgroup=true
killasgroup=true
stderr_logfile=/var/log/courageousengineer/courageousengineer.err.log
stdout_logfile=/var/log/courageousengineer/courageousengineer.out.log

Save the file. Now create the dirrectory and files

$ sudo mkdir -p /var/log/courageousengineer/courageousengineer
$ sudo touch /var/log/courageousengineer/courageousengineer/courageousengineer.err.log
$ sudo touch /var/log/courageousengineer/courageousengineer/courageousengineer.out.log

Now you need to restart supervisor
$ sudo supervisorctl reload

To set the images to be able to accept larger than 2 mb, go to the following file:

$ sudo nano /etc/nginx/nginx.conf

and add "client_max_body_size 5M;

Resart nginx 

$ sudo systemctl restart nginx


