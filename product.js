export default class Product{
    constructor(code, name, amount, cost){
        this.code=code;
        this.name=name;
        this.amount=amount;
        this.cost=cost;
    }

    //Getters
    getCode(){
        return this.code;
    }
    
    getName(){
        return this.name;
    }

    getCost(){
        return this.cost;
    }

    getTotalCost(){
        return this.cost*this.amount; 
    }

    getAmount(){
        return this.amount;
    }

    getDetails(){
        return `Código: ${this.code}, Nombre: ${this.name}, Costo Unitario: ${this.cost}, Cantidad: ${this.amount}, Costo Total: ${this.getTotalCost()}`;
    }

    //Setters
    setName(name){
        this.name=name;
    }

    setCost(cost){
        this.cost=cost;
    }
    
    setAmount(amount){
        this.amount=amount;
    }

}