
# devcamper_api

Backend API for the DevCamper application to manage bootcamps,reviews,users and authentication

## Indices

* [auth](#auth)

  * [Forgot Password](#1-forgot-password)
  * [Get Logged in user via Token](#2-get-logged-in-user-via-token)
  * [Login User](#3-login-user)
  * [Logout user](#4-logout-user)
  * [Register User](#5-register-user)
  * [Reset Password](#6-reset-password)
  * [Update password](#7-update-password)
  * [Update user details](#8-update-user-details)

* [bootcamps](#bootcamps)

  * [Create new bootcamp](#1-create-new-bootcamp)
  * [Delete bootcamp](#2-delete-bootcamp)
  * [Get all bootcamps](#3-get-all-bootcamps)
  * [Get all bootcamps by Distance](#4-get-all-bootcamps-by-distance)
  * [Get single bootcamp](#5-get-single-bootcamp)
  * [Update bootcamp](#6-update-bootcamp)
  * [Upload Photo](#7-upload-photo)

* [courses](#courses)

  * [Create Bootcamp Course](#1-create-bootcamp-course)
  * [Delete course](#2-delete-course)
  * [Get Courses For Bootcamp](#3-get-courses-for-bootcamp)
  * [Get all courses](#4-get-all-courses)
  * [Get single course](#5-get-single-course)
  * [Update course](#6-update-course)

* [reviews](#reviews)

  * [Get Reviews for Bootcamp](#1-get-reviews-for-bootcamp)
  * [Get all reviews](#2-get-all-reviews)

* [users](#users)

  * [Create User](#1-create-user)
  * [Delete user](#2-delete-user)
  * [Get all users(admin)](#3-get-all-users(admin))
  * [Get single user](#4-get-single-user)
  * [Update user](#5-update-user)


--------


## auth
Routes for user authentication including login and reset password etc.



### 1. Forgot Password


Generate password token and send email


***Endpoint:***

```bash
Method: POST
Type: RAW
URL: {{URL}}/api/v1/auth/forgotPassword
```


***Headers:***

| Key | Value | Description |
| --- | ------|-------------|
| Content-Type | application/json | JSON type |



***Body:***

```js        
{
    "email":"john@gmail.com"
}
```



### 2. Get Logged in user via Token



***Endpoint:***

```bash
Method: GET
Type: RAW
URL: {{URL}}/api/v1/auth/me
```


***Headers:***

| Key | Value | Description |
| --- | ------|-------------|
| Content-Type | application/json | JSON type |



***Body:***

```js        
{
    "email":"john@gmail.com",
    "password":"123456"
}
```



### 3. Login User



***Endpoint:***

```bash
Method: POST
Type: RAW
URL: {{URL}}/api/v1/auth/login
```


***Headers:***

| Key | Value | Description |
| --- | ------|-------------|
| Content-Type | application/json | JSON type |



***Body:***

```js        
{
    "email":"admin@gmail.com",
    "password":"123456"
}
```



### 4. Logout user


Also clear cookie


***Endpoint:***

```bash
Method: GET
Type: 
URL: {{URL}}/api/v1/auth/logout
```



### 5. Register User


Add user to database with encrypted password



***Endpoint:***

```bash
Method: POST
Type: RAW
URL: {{URL}}/api/v1/auth/login
```


***Headers:***

| Key | Value | Description |
| --- | ------|-------------|
| Content-Type | application/json | JSON type |



***Body:***

```js        
{
    "email":"john@gmail.com",
    "password":"123456"
}
```



### 6. Reset Password


Reset user password using Token


***Endpoint:***

```bash
Method: PUT
Type: RAW
URL: {{URL}}/api/v1/auth/resetpassword/845f8ea1f214f331344f4474a0d681f7c7598b3f
```



***Body:***

```js        
{
    "password":"123457"
}
```



### 7. Update password



***Endpoint:***

```bash
Method: PUT
Type: RAW
URL: {{URL}}/api/v1/auth/updatepassword
```


***Headers:***

| Key | Value | Description |
| --- | ------|-------------|
| Content-Type | application/json | JSON type |



***Body:***

```js        
{
    "currentPassword":"123457",
    "newPassword":"12345678"
}
```



### 8. Update user details



***Endpoint:***

```bash
Method: PUT
Type: RAW
URL: {{URL}}/api/v1/auth/updatedetails
```


***Headers:***

| Key | Value | Description |
| --- | ------|-------------|
| Content-Type | application/json | JSON type |



***Body:***

```js        
{
    "email":"john@email.com",
    "name":"john"
}
```



## bootcamps
Bootcamps CRUD functionality



### 1. Create new bootcamp


Add new bootcamp to datbase.Must be authenticated and must be publisher or admin


***Endpoint:***

```bash
Method: POST
Type: RAW
URL: {{URL}}/api/v1/bootcamps
```


***Headers:***

| Key | Value | Description |
| --- | ------|-------------|
| Content-Type | application/json | JSON type |



***Body:***

```js        
{
    "name": "Devworks Bootcamp asd",
    "description": "Devworks is a full stack JavaScript Bootcamp located in the heart of Boston that focuses on the technologies you need to get a high paying job as a web developer",
    "website": "https://devworks.com",
    "phone": "(111) 111-1111",
    "email": "enroll@devworks.com",
    "address": "233 Bay State Rd Boston MA 02215",
    "careers": ["Web Development", "UI/UX", "Business"],
    "housing": true,
    "jobAssistance": true,
    "jobGuarantee": false,
    "acceptGi": true
}
```



### 2. Delete bootcamp


Delete bootcamp from database.


***Endpoint:***

```bash
Method: DELETE
Type: 
URL: {{URL}}/api/v1/bootcamps/5f12c7255f98c225c0a6919d
```



### 3. Get all bootcamps


Fetch all bootcamps from database.Includes pagination,
fitering, etc


***Endpoint:***

```bash
Method: GET
Type: 
URL: {{URL}}/api/v1/bootcamps
```



### 4. Get all bootcamps by Distance


Get bootcamps within a specific zipcode


***Endpoint:***

```bash
Method: GET
Type: 
URL: {{URL}}/api/v1/bootcamps/radius/02118/50
```



### 5. Get single bootcamp


Get single bootcamp by ID


***Endpoint:***

```bash
Method: GET
Type: 
URL: {{URL}}/api/v1/bootcamps/5ee07f4ff9702d0630bcf4cb
```



### 6. Update bootcamp


Update single bootcamp from the database.


***Endpoint:***

```bash
Method: PUT
Type: RAW
URL: {{URL}}/api/v1/bootcamps/5ee07f4ff9702d0630bcf4cb
```



***Body:***

```js        
{
    "housing":"false"
}
```



### 7. Upload Photo


Route to upload a bootcamp


***Endpoint:***

```bash
Method: PUT
Type: FORMDATA
URL: {{URL}}/api/v1/bootcamps/5d725a1b7b292f5f8ceff788/photo
```



***Body:***

| Key | Value | Description |
| --- | ------|-------------|
| file |  |  |



## courses
CRUD functionality for courses



### 1. Create Bootcamp Course


Create a course for a specific bootcamp


***Endpoint:***

```bash
Method: POST
Type: RAW
URL: {{URL}}/api/v1/bootcamps/5d725a037b292f5f8ceff787/courses
```



***Body:***

```js        
{
     "title": "Front End Web Development",
    "description": "This course will provide you with all of the essentials to become a successful frontend web developer. You will learn to master HTML, CSS and front end JavaScript, along with tools like Git, VSCode and front end frameworks like Vue",
    "weeks": 8,
    "tuition": 8000,
    "minimumSkill": "beginner",
    "scholarhipsAvailable": true
}
```



### 2. Delete course


Remove course from database


***Endpoint:***

```bash
Method: DELETE
Type: RAW
URL: {{URL}}/api/v1/courses/5d725a4a7b292f5f8ceff789
```



***Body:***

```js        
{
     "title": "Frontier Development",
    "description": "This course will provide you with all of the essentials to become a successful frontend web developer. You will learn to master HTML, CSS and front end JavaScript, along with tools like Git, VSCode and front end frameworks like Vue",
    "weeks": 8,
    "tuition": 8000,
    "minimumSkill": "beginner",
    "scholarhipsAvailable": true
}
```



### 3. Get Courses For Bootcamp


Get a specific courses for a bootcamp


***Endpoint:***

```bash
Method: GET
Type: 
URL: {{URL}}/api/v1/bootcamps/5d725a1b7b292f5f8ceff788/courses
```



### 4. Get all courses


Get all courses in database


***Endpoint:***

```bash
Method: GET
Type: 
URL: {{URL}}/api/v1/courses
```



### 5. Get single course


Get a single course by its id


***Endpoint:***

```bash
Method: GET
Type: 
URL: {{URL}}/api/v1/courses/5d725a4a7b292f5f8ceff784
```



### 6. Update course


Update course in database


***Endpoint:***

```bash
Method: PUT
Type: RAW
URL: {{URL}}/api/v1/courses/5d725a4a7b292f5f8ceff789
```



***Body:***

```js        
{
     "title": "Frontier Development",
    "description": "This course will provide you with all of the essentials to become a successful frontend web developer. You will learn to master HTML, CSS and front end JavaScript, along with tools like Git, VSCode and front end frameworks like Vue",
    "weeks": 8,
    "tuition": 8000,
    "minimumSkill": "beginner",
    "scholarhipsAvailable": true
}
```



## reviews
Manage course reviews



### 1. Get Reviews for Bootcamp



***Endpoint:***

```bash
Method: GET
Type: 
URL: {{URL}}/api/v1/bootcamps/5d725a1b7b292f5f8ceff788/reviews
```



### 2. Get all reviews


Get all reviews from database and populate with bootcamp name and description


***Endpoint:***

```bash
Method: GET
Type: 
URL: {{URL}}/api/v1/reviews
```



## users
CRUD functionality for users only available to admins



### 1. Create User



***Endpoint:***

```bash
Method: POST
Type: RAW
URL: {{URL}}/api/v1/users/
```


***Headers:***

| Key | Value | Description |
| --- | ------|-------------|
| Content-Type | application/json | JSON type |



***Body:***

```js        
{
    "name":"Nate Smith1",
    "email":"nat1e@gmail.com",
    "password":"123456"
}
```



### 2. Delete user



***Endpoint:***

```bash
Method: DELETE
Type: 
URL: {{URL}}/api/v1/users/5f13db4840d69838cc9fe871
```


***Headers:***

| Key | Value | Description |
| --- | ------|-------------|
| Content-Type | application/json | JSON type |



### 3. Get all users(admin)



***Endpoint:***

```bash
Method: GET
Type: 
URL: {{URL}}/api/v1/users
```



***Query params:***

| Key | Value | Description |
| --- | ------|-------------|
| select | name,email |  |



### 4. Get single user



***Endpoint:***

```bash
Method: GET
Type: 
URL: {{URL}}/api/v1/users/5c8a1d5b0190b214360dc040
```



### 5. Update user



***Endpoint:***

```bash
Method: PUT
Type: RAW
URL: {{URL}}/api/v1/users/5c8a1d5b0190b214360dc040
```


***Headers:***

| Key | Value | Description |
| --- | ------|-------------|
| Content-Type | application/json | JSON type |



***Body:***

```js        
{
    "name":"Nate Smith",
    "email":"nate@gmail.com"
}
```



---
[Back to top](#devcamper_api)
> Made with &#9829; by [thedevsaddam](https://github.com/thedevsaddam) | Generated at: 2020-07-19 13:00:17 by [docgen](https://github.com/thedevsaddam/docgen)
