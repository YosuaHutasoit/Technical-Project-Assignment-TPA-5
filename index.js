const express = require('express');
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');

// get config vars
dotenv.config();

const app = express();
app.use(bodyParser.json());
const PORT = 3000;

const usersStatic = [
  {
    id: 1,
    username: "josh",
    hobby: "Basket",
    type_data : "Premium"
  },
  {
    id: 2,
    username: "sarah",
    hobby: "Sleep",
    type_data : "Premium"
  },
  {
    id: 3,
    username: "drian",
    hobby: "Renang",
    type_data : "Premium"
  },
  {
    id: 4,
    username: "ahmad",
    hobby: "Cooking",
    type_data : "Premium"
  },
  {
    id: 5,
    username: "dapid",
    hobby: "Futsal",
    type_data : "Premium"
  }
];

const dataUsers = [
  {
      "user_id": 11,
      "email": "josh@gmail.com",
      "password": "12345678"
  },
  {
      "user_id": 12,
      "email": "sarah@gmail.com",
      "password": "abcdefg"
  },
  {
      "user_id": 13,
      "email": "drian@gmail.com",
      "password": "131fadas"
  }
]


// Simpan data user pada array (sementara)
let users = [];

// Endpoint untuk membuat user baru
app.post('/register', (req, res) => {
  const { username, password } = req.body;

  // Periksa apakah username sudah digunakan
  const existingUser = users.find(user => user.username === username);
  if (existingUser) {
    return res.status(400).json({ error: 'Username already exists' });
  }

  // Buat user baru
  const newUser = { username, password };
  users.push(newUser);

  res.status(201).json({ message: 'User created successfully' });
});

// Endpoint untuk login
app.post("/login", (req, res) => {
  let email = req.body.email
  let password = req.body.password

  let response = {}
  let foundUser = {}

  for(let i=0;i < dataUsers.length; i++) {
      if(dataUsers[i].email == email) {
          foundUser = dataUsers[i]
      }
  }

  if(Object.keys(foundUser).length == 0) {
      response = {
          status: "ERROR",
          message: "User not Found"
      }
      res.status(401).json(response)
      return
  }

  if(foundUser.password != password) {
      response = {
          status: "ERROR",
          message: "Combination Email and Password not Match"
      }
      res.status(401).json(response)
      return
  }

  let jwt_payload = {
      user_id: foundUser.user_id
  }

  let access_token = jwt.sign(jwt_payload, process.env.TOKEN_SECRET, { expiresIn: '1800s' });
  response = {
      status: "SUCCESS",
      access_token: access_token
  }
  res.json(response)
})


// Endpoint untuk mendapatkan semua user
app.get("/users", (req, res) => {
  res.json(usersStatic);
});

// Endpoint untuk mendapatkan user tertentu berdasarkan ID
app.get("/users/:id", (req, res) => {
  const userId = parseInt(req.params.id);
  const user = usersStatic.find(user => user.id === userId);

  if (user) {
    res.json(user);
  } else {
    res.status(404).json({ message: "User not found" });
  }
});

// Endpoint untuk membuat user baru
app.post("/users", (req, res) => {
  const newUser = {
    id: usersStatic.length + 1,
    username: req.body.username,
    hobby: req.body.hobby,
    type_data: req.body.type_data
  };

  usersStatic.push(newUser);
  res.status(201).json(newUser);
});

// Endpoint untuk memperbarui user yang ada
app.put("/users/:id", (req, res) => {
  const userId = parseInt(req.params.id);
  const userIndex = usersStatic.findIndex(user => user.id === userId);

  if (userIndex !== -1) {
    usersStatic[userIndex] = {
      id: userId,
      username: req.body.username,
      hobby: req.body.hobby,
      type_data: req.body.type_data
    };

    res.json(usersStatic[userIndex]);
  } else {
    res.status(404).json({ message: "User not found" });
  }
});

// Endpoint untuk menghapus user
app.delete("/users/:id", (req, res) => {
  const userId = parseInt(req.params.id);
  const userIndex = usersStatic.findIndex(user => user.id === userId);

  if (userIndex !== -1) {
    usersStatic.splice(userIndex, 1);
    res.sendStatus(204);
  } else {
    res.status(404).json({ message: "User not found" });
  }
});



// Menambahkan route untuk tampilan selamat datang di web
app.get('/', (req, res) => {
  res.send('<h1>Halo, Selamat Datang!</h1>');
});

app.listen(PORT, () => {
  console.log(`Server berjalan di http://localhost:${PORT}`);
});
