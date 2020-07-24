import React from "react";
import { InspectorControls, PanelColorSettings } from "@wordpress/block-editor";
import {
	PanelBody,
	ToggleControl,
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
	const {
		rating,
		size,
		sizeUnit,
		color,
		hasShadow,
		offsetX,
		offsetY,
		blur,
		shadowColor,
	} = attributes;

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

				<ToggleControl
					label="Drop Shadow"
					checked={hasShadow}
					onChange={() => setAttributes({ hasShadow: !hasShadow })}
					help={!hasShadow && "Doesn't support Internet Explorer"}
				/>
			</PanelBody>

			<PanelColorSettings
				title="Color"
				initialOpen={false}
				colorSettings={[
					{
						label: "",
						value: color,
						onChange: (color) => setAttributes({ color }),
					},
				]}
			/>

			{hasShadow && (
				<PanelColorSettings
					title="Shadow Color"
					initialOpen={false}
					colorSettings={[
						{
							label: "",
							value: shadowColor,
							onChange: (shadowColor) => setAttributes({ shadowColor }),
						},
					]}
				/>
			)}

			{hasShadow && (
				<PanelBody title="Shadow Settings" initialOpen={false}>
					<RangeControl
						label="Offset X"
						value={offsetX}
						onChange={(offsetX) => setAttributes({ offsetX })}
						min={0}
						max={10}
					/>

					<RangeControl
						label="Offset Y"
						value={offsetY}
						onChange={(offsetY) => setAttributes({ offsetY })}
						min={0}
						max={10}
					/>

					<RangeControl
						label="Blur"
						value={blur}
						onChange={(blur) => setAttributes({ blur })}
						min={0}
						max={10}
					/>
				</PanelBody>
			)}
		</InspectorControls>
	);
}
