## CRUD API Using Cloud Functions (GCP)

### ARCHITECTURE

This codebase tries to utilize the `Clean Code Architecture`

### Database

I am using MongoDB Atlas as Database Service

### Authentication

I make use of JsonWebTokens for authentication

The `base url` for the `CRUD` methods is `https://us-central1-beginner-cloud-functions.cloudfunctions.net/userApi`
\

Requests can be made through `Postman`

## Create User

The required field values are

1. name
2. email
3. password

## Get User By Id

The required parameter is the `id` of the User

## Update User

To update a user, the required parameter is the `id` of the user.
\
A `x-auth-token` header with the token value must also be present to be able to update a user

## Delete User

To delete a user, the required parameter is the `id` of the user.
\
A `x-auth-token` header with the token value must also be present to be able to update a user

### Authentication

The `base url` for the `Authentication` is `https://us-central1-beginner-cloud-functions.cloudfunctions.net/authApi`

In order to login, the required field values are

1. email
2. password

To get the details of a logged in user, a `x-auth-token` header with the token value must be provided.
