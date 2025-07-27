// export default function () {
// 	return fetch("https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0")
// 		.then((response) => response.json())
// 		.then((data) => {
// 			const names = [];
// 			data.results.map((obj) => names.push(obj.name));
// 			return names;
// 		});
// }

export default async function () {
	const res = await fetch(
		"https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0"
	);

	const data = await res.json();

	const names = [];

	data.results.map((obj) => names.push(obj.name));

	return names;
}
