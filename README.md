# Django Calorie Tracker Web App API Endpoints

## Index

- **URL:** /
- **Method:** GET
- **Description:** Renders the default route, listing all food items.

## Register

- **URL:** /register
- **Method:** 
    - GET: Displays the registration form.
    - POST: Registers a new user.
- **Parameters:** 
    - username: User's desired username.
    - email: User's email address.
    - password: User's desired password.
    - confirmation: Confirmation of the password.
- **Response:** 
    - Redirects to the index page upon successful registration.

## Login

- **URL:** /login
- **Method:** 
    - GET: Displays the login form.
    - POST: Authenticates user credentials.
- **Parameters:** 
    - username: User's username.
    - password: User's password.
- **Response:** 
    - Redirects to the index page upon successful login.

## Logout

- **URL:** /logout
- **Method:** GET
- **Description:** Logs out the currently logged-in user.

## Food List

- **URL:** /food
- **Method:** GET
- **Description:** Renders a page displaying all food items, paginated.

## Food Details

- **URL:** /food/<food_id>
- **Method:** GET
- **Description:** Renders a page displaying details of a selected food item.

## Add Food

- **URL:** /food/add
- **Method:** 
    - GET: Displays the form to add a new food item.
    - POST: Adds a new food item.
- **Response:** 
    - Redirects to the food list page upon successful addition.

## Food Log

- **URL:** /food/log
- **Method:** 
    - GET: Displays the food log for the logged-in user.
    - POST: Adds a food item to the user's food log.
- **Response:** 
    - Renders the food log page.

## Delete Food Log

- **URL:** /food/log/delete/<food_id>
- **Method:** 
    - GET: Displays a confirmation page to delete a food item from the user's food log.
    - POST: Deletes the selected food item from the food log.
- **Response:** 
    - Redirects to the food log page upon successful deletion.

## Weight Log

- **URL:** /weight/log
- **Method:** 
    - GET: Displays the weight log for the logged-in user.
    - POST: Records the user's weight entry.
- **Response:** 
    - Renders the weight log page.

## Delete Weight Log

- **URL:** /weight/log/delete/<weight_id>
- **Method:** 
    - GET: Displays a confirmation page to delete a weight entry from the user's weight log.
    - POST: Deletes the selected weight entry from the weight log.
- **Response:** 
    - Redirects to the weight log page upon successful deletion.

## Categories

- **URL:** /categories
- **Method:** GET
- **Description:** Renders a list of all food categories.

## Category Details

- **URL:** /categories/<category_name>
- **Method:** GET
- **Description:** Displays all foods in a particular category, paginated.

