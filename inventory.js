export default class Inventory{
    constructor() {
        this.inventory= new Array();
    }

    add(product){
        let pos= this.search(product.getCode());
        if(pos === null){
            this.inventory.push(product);
        }else{
            return null;
        }
    }

    getInventory(){
        return this.inventory;
    }

    list(){
        for(let i=0; i<this.inventory.length; i++){
            document.getElementById('details').innerHTML+=
            `<br> ${this.inventory[i].getDetails()} </br>`;
        }
    }

    inverseList(){
        for(let i= this.inventory.length - 1; i >= 0; i--){
            document.getElementById('details').innerHTML+=
            `<br> ${this.inventory[i].getDetails()} </br>`;
        }
    }

    search(code){
        for(let i=0; i<this.inventory.length; i++){
            if(code === this.inventory[i].getCode()){
                console.log("success");
                console.log(this.getPosition(code));
                return this.inventory[i];
            }
        }
        return null;
    }

    getPosition(code){
        for(let i=0; i<this.inventory.length; i++){
            if(code === this.inventory[i].getCode()){
                return i;
            }
        }
        return null;
    }

    delete(code){
        let position= this.getPosition(code);
        let nextPosition= position + 1;
        if(position != null){
            while(nextPosition<this.inventory.length){
                let move= this.inventory[position];
                this.inventory[position]=this.inventory[nextPosition];
                this.inventory[nextPosition]=move;
                position++;
                nextPosition++;
            }
            return this.inventory.pop();
        }
        return null;
    }

    organizer(){
        let position= this.inventory.length-1;
        for(let i=0; i<this.inventory.length; i++){
            if(this.inventory[position].getCode() < this.inventory[i].getCode()){
                let space= this.inventory[position];
                this.inventory[position]=this.inventory[i];
                this.inventory[i]=space;
            }
        }
    }


}