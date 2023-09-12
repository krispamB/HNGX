# HNGx stage II
## Overview
This is a simple API for managing 'person' resources. It provides basic CRUD (Create, Read, Update, Delete) operations for managing information about individuals.

## Features

- Create a new person record with name.
- Retrieve a list of all persons or details of a specific person gy ID.
- Update the details of an existing person.
- Delete a person record from the database.

## Getting Started

### Prerequisites
- This API was created using nestjs, therefore you must have [nestjs](https://docs.nestjs.com/) installed on your machine.
- get a postgres database running.

## Installation
1. Clone this repository:
```bash
 git clone https://github.com/krispamB/HNGX.git 
```
2. Change project directory:
```bash
  cd backend-stage-two
```
3. Install dependencies:
```bash
  npm install or yarn install
```
4. Start the server:
  ```bash
    yarn start:dev
  ```

## Usage

### Endpoints

- **GET /:** To check if API works.
- **POST /api:** Create a new person record.
- **GET /api/:id:** Retrieve details of a specific person by their id.
- **PUT /api/:id:** Update the details of a specific person.
- **DELETE /api/:id:** Delete a person record.

## Testing
To test the API:
- Go to the published postman docs at [DOCS](https://documenter.getpostman.com/view/20812049/2s9YC2yt3d)
- Click on **Run in Postman**(You can use it on the web)
- Select a workspace.
- Add **LIVE_URL** to a new environment and set the initial and current value to: 
```
https://talented-pear-panda.cyclic.app/api
```
and save.
- Click on the person file and find and click on **Run Folder**
- Some test will be ran, Keep an eye out for failed test.
PS, there will be none. 

## Documentation
To all swagger lovers, documentation available at [Swagger docs](https://talented-pear-panda.cyclic.app/docs). Go crazy.


## UML DIAGRAM
You can find the UML diagram at [UML](https://lucid.app/lucidchart/6390f608-b069-47c1-894e-f075f8dc6e7e/edit?view_items=9b0tSi1T4MFU&invitationId=inv_c8b0f4b7-46d8-4fc6-9a03-6554718976ee)