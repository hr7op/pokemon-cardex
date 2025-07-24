import { useState, useRef, useEffect } from "react";

export default function PokeCard({ pokemon }) {
	const colors = useRef(null);
	const [typeData, setTypeData] = useState(null);

	useEffect(() => {
		fetch("types.json")
			.then((res) => res.json())
			.then((data) => {
				const arr = [];
				pokemon.types.map((type) => {
					arr.push({
						text: data[type].title,
						bg: data[type].bg,
					});
				});
				colors.current = arr;
				setTypeData(data[pokemon.types[0]]);
			});
	}, [pokemon]);

	const nameStyling = pokemon.name.includes("-") ? "1.3rem" : "2rem";

	return (
		<>
			{typeData && colors.current.length === pokemon.types.length && (
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
					{/* <img
						id="gif"
						src={pokemon.images.gif[0]}
						alt="pokemon-gif"
					></img> */}

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
							console.log(colors[index]);
							console.log(type);
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
				</div>
			)}

			
		</>
	);
}
