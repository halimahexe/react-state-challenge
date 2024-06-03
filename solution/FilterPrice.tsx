import type { Dispatch, SetStateAction } from "react";

type Props = {
	max: number;
	setMax: Dispatch<SetStateAction<number>>;
};

export default function FilterPrice({ max, setMax }: Props) {
	return (
		<fieldset>
			<legend>Price</legend>
			<label htmlFor="max-price">
				Max price
				<input
					type="range"
					id="max-price"
					min="0.5"
					max="9"
					step="0.25"
					value={max}
					onChange={(e) => setMax(Number(e.target.value))}
				/>
			</label>
		</fieldset>
	);
}
