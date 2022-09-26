# create virtual environment

pip install virtualenv

python -m virtualenv env

# activate virtual environment

env\scripts\activate


# run following requiremrnt command

pip install -r requirements.txt


# for run the project

python manage.py makemigrations

python manage.py migrate

python manage.py runserver
