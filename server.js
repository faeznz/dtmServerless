const express = require('express');
const app = express();

// Data JSON sederhana
const data = [
  { id: 1, name: 'Produk A' },
  { id: 2, name: 'Produk B' },
  { id: 3, name: 'Produk C' }
];

// Endpoint untuk mendapatkan data JSON
app.get('/api/data', (req, res) => {
  res.json(data);
});

// Port yang digunakan untuk server
const port = 3000;

// Menjalankan server
app.listen(port, () => {
  console.log(`Server berjalan di http://localhost:${port}`);
});

module.exports = app;