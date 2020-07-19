import React from "react";
import { InspectorControls, PanelColorSettings } from "@wordpress/block-editor";
import {
	PanelBody,
	RangeControl,
	ButtonGroup,
	Button,
} from "@wordpress/components";

const UNITS = [
	{ label: "px", value: "px" },
	{ label: "em", value: "em" },
	{ label: "rem", value: "rem" },
];

export default function Inspector({ attributes, setAttributes }) {
	const { rating, size, sizeUnit, color } = attributes;

	const SIZE_STEP = sizeUnit === "px" ? 1 : 0.1;
	const SIZE_MAX = sizeUnit === "px" ? 100 : 10;

	return (
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

				<ButtonGroup className="unit-btn-group">
					{UNITS.map((unit) => (
						<Button
							className="unit-btn"
							isSmall
							isPrimary={sizeUnit === unit.value}
							isTertiary={sizeUnit !== unit.value}
							onClick={() => setAttributes({ sizeUnit: unit.value })}
						>
							{unit.label}
						</Button>
					))}
				</ButtonGroup>

				<RangeControl
					label="Size"
					value={size}
					onChange={(size) => setAttributes({ size })}
					step={SIZE_STEP}
					min={0}
					max={SIZE_MAX}
				/>
			</PanelBody>

			<PanelColorSettings
				title="Color"
				colorSettings={[
					{
						label: "",
						value: color,
						onChange: (color) => setAttributes({ color }),
					},
				]}
			/>
		</InspectorControls>
	);
}
