import { useState, useEffect } from "react";
import "./App.css";
import Header from "./components/Header";
import Input from "./components/Input";
import PokeCard from "./components/PokeCard";
import Footer from "./components/Footer";
import pokeNames from "./pokeNames.js";

function App() {
	const [names, setNames] = useState();
	const [pokemon, setPokemon] = useState(null);

	function fetching(name) {
		const pokemon = {};
		fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
			.then((res) => res.json())
			.then((data) => {
				pokemon.name = data.name;

				//taking types
				pokemon.types = [];
				data.types.map(
					(type, index) => (pokemon.types[index] = type.type.name)
				);

				pokemon.weight = data.weight;

				//taking IMAGES
				pokemon.images = {};
				pokemon.images.artwork =
					data.sprites.other["official-artwork"].front_default;
				pokemon.images.svg =
					data.sprites.other.dream_world.front_default;

				pokemon.images.gif = [];
				pokemon.images.gif[0] =
					data.sprites.other.showdown.front_default;
				pokemon.images.gif[1] =
					data.sprites.other.showdown.back_default;

				//taking stats
				pokemon.stats = {};
				pokemon.stats.hp = data.stats[0].base_stat;
				pokemon.stats.attack = data.stats[1].base_stat;
				pokemon.stats.defence = data.stats[2].base_stat;
				pokemon.stats.speed = data.stats[5].base_stat;

				setPokemon(pokemon);
			});
	}

	useEffect(() => {
		
		//displaying the default card
		fetching("bulbasaur");

		// storing all pokemon names only once
		(async () => {
			setNames(await pokeNames());
		})();
	}, []);

	return (
		<>
			<Header />
			<Input fetching={fetching} names={names} />
			{pokemon && <PokeCard pokemon={pokemon} />}
			<Footer />
		</>
	);
}

export default App;
