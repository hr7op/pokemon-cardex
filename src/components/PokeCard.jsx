import { useState, useRef, useEffect } from "react";
import weakness from "../weakness.js";

export default function PokeCard({ pokemon }) {
	const colors = useRef(null);
	const [typeData, setTypeData] = useState(null);
	const obj = useRef(null);

	useEffect(() => {
		obj.current = weakness(pokemon.types[0]);
		fetch("types.json")
			.then((res) => res.json())
			.then((data) => {
				const temp = [];
				pokemon.types.map((type) => {
					temp.push({
						text: data[type].title,
						bg: data[type].bg,
					});
				});
				temp.push({ text: data[obj.current].bg }); //also pushing the weakness color at the last index

				colors.current = temp;
				setTypeData(data[pokemon.types[0]]);
			});
	}, [pokemon]);

	const nameStyling = pokemon.name.includes("-") ? "1.3rem" : "2rem";

	return (
		<>
			{typeData && colors.current.length - 1 === pokemon.types.length && (
				<div
					className="card-container"
					style={{
						color: typeData.url.includes("dark")
							? "white"
							: "black",
					}}
				>
					<img src={typeData.url} className="card" />
					<img src={pokemon.images.artwork} className="poke-image" />
					<img
						id="gif"
						src={pokemon.images.gif[0]}
						alt="pokemon-gif"
					></img>

					<div className="top-stats stats">
						<span
							className="name"
							style={{ fontSize: nameStyling }}
						>
							{pokemon.name}
						</span>
						<span id="hp">
							HP <b className="numbers">{pokemon.stats.hp}</b>
						</span>
					</div>

					<div className="main-stats stats">
						<p id="attack">
							<span>Attack</span>
							<span className="value">
								{pokemon.stats.attack}
							</span>
						</p>
						<p id="defence">
							<span>Defence</span>
							<span className="value">
								{pokemon.stats.defence}
							</span>
						</p>
						<p id="speed">
							<span>Speed</span>
							<span className="value">{pokemon.stats.speed}</span>
						</p>
					</div>

					<div className="types">
						{pokemon.types.map((type, index) => {
							return (
								<span
									key={index}
									id={type}
									style={{
										backgroundColor:
											colors.current[index].bg,
										color: colors.current[index].text,
									}}
								>
									{type}
								</span>
							);
						})}
					</div>

					<div
						className="weakness stats"
						style={{
							color: colors.current[colors.current.length - 1]
								.text,
						}}
					>
						{obj.current}
					</div>
				</div>
			)}
		</>
	);
}
