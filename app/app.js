import express from "express";
import { routes as carRoutes} from './cars/routes.js'

const app = express();

app.use(express.static('./public'))

app.use('/cars', carRoutes);

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