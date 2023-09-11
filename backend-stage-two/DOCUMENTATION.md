# Person API Documentation

## Introduction

This API allows you to perform CRUD (Create, Read, Update, Delete) operations for a person.

## Base URL

The base URL for this API:
```url
  https://talented-pear-panda.cyclic.app/api.
```


## Endpoints

### 1. Create a Task
- **Endpoint:** `/`
- **HTTP Method:** GET
- **Successful Response Body:**
  - 200 OK
  ```
    API works!!!
  ```


### 2. Create a Person

- **Endpoint:** `/`
- **HTTP Method:** POST
- **Request Body:**
  ```json
    {
      "name": "Christopher Pam"
    }  
  ```
- **Successful Response Body:**
  - 201 CREATED
  ```json
    {
     "id": "dbccb08f-de6c-4e55-acdb-511f0bb01d5d",
    "name": "Christopher Pam",
    "createdAt": "2023-09-11T22:19:53.295Z",
    "updatedAt": "2023-09-11T22:19:53.295Z"
    }  
  ```  
- **Failed Response Body:**
  - 403 FORBIDDEN
  ```json
    {
    "statusCode": 403,
    "message": "Person already created",
    "error": "Forbidden"
    }  
  ```  

### 3. Get a person
- **Endpoint:** `/:id`
- **HTTP Method:** GET
- **Successful Response Body:**
  - 200 OK
  ```json
    {
     "id": "dbccb08f-de6c-4e55-acdb-511f0bb01d5d",
    "name": "Christopher Pam",
    "createdAt": "2023-09-11T22:19:53.295Z",
    "updatedAt": "2023-09-11T22:19:53.295Z"
    }  
  ```  
- **Failed Response Body:**
  - 404 NOT FOUND
  ```json
    {
    "statusCode": 404,
    "message": "Person not found",
    "error": "Not Found"
    }  
  ```  

### 4. Update a person
- **Endpoint:** `/:id`
- **HTTP Method:** PATCH
- **Request Body:**
  ```json
    {
      "name": "Christopher Pam Yeipyeng"
    }  
  ```
- **Successful Response Body:**
  - 200 OK
  ```json
    {
     "id": "dbccb08f-de6c-4e55-acdb-511f0bb01d5d",
    "name": "Christopher Pam Yeipyeng",
    "createdAt": "2023-09-11T22:19:53.295Z",
    "updatedAt": "2023-09-11T22:19:53.295Z"
    }  
  ```  
### 5. Delete a person
- **Endpoint:** `/:id`
- **HTTP Method:** DELETE
- **Successful Response Body:**
  - 200 OK
  ```json
    {
    "success": true,
    "message": "Person deleted successfully"
    }  
  ```    


