const poke_container = document.querySelector(".poke-container")
const search = document.querySelector(".search")
const searchBtn = document.querySelector(".searchBtn")
const searchInput = document.querySelector(".searchInput")

const pokemon_count = 151;

const bg_color = {   // renkler dışarıdan alındı
  grass: '#8BD369',
  fire: '#FF603F',
  water: '#3399FF',
  bug: '#AABB22',
  normal: '#AAAA99',
  flying: '#9AA8FA',
  poison: '#B76EA4',
  electric: '#FFD34E',
  ground: '#E2C56A',
  fairy: '#F1A8EC',
  psychic: '#FF6EA4',
  fighting: '#C56E5C',
  rock: '#C5B679',
  dragon: '#7766EE',
  ice: '#66CCFF',
}

searchBtn.addEventListener("click", () => {    // search class ına active ekledik
  search.classList.toggle("active");
})

searchInput.addEventListener("input", (e) => {
  const searchValue = searchInput.value.toLowerCase()
  const pokemonNames = document.querySelectorAll(".poke-name")

  pokemonNames.forEach((pokemonName) => {     //  pokemonNames içinde forEach ile gezerek arama kısmında aranan pokemonu bulacağız

    if(pokemonName.innerHTML.toLowerCase().includes(searchValue)){    // search değeri eşleşirse eşleşen değerler block stilinde görünecek
      pokemonName.parentElement.parentElement.style.display = "block"  // parentElement.parentElement = 2 div yukarısına çıkıp tüm pokemonlar içinde arama yapdık  
    }else{
      pokemonName.parentElement.parentElement.style.display = "none"  // eşleşmeyenler none olacak ve görünmeyecek
    }

  })
})

const fetchPokemons = async () => {       // pokemonları üst üste binmeden ve hızl bir şekilde url den çekebilmek için async kullandık. 
  for (let i = 1; i < pokemon_count; i++) {
    await getPokemon(i)
  }
}

const getPokemon = async (id) => {     // sitedeki id sistemine göre pokemonlar geldiği için burada id verdik 
  const url = `https://pokeapi.co/api/v2/pokemon/${id}`
  const res = await fetch(url)   // url den fetch edip re içine atadık
  const data = await res.json()     // res i json formatına çevirdik 
  //console.log(data)
  createPokemonCard(data)
}

const createPokemonCard = (pokemon) => {
  const pokemonDiv = document.createElement("div")
  pokemonDiv.classList.add("pokemon")

  const pokemonId = pokemon.id.toString().padStart(3, "0")   // pokemonların id lerini string olarak çektik bunları numara olarak yazdıracağız // padStart ile sayının 3 basamaklı olacağını ve bos kısımları 0 ile doldurmasını istedik. 

  const pokemonType = pokemon.types[0].type.name         // url den pokemonType a erişerek html de grass yerine atadık ve dinamiklik vermiş olduk 
  const pokemonBg = bg_color[pokemonType]     //  pokemonBg ile pokemonType eşleşince pokemonların arka plan renkleri değişecek
  pokemonDiv.style.backgroundColor = `${pokemonBg}`  // pokemonDiv içine style ekleyerek arka plan reklerini dinamikleştirdik

  const pokemonDivInnerHtml = `
  
  <div class="image-container">
    <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png" alt="Pokemon 1 image">
  </div>
  <div class="poke-info">
    <span class="poke-id">${pokemonId}</span>
    <h3 class="poke-name">${pokemon.name}</h3>
    <div class="small">
      <small class="poke-exp"><i class="fa-solid fa-flask"></i> ${pokemon.base_experience} exp</small>
      <small class="poke-weight"><i class="fa-solid fa-flask"></i> ${pokemon.weight} kg</small>
    </div>
    <div class="poke-type">
      <i class="fa-brands fa-uncharted"></i> ${pokemonType}
    </div>
  </div>

  `

  pokemonDiv.innerHTML = pokemonDivInnerHtml
  poke_container.appendChild(pokemonDiv) 

}

fetchPokemons()