const Pizzas = [
    {
        id: 1,
        nombre: "Fugazzeta",
        ingredientes: ["Salsa de tomate", "Queso", "Cebolla"],
        precio: 550,
    },
    {
        id: 2,
        nombre: "Napolitana",
        ingredientes: ["Salsa de tomate", "Queso", "Rodajas de tomate", "Orégano", "Ajo"],
        precio: 500,
    },
    {
        id: 3,
        nombre: "Especial",
        ingredientes: ["Salsa de tomate", "Jamón", "Queso", "Orégano", "Huevo", "Pimientos"],
        precio: 500,
    },
    {
        id: 4,
        nombre: "Jamón y queso",
        ingredientes: ["Salsa de tomate", "Orégano", "Jamón", "Queso"],
        precio: 450,
    },
    {
        id: 5,
        nombre: "Cantimpalo",
        ingredientes: ["Salsa de tomate", "Cantimpalo", "Queso", "Orégano", "Aceitunas"],
        precio: 550,
    },
    {
        id: 6,
        nombre: "Rúcula",
        ingredientes: ["Salsa de tomate", "Queso", "Rúcula", "Jamón crudo"],
        precio: 650,
    },
    {
        id: 7,
        nombre: "Panceta",
        ingredientes: ["Queso", "Orégano", "Panceta", "Aceitunas"],
        precio: 700,
    },
];
/* console.log(pizza) */


console.log(`A) Imprimir en consola todos las pizzas con id impar`);

const idPares = Pizzas.filter(pizza => pizza.id % 2 != 0)
    idPares.forEach((pizza) => {
   console.log(`La pizza ${pizza.nombre} tiene id impar`)
});


console.log(`B)¿Hay alguna pizza que valga menos de $600?`);

const hayProductosConPrecioMenorA600 = 
    Pizzas.some(pizza => pizza.precio < 600)
    ? console.log(`Hay pizzas con precio menor a $600`)
    : console.log(`No hay pizzas con precio menor a $600`);


console.log(`C) El nombre de cada pizza con su respectivo precio.`);

const ListaDePizzasConPrecio =
    Pizzas.forEach((pizza) => {
    console.log(`La pizza ${pizza.nombre} cuesta $${pizza.precio}`)
    });

    
console.log(`D) Todos los ingredientes de cada pizza`);

const IngredientesDeCadaPizza =
    Pizzas.forEach((pizza) =>{
        console.log(`La pizza ${pizza.nombre} tiene los siguientes ingredientes: ${pizza.ingredientes.join(`, `)}`)
    });