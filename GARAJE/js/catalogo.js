document.addEventListener('DOMContentLoaded', function(){
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

// Selecciones DOM
const container = document.getElementById("containerCards");
const filtroBtn = document.getElementById('filtroBtn');
const filtrosMenu = document.getElementById('filtrosMenu');
const botones = document.querySelectorAll('.filtros button'); // SOLO UNA VEZ

// Función render
function renderCoches(lista) {
    container.innerHTML = ""; 
    lista.forEach(coche => {
        const card = document.createElement("div");
        card.classList.add("card");

        card.innerHTML = `
            <img src="${coche.imagen}" alt="${coche.modelo}">
            <h3>${coche.marca} ${coche.modelo}</h3>
            <p>${coche.cv}CV - ${coche.cambio}</p>
            <button class="verMas">Ver Más</button>
        `;

        container.appendChild(card);

        // Evento botón
        const boton = card.querySelector(".verMas");
        boton.addEventListener("click", () => abrirModal(coche));
    });
}

// Render inicial
renderCoches(coches);

// ============================================
// FILTRADO CON DROPDOWN
// ============================================

// Abrir/cerrar el menú
filtroBtn.addEventListener('click', () => {
  filtrosMenu.classList.toggle('open');
  filtroBtn.classList.toggle('active');
});

// Cerrar al hacer clic fuera
document.addEventListener('click', (e) => {
  if (!e.target.closest('.filtro-dropdown')) {
    filtrosMenu.classList.remove('open');
    filtroBtn.classList.remove('active');
  }
});

// FILTRADO - SOLO ESTE BLOQUE
botones.forEach(boton => {
    boton.addEventListener("click", () => {
        const marca = boton.dataset.marca;
        
        // Remover active de todos
        botones.forEach(btn => btn.classList.remove('active'));
        
        // Añadir active al botón seleccionado
        boton.classList.add('active');
        
        // Actualizar texto del botón principal
        document.querySelector('.filtro-texto').textContent = marca;
        
        // Cerrar el menú
        filtrosMenu.classList.remove('open');
        filtroBtn.classList.remove('active');
        
        // Lógica de filtrado
        if (marca === "Todos") {
            renderCoches(coches);
        } else {
            const filtrados = coches.filter(coche => coche.marca === marca);
            renderCoches(filtrados);
        }
    });
});

// ============================================
// MODAL DE DETALLES
// ============================================

const modal = document.getElementById("modal");
const modalBody = document.getElementById("modalBody");
const cerrarModal = document.getElementById("cerrarModal");

function abrirModal(coche) {
    modalBody.innerHTML = `
        <img src="${coche.imagen}" alt="${coche.modelo}">
        <h2>${coche.marca} ${coche.modelo}</h2>
        <p><strong>Potencia:</strong> ${coche.cv} CV</p>
        <p><strong>Cambio:</strong> ${coche.cambio}</p>
    `;

    modal.classList.add("active");
    document.body.style.overflow = "hidden";
}

function cerrar() {
    modal.classList.remove("active");
    document.body.style.overflow = "auto";
}

cerrarModal.addEventListener("click", cerrar);

// Cerrar al hacer click fuera
modal.addEventListener("click", (e) => {
    if (e.target === modal) {
        cerrar();
    }
});
console.log(document.getElementById('filtroBtn')); // ¿Sale null o el botón?
console.log(document.getElementById('filtrosMenu')); // ¿Sale null o el div?
});