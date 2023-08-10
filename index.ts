import express from 'express'; 
import { routerUsuarios } from './src/routes/routesUsuarios';

const app: express.Application = express(); 

const port = 3001;

app.use(express.json());
app.use(routerUsuarios);


app.get('/', (_req , _res) => _res.send('Bienvenido'));

/* Users */

app.use("/register", routerUsuarios);

app.use("/login", routerUsuarios);

app.use("/current", routerUsuarios);

/* Otros */

app.listen(port, () => console.log(`Escuchando en el puerto ${port}!`));
