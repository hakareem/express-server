import { getAll, getById, getByMake, addCar, saveCar, removeCar } from "./mode.js";
import { view } from "./view.js";

export async function createCar(req, res) { 
    res.render('/cars/form')
}

export const editCar = async (req, res) => {
    const id = parseInt(req.params.id, 10);

    if (!id) {
        res.send(404);
        return;
    }

    const car = await getById(id);

    if (!car) {
        res.send(404);
        return;
    }

    res.send(
        view('form', car)
    )
}

export async function listCars(req, res) {
    const cars = await getAll()
    res.render('cars/list', {cars, title: 'All Cars'})
}

export async function carPage(req, res) {
    const id = parseInt(req.params.id, 10);
    
    if (id) {
        const car = await getById(id)

        if (!car) {
            res.send(404);
        } else {
            res.render('cars/show', {car, title: `${car.make} ${car.model}`});
        }
    } else {
        const found = await getByMake(req.params.id)
        if (found.length === 0) {
            res.send(404);
        } else {
            res.render('cars/list', {cars: found, title: `Cars made by ${found[0].make}`});
        }
    }
}

export async function storeCar(req, res) {
    const {make, model} = req.body;

    if(make && model) {
        await addCar(make, model);
        res.redirect('/cars')
    } else {
        res.redirect('/cars/create')
    }
}

export async function updateCar(req, res) {
    const id = parseInt(req.params.id, 10);
    
    if (!id) {
        res.send(404);
        return;
    }

    const car = await getById(id);

    if (!car) {
        res.send(404);
        return;
    }

    const {make, model} = req.body;

    if (make && model) {
        car.make = make;
        car.model = model;

        await saveCar(car);
        res.redirect(`/cars/${id}`)
    } else {
        res.redirect(`/cars/${id}/edit`)
    }
}

export async function deleteCar(req, res) {
    const id = parseInt(req.params.id, 10);
    
    if (!id) {
        res.send(404);
        return;
    }

    const car = await getById(id);

    if (!car) {
        res.send(404);
        return;
    }

    await removeCar(id);
    res.redirect('/cars')
}