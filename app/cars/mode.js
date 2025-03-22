const cars = [
    {id: 1, make:'Lamborghini', model:'Urus' },
    {id: 2, make:'RollsRoyce', model:'Phantom' },
    {id: 3, make:'Mercedes', model:'C-Class' },
    {id: 4, make:'Ferrari', model:'812' },
    {id: 5, make:'Buggati', model:'Chiron' },
]

export function getAll() {
    return Promise.resolve(cars)
}

export function getById(id) {
    const car = cars.find((car) => car.id == id);

    return Promise.resolve(car);
}

export function getByMake(make) {
    const car = cars.filter((car) => car.make.toLowerCase() == make.toLowerCase());

    return Promise.resolve(car);
}
