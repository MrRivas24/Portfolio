const coches = [
    {
         marca: "Audi",
        modelo: "R8",
        cv: 550,
        cambio: "Automático",
        imagen: "img/audi-r8-grey-1.jpg"

    },
    {
         marca: "BMW",
        modelo: "M4",
        cv: 510,
        cambio: "Automático",
        imagen: "img/venta-porsche-911-gt3-RS-modificado-2.jpg"
    },
    {
         marca: "BMW",
        modelo: "M4",
        cv: 510,
        cambio: "Automático",
        imagen: "img/venta-porsche-911-gt3-RS-modificado-2.jpg"
    },
    {
         marca: "BMW",
        modelo: "M4",
        cv: 510,
        cambio: "Automático",
        imagen: "img/venta-porsche-911-gt3-RS-modificado-2.jpg"
    },
    {
         marca: "Audi",
        modelo: "R8",
        cv: 550,
        cambio: "Automático",
        imagen: "img/audi-r8-grey-1.jpg"

    }
];

const container = document.getElementById("containerCards");

coches.forEach(coche =>{
    const card = document.createElement("div");
    card.classList.add("card");
     card.innerHTML = `
        <img src="${coche.imagen}" alt="${coche.modelo}">
        <h3>${coche.marca} ${coche.modelo}</h3>
        <p>${coche.cv}CV - ${coche.cambio}</p>
        <button>Ver Más</button>
    `;

    container.appendChild(card);
});