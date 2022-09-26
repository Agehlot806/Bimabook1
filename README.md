# create virtual environment

pip install virtualenv

python -m virtualenv env

# activate virtual environment

env\scripts\activate


# run following requirement command

pip install -r requirements.txt


# for run the project

python manage.py makemigrations

python manage.py migrate

python manage.py runserver


# Creating an admin user¶

First we’ll need to create a user who can login to the admin site. Run the following command:

python manage.py createsuperuser
Enter your desired username and press enter.

Username: admin
You will then be prompted for your desired email address:

Email address: admin@example.com
The final step is to enter your password. You will be asked to enter your password twice, the second time as a confirmation of the first.

Password: **********
Password (again): *********
Superuser created successfully
