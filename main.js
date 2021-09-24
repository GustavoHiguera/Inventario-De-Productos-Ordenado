import Product from './product.js';
import Inventory from './inventory.js';

let inventory= new Inventory();

function clean(){
    return `<p> </p>`;
}

let btnAdd=document.getElementById('btnAdd');
btnAdd.addEventListener('click', () => {
    let code = Number(document.getElementById('code').value);
    let name = document.getElementById('name').value;
    let amount = document.getElementById('amount').value;
    let cost = document.getElementById('cost').value;

    if(!code || !name || !amount || !cost){
        document.getElementById('details').innerHTML=
            `<p>Se requieren todos los datos</p>`;
            return;
    }
    let product= new Product(code, name, amount, cost);

    

    if(inventory.inventory.length < 20 ){
        let added= inventory.add(product);
        inventory.organizer();
        if(added === null){
            document.getElementById('details').innerHTML=
            `<p>El código de este producto ya existe</p>`;
            return;
        }
        document.getElementById('details').innerHTML=
        `<p>El producto ${product.getName()} fue agregado correctamente</p>`;
    }else{
        document.getElementById('details').innerHTML=
        `<p>El inventario está lleno<p>`;
    }
});

let btnSearch=document.getElementById('btnSearch');
btnSearch.addEventListener('click', () => {
    let code=Number(document.getElementById('code').value);
    let pSearch= inventory.search(code);
    let details=document.getElementById('details');
    if(pSearch=== null){
        details.innerHTML=
        `<p>Este producto no existe</p>`
    }else{
        details.innerHTML=
        `<p>Producto encontrado</p> <p>${pSearch.getDetails()}</p>`
    }
})


let btnList=document.getElementById('btnList');
btnList.addEventListener('click', () => {
    let details= document.getElementById('details');
    details.innerHTML=clean();
    inventory.list(); 
})

let btnInverseList=document.getElementById('btnInverseList');
btnInverseList.addEventListener('click', () => {
    let details= document.getElementById('details');
    details.innerHTML=clean();
    inventory.inverseList();
})


let btnDelete=document.getElementById('btnDelete');
btnDelete.addEventListener('click', () => {
    let code=Number(document.getElementById('code').value);
    let pDelete= inventory.delete(code);
    let details= document.getElementById('details');

    if(pDelete === null){
        details.innerHTML=
        `<p>Este producto no existe</p>`;
    }else{
        details.innerHTML=
        `<p>El producto ${pDelete.getName()} fue eliminado correctamente</p>`;
    }
})



