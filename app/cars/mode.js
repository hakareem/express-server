import mongoose from "mongoose";

const carSchema = new mongoose.Schema({
    make: String,
    model: String,
    make_lower: String
});

const Car = mongoose.model('Car', carSchema);

const car = new Car({ make: 'Lamborghini', model: 'Urus', make_lower: 'lamborghini' });

const cars = [
    {id: 1, make:'Lamborghini', model:'Urus' },
    {id: 2, make:'RollsRoyce', model:'Phantom' },
    {id: 3, make:'Mercedes', model:'C-Class' },
    {id: 4, make:'Ferrari', model:'812' },
    {id: 5, make:'Buggati', model:'Chiron' },
]

export async function getAll() {
    return await Car.find();
}

export async function getById(id) {
    return await Car.findById(id);
}

export async function getByMake(make) {
    return await Car.find({ make_lower: make.toLowerCase() });
}

export async function addCar(make, model) {
   return await Car.create({ make, model, make_lower: make.toLowerCase() });
}

export async function saveCar(id, make, model) {
    const car = await getById(id);

    if(car) {
        car.make = make;
        car.model = model;
        car.make_lower = make.toLowerCase;

        return car.save();
    }
}

export async function removeCar(id) {
    return await Car.findByIdAndDelete(id);
}