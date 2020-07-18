import React from "react";
import { InspectorControls, PanelColorSettings } from "@wordpress/block-editor";
import { PanelBody, RangeControl, SelectControl } from "@wordpress/components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faStar as faStarFull,
	faStarHalfAlt,
} from "@fortawesome/free-solid-svg-icons";
import { faStar as faStarEmpty } from "@fortawesome/free-regular-svg-icons";
import "./editor.scss";

export default function Edit({ isSelected, attributes, setAttributes }) {
	const { stars, rating, size, color } = attributes;

	const full = Math.floor(rating);
	const half = rating % 1 === 0 ? 0 : 1;
	const empty = stars - (full + half);

	return [
		isSelected && (
			<InspectorControls key="controls">
				<PanelBody>
					<RangeControl
						label="Rating"
						value={rating}
						onChange={(rating) => setAttributes({ rating })}
						step={0.5}
						min={0}
						max={5}
					/>
					<SelectControl
						label="Size"
						value={size}
						options={[
							{ label: "small", value: "xs" },
							{ label: "medium", value: "sm" },
							{ label: "large", value: "lg" },
							{ label: "2x", value: "2x" },
							{ label: "3x", value: "3x" },
							{ label: "4x", value: "4x" },
						]}
						onChange={(size) => setAttributes({ size })}
					/>
				</PanelBody>
				<PanelColorSettings
					label="Color"
					colorSettings={[
						{
							label: "",
							value: color,
							onChange: (color) => setAttributes({ color }),
						},
					]}
				/>
			</InspectorControls>
		),
		<div>
			{full
				? [...Array(full).keys()].map(() => (
						<FontAwesomeIcon icon={faStarFull} color={color} size={size} />
				  ))
				: null}
			{half ? (
				<FontAwesomeIcon icon={faStarHalfAlt} color={color} size={size} />
			) : null}
			{empty
				? [...Array(empty).keys()].map(() => (
						<FontAwesomeIcon icon={faStarEmpty} color={color} size={size} />
				  ))
				: null}
		</div>,
	];
}
