import express from "express";
import { routes as carRoutes} from './cars/routes.js'
import { routes as authRoutes} from './auth/routes.js'
import session from "express-session";
import { create as createHandlebars } from "express-handlebars";

const app = express();
const hbs = createHandlebars();

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');
app.set('views', './app/views');

app.use(express.static('./public'))

app.use(express.urlencoded({extended: false}))
app.use(session({
    secret: 'going out of place',
    resave: false,
    saveUninitialized: false,
}))

app.use('/cars', carRoutes);
app.use('/', authRoutes);

app.get('/', (req, res) => {
    res.send('Home Page')
})

app.get('/sum/:a-:b', (req,res) => {
    res.send(`${parseInt(req.params.a) + parseInt(req.params.b)}`)
})

export function start() {
    app.listen(8080, () => {
        console.log("Listening at http://localhost")
    })
}