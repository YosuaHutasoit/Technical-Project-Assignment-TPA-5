
REGISTER

{
    "message": "User created successfully"
}
image.png


LOGIN

{
    "status": "SUCCESS",
    "access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoxMSwiaWF0IjoxNjg1MTA5MTAzLCJleHAiOjE2ODUxMTA5MDN9.rBVWv6fCJhrRX1ypwrIJGt65htP72OBvy23ku7KZv5Y"
}
image.png


CREATE TODO
Method : POST
Endpoint : /todolist
Authorization: Bearer token

{
    "status": "SUCCESS",
    "message": "Create Users",
    "data": {
        "id": 1,
        "name": "Ananda",
        "password": "pasword456",
        "email": "Ananda123@example.com",
        "updatedAt": "2023-05-26T16:44:15.262Z",
        "createdAt": "2023-05-26T16:44:15.262Z"
    }
}

image.png


GET LIST

{
    "status": "SUCCESS",
    "message": "Get User",
    "meta": {
        "total": 3
    },
    "data": [
        {
            "id": 1,
            "name": "Ananda",
            "password": "pasword456",
            "email": "Ananda123@example.com",
            "createdAt": "2023-05-26T16:44:15.000Z",
            "updatedAt": "2023-05-26T16:44:15.000Z"
        },
        {
            "id": 2,
            "name": "Julian",
            "password": "password234",
            "email": "julaun234h@example.com",
            "createdAt": "2023-05-26T16:45:47.000Z",
            "updatedAt": "2023-05-26T16:45:47.000Z"
        },
        {
            "id": 3,
            "name": "Yosua",
            "password": "password123",
            "email": "yosua112@example.com",
            "createdAt": "2023-05-26T16:46:06.000Z",
            "updatedAt": "2023-05-26T16:46:06.000Z"
        }
    ]
}
 
image.png


UPDATE TODO

{
    "status": "SUCCESS",
    "message": "Update Todo",
    "data": {
        "id": 1,
        "name": "Sarah Angelina",
        "password": "pasword45667",
        "email": "sara321h@example.com",
        "createdAt": "2023-05-26T08:46:11.000Z",
        "updatedAt": "2023-05-26T14:09:04.284Z"
    }
}

DELETE TODO

{
    "status": "SUCCESS",
    "message": "Delete Todo",
    "data": null
}

DELETE ALL TODO

{
    "status": "SUCCESS",
    "message": "Delete All Todos",
    "data": null
}