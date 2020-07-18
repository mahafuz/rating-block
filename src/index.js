import { registerBlockType } from "@wordpress/blocks";
import { __ } from "@wordpress/i18n";
import "./style.scss";

import Edit from "./edit";
import save from "./save";

registerBlockType("create-block/rating", {
	title: __("Rating", "create-block"),
	description: __(
		"Example block written with ESNext standard and JSX support – build step required.",
		"create-block"
	),
	category: "widgets",
	icon: "smiley",
	attributes: {
		stars: {
			type: "number",
			default: 5,
		},
		rating: {
			type: "number",
		},
		color: {
			type: "string",
		},
		size: {
			type: "string",
			default: "medium",
		},
	},
	edit: Edit,
	save,
});
