import express from 'express';
import routes from './routes/routes';

const app = express();

app.use(express.json());

// Montar las rutas
app.use('/api', routes);

// Ruta de bienvenida
app.get('/', (req, res) => {
  res.send('¡Bienvenido a la aplicación!');
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`);
});

