const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

// Middleware para manejar solicitudes POST con JSON
app.use(express.json());

// Servir archivos estáticos (HTML, CSS, JS)
app.use(express.static(path.join(__dirname, '..', 'public')));

// Obtener productos (esto es solo para simular la API, en realidad solo los manejarás en el cliente)
app.get('/api/productos', (req, res) => {
    try {
        res.json([]);
    } catch (error) {
        console.error('Error al obtener productos:', error);
        res.status(500).json({ error: 'Error interno del servidor' });
    }
});

// Agregar un producto (simulado, solo lo agregarás en el cliente)
app.post('/api/productos', (req, res) => {
    try {
        const { nombre, precio, imagen } = req.body;
        if (!nombre || !precio || !imagen) {
            return res.status(400).json({ error: 'Todos los campos son obligatorios' });
        }
        const nuevoProducto = { nombre, precio, imagen };
        res.status(201).json(nuevoProducto);
    } catch (error) {
        console.error('Error al agregar producto:', error);
        res.status(500).json({ error: 'Error interno del servidor' });
    }
});

// Eliminar un producto (simulado, solo lo manejarás en el cliente)
app.delete('/api/productos/:id', (req, res) => {
    try {
        const { id } = req.params;
        if (!id) {
            return res.status(400).json({ error: 'ID de producto es requerido' });
        }
        res.status(204).send(); // Responde con "sin contenido" para simular eliminación
    } catch (error) {
        console.error('Error al eliminar producto:', error);
        res.status(500).json({ error: 'Error interno del servidor' });
    }
});

// Iniciar el servidor
app.listen(port, () => {
    console.log(`Servidor API en http://localhost:${port}`);
});
