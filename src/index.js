import { registerBlockType } from "@wordpress/blocks";
import { __ } from "@wordpress/i18n";
import "./style.scss";

import Edit from "./edit";
import save from "./save";
import attributes from "./attributes";

registerBlockType("create-block/rating", {
	title: __("Rating", "create-block"),
	description: __(
		"Example block written with ESNext standard and JSX support – build step required.",
		"create-block"
	),
	category: "widgets",
	attributes,
	icon: "star-filled",
	edit: Edit,
	save,
});
