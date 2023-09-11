# Task Management API Documentation

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
  ```json
    {
     "id": "dbccb08f-de6c-4e55-acdb-511f0bb01d5d",
    "name": "Christopher Pam",
    "createdAt": "2023-09-11T22:19:53.295Z",
    "updatedAt": "2023-09-11T22:19:53.295Z"
    }  
  ```  
- **Failed Response Body:**
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
  ```json
    {
     "id": "dbccb08f-de6c-4e55-acdb-511f0bb01d5d",
    "name": "Christopher Pam",
    "createdAt": "2023-09-11T22:19:53.295Z",
    "updatedAt": "2023-09-11T22:19:53.295Z"
    }  
  ```  
- **Failed Response Body:**
  ```json
    {
    "statusCode": 404,
    "message": "Person not found",
    "error": "Not Found"
    }  
  ```  


