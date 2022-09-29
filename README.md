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


# Database:

 MongoDB is a cross-platform, document oriented database that provides, high performance, high availability, and easy scalability. MongoDB works on concept of collection and document.
 
Connecting Django with MongoDB:

There are three ways to connect Django to MongoDB:

1.	PyMongo: PyMongo is the standard driver through which MongoDB can interact with Django. It is the official and preferred way of using MongoDB with Python. PyMongo provides functionality to perform all the database actions like search, delete, update, and insert. Since PyMongo is available with PyPI, you can quickly install it using a pip command.
	
2.	MongoEngine: MongoEngine is a Python Object-Document-Mapper. It’s similar to Object-Relational-Mapper in relational databases. MongoEngine has a declarative API that is easy to learn and use.
	
3.	Djongo: If you are using a relational database like SQL and want to migrate to MongoDB, for that you can use Djongo. Without changing the Django ORM, Djongo transpiles all the SQL queries to MongoDB syntax queries.

Connect Django and MongoDB Using Djongo:

Install Djongo:

pip install djongo

Now, go to your project folder (example, MyFirstDjangoProj), and open settings.py file. You can edit it on Textpad, Python IDE, or any editor. Search for DATABASES, and change the settings to point to MongoDB. The ENGINE will be djongo and the database name (NAME) will be your MongoDB database name.

DATABASES = {

       'default': {
       
           'ENGINE': 'djongo',
           
           'NAME': 'db-name',
       }
       
   }
   
If your database is not on localhost or is secured, you should also fill in the CLIENT information like HOST, USERNAME, PASSWORD, etc.

DATABASES = {

        'default': {
        
            'ENGINE': 'djongo',
            
            'NAME': 'your-db-name',
            
            'ENFORCE_SCHEMA': False,
            
            'CLIENT': {
            
                'host': 'mongodb+srv://<username>:<password>@<atlas cluster>/<myFirstDatabase>?retryWrites=true&w=majority'
                
            }  
        }
}
