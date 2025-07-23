import { useEffect } from "react";
import pokeNames from "../pokeNames.js";

export default function Input(props) {
	function submit(inputData) {
		const user = inputData.get("search");

		// fetched only if the entered name is valid
		if (props.names.includes(user)) props.fetching(user);
		else alert("Invalid name");
	}

	return (
		<form action={submit}>
			<input
				type="text"
				name="search"
				placeholder="bulbasaur"
				id="search-bar"
			/>
			<button id="submit">Search</button>
		</form>
	);
}
