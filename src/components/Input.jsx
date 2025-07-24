export default function Input(props) {
	function submit(inputData) {
		const user = inputData.get("search").trim();

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
			/>
			<button type="submit" id="submit-btn">
				Search
			</button>
		</form>
	);
}
