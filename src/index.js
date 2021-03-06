import { registerBlockType } from "@wordpress/blocks";
import { __ } from "@wordpress/i18n";
import "./style.scss";

import Edit from "./edit";
import save from "./save";
import attributes from "./attributes";
import example from "./example";

registerBlockType("create-block/rating", {
	title: __("Rating", "create-block"),
	description: __(
		"Display rating stars using gutenberg block.",
		"create-block"
	),
	category: "widgets",
	attributes,
	icon: "star-filled",
	edit: Edit,
	save,
	example,
});
