const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());
const PORT = 3000;

const usersStatic = [
  {
    id: 1,
    username: "Josh",
    hobby: "Eat",
    type_data: "premium"
  },
  {
    id: 2,
    username: "Sarah",
    hobby: "Sleep",
    type_data: "basic"
  },
  {
    id: 3,
    username: "drian",
    hobby: "Reading",
    type_data: "premium"
  },
  {
    id: 4,
    username: "ahmad",
    hobby: "Cooking",
    type_data: "basic"
  },
  {
    id: 5,
    username: "dapid",
    hobby: "Shopping",
    type_data: "premium"
  }
];

const dataUsers = [
  {
      "user_id": 11,
      "email": "josh@gmail.com",
      "password": "12345678",
      "role": "admin",
  },
  {
      "user_id": 12,
      "email": "sarah@gmail.com",
      "password": "abcdefg",
      "role": "premium",
  },
  {
      "user_id": 13,
      "email": "drian@gmail.com",
      "password": "abcdefg",
      "role": "basic",
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
app.post('/login', (req, res) => {
  const { email, password } = req.body;

  // Periksa apakah email dan password cocok dengan data pengguna yang ada
  const user = dataUsers.find(u => u.email === email && u.password === password);

  if (user) {
    res.json({ message: 'Login successful', user });
  } else {
    res.status(401).json({ error: 'Invalid users' });
  }
});


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
