import express from "express";
import { routes as carRoutes } from './cars/routes.js';
import { routes as authRoutes } from './auth/routes.js';
import session from "express-session";
import { create as createHandlebars } from "express-handlebars";
import path from 'path';
import { fileURLToPath } from 'url';
import mongoose from "mongoose";
import dotenv from "dotenv";

const app = express();
const hbs = createHandlebars();

dotenv.config();
await mongoose.connect(`mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0.kylri.mongodb.net/`)

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');
app.set('views', './app/views');

app.use(express.static('./public'));

app.use(express.urlencoded({ extended: false }));
app.use(session({
    secret: 'going out of place',
    resave: false,
    saveUninitialized: false,
}));

app.use((req, res, next) => {
    if (req.session.user && req.session.user.isAuthenticated) {
        res.locals.user = req.session.user;
    }
    next();
});

app.use('/cars', carRoutes);
app.use('/', authRoutes);

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/assets/html/index.html'));
});

app.get('/sum/:a-:b', (req, res) => {
    res.send(`${parseInt(req.params.a) + parseInt(req.params.b)}`);
});

export function start() {
    app.listen(8080, () => {
        console.log("Listening at http://localhost:8080");
    });
}