const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

// Ruta de login
app.post('/login', (req, res) => {
    const { usuario, password } = req.body;
    
    // Validación sencilla (simulación)
    if (usuario === 'admin' && password === '1234') {
        res.json({ usuario: { nombre: 'Admin', rol: 'Promotor' } });
    } else {
        res.status(401).send('Credenciales incorrectas');
    }
});

// Ruta del dashboard (una vez logueado)
app.get('/dashboard', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/dashboard.html'));
});

app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
