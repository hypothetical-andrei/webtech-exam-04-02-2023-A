class Duck{
    constructor(name){
        this.name = name
    }
    move(){
        return `${this.name} is moving`
    }
}

class RubberDuck{
}



const app = {
    Duck,
    RubberDuck
}

module.exports = app