const pokemonName = document.querySelector(".pk-name");
const pokemonNum = document.querySelector(".pk-num");
const pokemonImg = document.querySelector(".pk-img");
const form = document.querySelector("form");
const input = document.querySelector(".input-search");
const prev = document.querySelector("#prev-btn");
const next = document.querySelector("#next-btn");

let searchPk = 4;
const fetchPokemon = async (pokemon) => {
  const apiResp = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);
  if (apiResp.status === 200) {
    const data = await apiResp.json();
    return data;
  }
};

const renderPokemon = async (pokemon) => {
  pokemonName.innerHTML = "... ";
  pokemonNum.innerHTML = " ";
  const data = await fetchPokemon(pokemon);
  if (data) {
    pokemonName.innerHTML = data.name;
    pokemonNum.innerHTML = data.id;
    searchPk = data.id;
    pokemonImg.src =
      data.sprites.versions["generation-v"]["black-white"]["animated"][
        "front_default"
      ];
    input.value = "";
  } else {
    pokemonName.innerHTML = "not found";
    pokemonNum.innerHTML = "0";
  }
};

form.addEventListener("submit", (event) => {
  event.preventDefault();
  renderPokemon(input.value.toLowerCase());
});

prev.addEventListener("click", () => {
  if (searchPk > 1) {
    searchPk--;
    renderPokemon(searchPk);
  }
});

next.addEventListener("click", () => {
  if (searchPk < 649) {
    searchPk++;
    renderPokemon(searchPk);
  }
});

renderPokemon(searchPk);
