const pokemonName = document.querySelector(".pk-name");
const pokemonNum = document.querySelector(".pk-num");
const pokemonImg = document.querySelector(".pk-img");
const fetchPokemon = async (pokemon) => {
  const apiResp = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);
  const data = await apiResp.json();
  return data;
};

const renderPokemon = async (pokemon) => {
  const data = await fetchPokemon(pokemon);
  pokemonName.innerHTML = data.name;
  pokemonNum.innerHTML = data.id;
  pokemonImg.src =
    data.sprites.versions["generation-v"]["black-white"]["animated"][
      "front_default"
    ];
};

renderPokemon("6");
