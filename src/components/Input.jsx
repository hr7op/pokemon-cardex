import { useState, useRef } from "react";

export default function Input(props) {
	const [pokeList, setPokeList] = useState(null);
	const userInput = useRef(null);

	function filterNames() {
		setPokeList(
			props.names
				.filter((name) =>
					name.includes(userInput.current.value.toLowerCase())
				)
				.slice(0, 7)
		);
	}

	function submit(inputData) {
		let user = inputData.get("search").toLowerCase();
		user = user.trim();

		// fetched only if the entered name is valid
		if (props.names.includes(user)) props.fetching(user);
		else console.log("Invalid name");
	}

	return (
		<form action={submit}>
			<input
				type="text"
				name="search"
				placeholder="bulbasaur"
				id="search-bar"
				list="poke-list"
				onKeyUp={() => filterNames()}
				ref={userInput}
			/>
			{pokeList && (
				<datalist id="poke-list">
					{pokeList.map((item, index) => (
						<option key={index} value={item} />
					))}
				</datalist>
			)}
			<button type="submit" id="submit-btn">
				Search
			</button>
		</form>
	);
}
