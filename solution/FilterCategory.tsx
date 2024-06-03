import type { Dispatch, SetStateAction } from "react";

const categories = [
	"all",
	"burger",
	"hot dog",
	"sandwich",
	"fries",
	"drink",
	"topping",
	"extra",
] as const;
// TS `as const` makes the array type only contain these values,
// rather than just be Array<string>

export type Category = (typeof categories)[number];

type Props = {
	category: Category;
	setCategory: Dispatch<SetStateAction<Category>>;
};

export default function FilterCategory({ category, setCategory }: Props) {
	return (
		<fieldset>
			<legend>Category</legend>
			{categories.map((c) => (
				<label htmlFor={c} key={c}>
					<input
						type="radio"
						name="categories"
						id={c}
						value={c}
						checked={category === c}
						onChange={(e) => setCategory(e.target.value as Category)}
						// We know `value` will always be a valid `Category`, but TS doesn't
						// So we use `as` to type cast the string to avoid an incorrect error
					/>
					{c}
				</label>
			))}
		</fieldset>
	);
}
