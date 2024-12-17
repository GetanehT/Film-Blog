# My-Blogs

## Project goals
This project provides a Django Rest Framework API for the [My_Blogs React web ((https://github.com/GetanehT/My_Blogs.git)]) It has also been designed with a future native iOS app in mind.

The goal of the My Blogs project is to create a comprehensive blogging platform that covers three main categories: Travel, World, and Technology. The platform should provide users with the ability to browse posts, interact with content through comments, and explore featured articles. The backend is built with Django, and the API is exposed via Django REST Framework (DRF), while the frontend will be integrated with React.

The project also aims to:

Provide an intuitive and engaging blog experience for users.
Allow the management of content via the Django admin interface.
Offer secure and scalable API endpoints for interacting with the content.

## Table of contents
- [My_Blogs](#My_Blogs)
  * [Project goals](#project-goals)
  * [Table of contents](#table-of-contents)
  * [Planning](#planning)
    + [Data models](#data-models)
    + [Category model](#category-model)
    +[Post model](#post-model)
    +[Fields](#Fields)
    + [**Contact**](#--contact--)
  * [API endpoints](#api-endpoints)
  * [Frameworks, libraries and dependencies](#frameworks--libraries-and-dependencies)
    + [django-cloudinary-storage](#django-cloudinary-storage)
    + [dj-allauth](#dj-allauth)
    + [dj-rest-auth](#dj-rest-auth)
    + [djangorestframework-simplejwt](#djangorestframework-simplejwt)
    + [dj-database-url](#dj-database-url)
    + [psychopg2](#psychopg2)
    + [python-dateutil](#python-dateutil)
    + [django-recurrence](#django-recurrence)
    + [django-filter](#django-filter)
    + [django-cors-headers](#django-cors-headers)
  * [Testing](#testing)
    + [Manual testing](#manual-testing)
    + [Python validation](#python-validation)
      - [Bugs found while testing the API in isolation](#bugs-found-while-testing-the-api-in-isolation)
  * [Deployment](#deployment)
  * [Credits](#credits)

## Planning

The planning phase includes defining the project goals, setting up the development environment, deciding on the data models, and creating the necessary API endpoints to handle blog post retrieval, user comments, and category filters.

Key considerations during the planning phase include:

- Identifying required functionality (e.g., comment system, 
  featured posts, and categories).
- Defining roles and permissions for different user types.
- Designing a simple, scalable, and maintainable database 
  schema.
- Ensuring the blog will be responsive and optimized for both 
  mobile and desktop views.
  
### Data models
This blog application uses Django’s ORM (Object-Relational Mapping) to define the database structure through models. TThe database schema for this project consists of the following models: Category, Post, and Comment. Each model is designed to serve a specific purpose in managing the blog's content and user interactions. Below are detailed descriptions of each model.

**Category Model**
The Category model is the foundation for organizing blog posts. Categories help users navigate content by grouping similar posts under intuitive labels such as "World," "Technology," and "Travel." Categories are managed dynamically, allowing new categories to be added as needed.

**Post Model**
The Post model represents the main content of the blog. Each post includes details such as the title, category, and content, along with metadata like publication date and whether the post is featured.

## Fields:

- title (CharField): The title of the blog post, limited to 50 
   characters.
- slug (SlugField): A URL-friendly version of the title, 
  automatically generated and made unique.
- category (ForeignKey): Links the post to a specific Category. 
  Posts can belong to one category or none (nullable).
- thumbnail (ImageField): Stores the image associated with the 
  post, organized by upload date.
- excerpt (CharField): A short description of the post, limited 
  to 150 characters, used for previews.
  month (CharField): The month when the post was created, 
  defaults to "January."
- day (CharField): The day of the month when the post was 
   created, defaults to "01."
- contents (RichTextField): The main content of the post, 
   allowing for rich text formatting (via CKEditor).
- featured (BooleanField): Indicates whether the post is 
  highlighted as a featured article. Only one post can be 
  featured at a time.
- date_created (DateTimeField): The date and time the post was 
  created, defaulting to the current time.
  
##Comment Model
- The Comment model facilitates user interactions by allowing 
  readers to leave feedback on posts.

###Fields
1. post:

- Type: ForeignKey
- Description: Links the comment to a specific blog post.
- Relationship:
   - on_delete=models.CASCADE: Deleting a post removes its 
      associated comments.
   - related_name="comments": Enables reverse querying, e.g., 
     post.comments.all().
     
2. name:

- Type: CharField
- Description: The commenter’s name.
- Properties:
-  max_length=100: Limits the name length to 100 characters.

3. mail:

- Type: EmailField
- Description: Stores the commenter’s email address.

4.body:

- Type: TextField
- Description: The main content of the comment.

5.created_at:

 - Type: DateTimeField
 -  Default: auto_now_add=True
 -  Description: Automatically records the timestamp when the 
    comment is created.
    
**Methods**
__str__:
Returns a string in the format:
"Comment by {name} on {post.title}"



## API Endpoints

Below are the detailed API endpoints for each model in the Blog application:

### **Categories API Endpoints**

| **Endpoint**                         | **Method** | **Description**                                    |
|--------------------------------------|------------|----------------------------------------------------|
| `/api/categories/`                   | GET        | List all categories.                              |
| `/api/categories/`                   | POST       | Create a new category. Requires `name` (string).  |
| `/api/categories/{id}/`              | GET        | Retrieve a specific category by `id`.             |
| `/api/categories/{id}/`              | PUT        | Update an existing category by `id`. Requires `name` (string). |
| `/api/categories/{id}/`              | DELETE     | Delete a specific category by `id`.               |

### **Posts API Endpoints**

| **Endpoint**                         | **Method** | **Description**                                    |
|--------------------------------------|------------|----------------------------------------------------|
| `/api/posts/`                        | GET        | List all posts.                                   |
| `/api/posts/`                        | POST       | Create a new post. Requires `title`, `category` (ID), `excerpt`, `thumbnail`, `content`, etc. |
| `/api/posts/{id}/`                   | GET        | Retrieve a specific post by `id`.                 |
| `/api/posts/{id}/`                   | PUT        | Update a specific post by `id`. Requires `title`, `category`, `excerpt`, `thumbnail`, `content`, etc. |
| `/api/posts/{id}/`                   | DELETE     | Delete a specific post by `id`.                   |
| `/api/posts/featured/`               | GET        | Retrieve the featured post.                       |
| `/api/posts/featured/{id}/`          | PUT        | Set a post as featured. Requires `id` of the post. |
| `/api/posts/featured/{id}/`          | DELETE     | Unset a post from being featured.                 |

### **Comments API Endpoints**

| **Endpoint**                         | **Method** | **Description**                                    |
|--------------------------------------|------------|----------------------------------------------------|
| `/api/comments/`                     | GET        | List all comments for all posts.                  |
| `/api/comments/`                     | POST       | Create a new comment. Requires `post` (ID), `name`, `email`, `body`. |
| `/api/comments/{id}/`                | GET        | Retrieve a specific comment by `id`.              |
| `/api/comments/{id}/`                | PUT        | Update a specific comment by `id`. Requires `name`, `email`, `body`. |
| `/api/comments/{id}/`                | DELETE     | Delete a specific comment by `id`.                |


# Blog API Endpoints

## 1. Fetch Featured Blog
| Endpoint URL        | HTTP Method | CRUD Operation | View Type | POST Data Format | Example Output                                                                                 | Notes                                                          |
|---------------------|-------------|----------------|-----------|------------------|------------------------------------------------------------------------------------------------|----------------------------------------------------------------|
| `/api/blog/featured` | GET         | Read           | JSON      | N/A              | `{ "id": 1, "title": "Featured Blog Title", "excerpt": "This is the featured blog excerpt." }`  | Fetches a single blog post that is marked as featured.        |

## 2. Fetch All Blogs
| Endpoint URL | HTTP Method | CRUD Operation | View Type | POST Data Format | Example Output                                                                                                      | Notes                                                          |
|--------------|-------------|----------------|-----------|------------------|---------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------|
| `/api/blog/` | GET         | Read           | JSON      | N/A              | `[ { "id": 1, "title": "Blog Title", "excerpt": "This is an excerpt from a blog post." }, { "id": 2, "title": "Another Blog", "excerpt": "Here's another post." } ]` | Fetches all blogs. Returns an array of blog objects.           |

## 3. Create a New Blog Post
| Endpoint URL | HTTP Method | CRUD Operation | View Type | POST Data Format                                                        | Example Output                                                                                                      | Notes                                                          |
|--------------|-------------|----------------|-----------|-------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------|
| `/api/blog/` | POST        | Create         | JSON      | `{ "title": "New Blog", "category": "Tech", "excerpt": "This is a new blog post.", "content": "Detailed content goes here." }` | `{ "id": 3, "title": "New Blog", "category": "Tech", "excerpt": "This is a new blog post.", "content": "Detailed content goes here." }` | Creates a new blog post in the database. Returns the created blog. |

## 4. Update an Existing Blog Post
| Endpoint URL    | HTTP Method | CRUD Operation | View Type | POST Data Format                                                        | Example Output                                                                                                      | Notes                                                          |
|-----------------|-------------|----------------|-----------|-------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------|
| `/api/blog/:id` | PUT         | Update         | JSON      | `{ "title": "Updated Title", "excerpt": "Updated excerpt.", "content": "Updated blog content." }`                      | `{ "id": 1, "title": "Updated Title", "excerpt": "Updated excerpt.", "content": "Updated blog content." }`            | Updates a specific blog post identified by `:id`. Returns the updated blog. |

## 5. Delete a Blog Post
| Endpoint URL    | HTTP Method | CRUD Operation | View Type | POST Data Format | Example Output                                                                                                      | Notes                                                          |
|-----------------|-------------|----------------|-----------|------------------|---------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------|
| `/api/blog/:id` | DELETE      | Delete         | JSON      | N/A              | `{ "message": "Blog post deleted successfully" }`                                                                    | Deletes a specific blog post identified by `:id`.              |

Table generated using https://www.tablesgenerator.com/markdown_tables/load

<p align="center">
    Link to a larger version of this table with sample output data: 
</p>

<p align="center">
    <a href="endpoints.md" target="_rel">API endpoints table</a>
</p>

## Frameworks, libraries and dependencies

My_Blogs API is implemented in Python using [Django](https://www.djangoproject.com) and [Django Rest Framework](https://django-filter.readthedocs.io/en/stable/).

The following additional utilities, apps and modules were also used.


### dj-allauth
https://django-allauth.readthedocs.io/en/latest/

Used for user authentication. While not currently utilised, this package enables registration and authentication using a range of social media accounts. This may be implemented in a future update.

### dj-rest-auth
https://dj-rest-auth.readthedocs.io/en/latest/introduction.html

Provides REST API endpoints for login and logout. The user registration endpoints provided by dj-rest-auth are not utilised fOR My_Blogs frontend, as custom functionality was required and implemented by the My_Blogs API.

### djangorestframework
https://django-rest-framework-simplejwt.readthedocs.io/en/latest/

Provides JSON web token authentication.

### dj-database-url
https://pypi.org/project/dj-database-url/

Creates an environment variable to configure the connection to the database.

### psychopg2
https://pypi.org/project/psycopg2/

Database adapater to enable interaction between Python and the PostgreSQL database.

### python-dateutil
https://pypi.org/project/python-dateutil/

This module provides extensions to the standard Python datetime module. It is a pre-requisite for django-recurrence library.

### django-recurrence
https://django-recurrence.readthedocs.io/en/latest/

This utility enables functionality for working with recurring dates in Django. It provides a `ReccurenceField` field type for storing recurring datetimes in the database.



### django-cors-headers
https://pypi.org/project/django-cors-headers/

This Django app adds Cross-Origin-Resource Sharing (CORS) headers to responses, to enable the API to respond to requests from origins other than its own host.

## Testing

### Manual testing

A series of manual tests were carried out for each end point using the Django Rest Framework HTML interface running on the local server and using the deployed database. Please see the separate [testing.md](/testing.md) document for details.

All the features of the deployed API were tested as part of testing/acceptance criteria for each of the React frontend user stories. 



### Python validation

Code errors and style issues were detected using the Pylance linter in VSCode, and immediately fixed throughout development.
All files containing custom Python code were then validated using the [Code Institute Python Linter](https://pep8ci.herokuapp.com/):

- `admin.py`: no errors found
- `models.py`: no errors found
- `tests.py`: no errors found
- `serializers.py`: no errors found
- `urls.py`: no errors found
- `views.py`: no errors found
- `tribehub_drf/settings.py`: no errors found
- `tribes/admin.py`: no errors found
- `tribes/models.py`: no errors found
- `tribes/serializers.py`: no errors found
- `tribes/urls.py`: no errors found
- `tribes/views.py`: no errors found



#### Bugs found while testing the API in isolation
- During testing, it became apparent that a API was unable to connect with the URL. This was fixed by adding slash/.

### Unresolved bugs
    The issue was overcome by manually checking the status of the user within the `perform_create` method, but given more time it would be desirable to look into this further and revert to correct use of permission classes here if possible.

## Deployment
The TribeHub API is deployed to Heroku, using  Postgres database.
To duplicate deployment to Heroku, follow these steps:

- Fork or clone this repository in GitHub.
- You will need a Cloudinary account to host user profile images.
- Login to Cloudinary.
- Select the 'dashboard' option.
- Copy the value of the 'API Environment variable' from the part starting `cloudinary://` to the end. You may need to select the eye icon to view the full environment variable. Paste this value somewhere for safe keeping as you will need it shortly (but destroy after deployment).
- Log in to Heroku.
- Select 'Create new app' from the 'New' menu at the top right.
- Enter a name for the app and select the appropriate region.
- Select 'Create app'.
- Select 'Settings' from the menu at the top.
- Select the 'settings' tab.
- Locate the 'reveal config vars' link and select.
- Enter the following config var names and values:
    - `CLOUDINARY_URL`: *your cloudinary URL as obtained above*
    - `DATABASE_URL`: *your ElephantSQL postgres database URL as obtained above*
    - `SECRET_KEY`: *your secret key*
    - `ALLOWED_HOST`: *the url of your Heroku app (but without the `https://` prefix)*
- Select the 'Deploy' tab at the top.
- Select 'GitHub' from the deployment options and confirm you wish to deploy using GitHub. You may be asked to enter your GitHub password.
- Find the 'Connect to GitHub' section and use the search box to locate your repo.
- Select 'Connect' when found.
- Optionally choose the main branch under 'Automatic Deploys' and select 'Enable Automatic Deploys' if you wish your deployed API to be automatically redeployed every time you push changes to GitHub.
- Find the 'Manual Deploy' section, choose 'main' as the branch to deploy and select 'Deploy Branch'.
- Your API will shortly be deployed and you will be given a link to the deployed site when the process is complete.

## Credits
- A replacement for the deprecated `django.conf.urls.url()` was implemented as per this [StackOverflow article](https://stackoverflow.com/questions/70319606/importerror-cannot-import-name-url-from-django-conf-urls-after-upgrading-to)
- The approach to creating a string representation of a many to many field in the Django admin panel is adapted from https://stackoverflow.com/questions/18108521/many-to-many-in-list-display-django
- The technique to create a custom filter for date ranges using django-filters is adapted from this [StackOverflow article](https://stackoverflow.com/questions/37183943/django-how-to-filter-by-date-with-django-rest-framework)
- How to access URL arguments as kwargs in generic APIViews is from this [StackOverflow article](https://stackoverflow.com/questions/51042871/how-to-access-url-kwargs-in-generic-api-views-listcreateapiview-to-be-more-spec)
- How to filter on many-to-many fields is from this [StackOverflow article](https://stackoverflow.com/questions/4507893/django-filter-many-to-many-with-contains)
- The technique to use Python pattern matching as case statements is from this [StackOverflow article](https://stackoverflow.com/questions/11479816/what-is-the-python-equivalent-for-a-case-switch-statement)
- The technique to override the `save()` method of a model to programatically set the value of fields based on the value of other fields is adapted from this [StackOverflow article]:(https://stackoverflow.com/questions/22157437/model-field-based-on-other-fields)
- The approach to obtaining the current user context within a model serializer is from [Stackoverflow](https://stackoverflow.com/questions/30203652/how-to-get-request-user-in-django-rest-framework-serializer)
- The technique for using different serializers depending on the HTTP request type within the same generic class view is from [Stackoverflow](https://stackoverflow.com/questions/22616973/django-rest-framework-use-different-serializers-in-the-same-modelviewset)
- The fix for the Django Rest Framework bug that prevents user's cookies from being cleared on logout is from the Code Institute Django Rest Framework walkthrough project
- The technique for overriding the `to_representation` metehod of a serializer to make a change to the outgoing JSON data used in `profiles/serializers.py` is from [testdriven.io](https://testdriven.io/tips/ed79fa08-6834-4827-b00d-2609205129e0/)
- The technqiue to sort a list by a dictionary key used to sort events data by start date is from [this StackOverflow question](https://stackoverflow.com/questions/72899/how-do-i-sort-a-list-of-dictionaries-by-a-value-of-the-dictionary)

In addition, the following documentation was extensively referenced throughout development:
- [Django documentation](https://www.djangoproject.com)
- [Django Rest Framework documentation](https://www.django-rest-framework.org)

