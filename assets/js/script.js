// ES6
console.log('cachupin')
const btnAgregar = document.querySelector('form')
btnAgregar.addEventListener('submit', function(e){
    e.preventDefault()
    const ownerName = document.querySelector('#propietario').value
    const ownerPhone = document.querySelector('#telefono').value
    const ownerAddress = document.querySelector('#direccion').value
    const petName = document.querySelector('#nombreMascota').value
    const petType = document.querySelector('#tipo').value
    const petSymptoms = document.querySelector('#enfermedad').value

    let currentAnimal = {}

    switch (petType) {
        case "perro": 
            currentAnimal = new Dog(petName,petType,petSymptoms)
            break;

        case "gato": 
            currentAnimal = new Cat(petName,petType,petSymptoms)
            break;

        case "conejo": 
            currentAnimal = new Rabbits(petName,petType,petSymptoms)
            break;
    }

    const owner = new Owner(ownerName,ownerPhone,ownerAddress,currentAnimal)

    console.log(owner);
})

class Animal{
    constructor(name,type){
        this.name = name
        this.type = type

    }
    info(){
        return `El nombre del animal es: ${this.name}, y este es un: ${this.type}`
    }
}

class Dog extends Animal{
    constructor(name,type,symptoms){
        super(name,type)
        this._symptoms = symptoms
    }
    get symptoms(){
        return this._symptoms
    }
    set symptoms(newSymptoms){
        this._symptoms = newSymptoms
    }
}

class Rabbits extends Animal{
    constructor(name,type,symptoms){
        super(name,type)
        this._symptoms = symptoms
    }
    get symptoms(){
        return this._symptoms
    }
    set symptoms(newSymptoms){
        this._symptoms = newSymptoms
    }
}

class Cat extends Animal{
    constructor(name,type,symptoms){
        super(name,type)
        this._symptoms = symptoms
    }
    get symptoms(){
        return this._symptoms
    }
    set symptoms(newSymptoms){
        this._symptoms = newSymptoms
    }
}

class Owner{
    constructor(name,phone, address,animal = {}){
        this.name = name
        this.phone = phone
        this.address = address
        this.animal = animal
    }
    info(){
        return `El nombre del dueño es: ${this.name}, su dirección es: ${this.address}, el teléfono es: ${this.phone}, y la mascota es: ${this.animal.info}`
    }
}
