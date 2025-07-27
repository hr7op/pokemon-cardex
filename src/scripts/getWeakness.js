export default function weakness(firstType) {
	const primaryTypeWeaknesses = {
		bug: "fire",
		dark: "fairy",
		dragon: "ice",
		electric: "ground",
		fairy: "steel",
		fighting: "psychic",
		fire: "water",
		flying: "rock",
		ghost: "ghost",
		grass: "fire",
		ground: "water",
		ice: "fire",
		normal: "fighting",
		poison: "psychic",
		psychic: "dark",
		rock: "water",
		steel: "ground",
		water: "electric",
	};

	return primaryTypeWeaknesses[firstType];
}