console.log("Site carregado!");
const buscaInput = document.getElementById("busca");
const filtroEspecie = document.getElementById("filtro-especie");
const filtroSexo = document.getElementById("filtro-sexo");

const cards = document.querySelectorAll(".card");

function filtrarPets() {
    const busca = buscaInput.value.toLowerCase();
    const especie = filtroEspecie.value;
    const sexo = filtroSexo.value;

    cards.forEach(card => {
        const nome = card.dataset.nome;
        const especieCard = card.dataset.especie;
        const sexoCard = card.dataset.sexo;

        let mostrar = true;

        // Busca por nome
        if (busca && !nome.includes(busca)) {
            mostrar = false;
        }

        // Filtro espécie
        if (especie && especie !== especieCard) {
            mostrar = false;
        }

        // Filtro sexo
        if (sexo && sexo !== sexoCard) {
            mostrar = false;
        }

        card.style.display = mostrar ? "block" : "none";
    });
}

buscaInput.addEventListener("input", filtrarPets);
filtroEspecie.addEventListener("change", filtrarPets);
filtroSexo.addEventListener("change", filtrarPets);