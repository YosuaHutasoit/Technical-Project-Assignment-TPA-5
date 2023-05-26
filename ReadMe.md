
REGISTER

{
    "message": "User created successfully"
}


LOGIN

{
    "status": "SUCCESS",
    "access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoxMSwiaWF0IjoxNjg1MTA5MTAzLCJleHAiOjE2ODUxMTA5MDN9.rBVWv6fCJhrRX1ypwrIJGt65htP72OBvy23ku7KZv5Y"
}



CREATE TODO
Method : POST
Endpoint : /todolist
Authorization: Bearer token

{
    "name" : "Sarah",
    "password" : "pasword456",
    "email" : "sarah@example.com",
    "jenis_id" : 10
}



CREATE Users

{
    "status": "SUCCESS",
    "message": "Create Users",
    "data": {
        "id": 11,
        "name": "Andi",
        "password": "pasword456",
        "email": "Andi@example.com",
        "updatedAt": "2023-05-26T13:50:25.469Z",
        "createdAt": "2023-05-26T13:50:25.469Z"
    }
}


GET LIST

{
    "status": "SUCCESS",
    "message": "Get User",
    "meta": {
        "total": 10
    },
    "data": [
        {
            "id": 1,
            "name": "Yosua",
            "password": "password123",
            "email": "yosua112@example.com",
            "createdAt": "2023-05-26T08:46:11.000Z",
            "updatedAt": "2023-05-26T08:46:11.000Z"
        },
        {
            "id": 2,
            "name": "Julian",
            "password": "password234",
            "email": "julaun234h@example.com",
            "createdAt": "2023-05-26T08:46:11.000Z",
            "updatedAt": "2023-05-26T08:46:11.000Z"
        },
        {
            "id": 3,
            "name": "Sarah",
            "password": "pasword456",
            "email": "sarah@example.com",
            "createdAt": "2023-05-26T11:56:03.000Z",
            "updatedAt": "2023-05-26T11:56:03.000Z"
        },
        {
            "id": 4,
            "name": "Sarah",
            "password": "pasword456",
            "email": "sarah@example.com",
            "createdAt": "2023-05-26T12:55:24.000Z",
            "updatedAt": "2023-05-26T12:55:24.000Z"
        },
        {
            "id": 5,
            "name": "Sarah",
            "password": "pasword456",
            "email": "sarah@example.com",
            "createdAt": "2023-05-26T12:58:35.000Z",
            "updatedAt": "2023-05-26T12:58:35.000Z"
        },
        {
            "id": 6,
            "name": "Sarah",
            "password": "pasword456",
            "email": "sarah@example.com",
            "createdAt": "2023-05-26T13:10:41.000Z",
            "updatedAt": "2023-05-26T13:10:41.000Z"
        },
        {
            "id": 7,
            "name": "Sarah",
            "password": "pasword456",
            "email": "sarah@example.com",
            "createdAt": "2023-05-26T13:12:21.000Z",
            "updatedAt": "2023-05-26T13:12:21.000Z"
        },
        {
            "id": 8,
            "name": null,
            "password": null,
            "email": null,
            "createdAt": "2023-05-26T13:17:12.000Z",
            "updatedAt": "2023-05-26T13:17:12.000Z"
        },
        {
            "id": 9,
            "name": "Sarah",
            "password": "pasword456",
            "email": "sarah@example.com",
            "createdAt": "2023-05-26T13:20:59.000Z",
            "updatedAt": "2023-05-26T13:20:59.000Z"
        },
        {
            "id": 10,
            "name": "Sarah",
            "password": "pasword456",
            "email": "sarah@example.com",
            "createdAt": "2023-05-26T13:38:33.000Z",
            "updatedAt": "2023-05-26T13:38:33.000Z"
        }
    ]
}


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