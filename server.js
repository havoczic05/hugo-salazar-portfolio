import express from 'express';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const app = express();
const __dirname = dirname(fileURLToPath(import.meta.url));
const port = process.env.PORT || 5000;

// Sirve los archivos estáticos de la carpeta 'dist'
app.use(express.static(join(__dirname, 'dist')));

// Maneja las rutas que no coinciden con ningún archivo estático
app.get('*', (req, res) => {
  res.sendFile(join(__dirname, 'dist', 'index.html'));
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
