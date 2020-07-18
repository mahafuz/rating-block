import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faStar as faStarFull,
	faStarHalfAlt,
} from "@fortawesome/free-solid-svg-icons";
import { faStar as faStarEmpty } from "@fortawesome/free-regular-svg-icons";

export default function save({ attributes }) {
	const { stars, rating, color } = attributes;

	const full = Math.floor(rating);
	const half = rating % 1 === 0 ? 0 : 1;
	const empty = stars - (full + half);

	return (
		<div>
			{full
				? [...Array(full).keys()].map(() => (
						<FontAwesomeIcon icon={faStarFull} color={color} />
				  ))
				: null}
			{half ? <FontAwesomeIcon icon={faStarHalfAlt} color={color} /> : null}
			{empty
				? [...Array(empty).keys()].map(() => (
						<FontAwesomeIcon icon={faStarEmpty} color={color} />
				  ))
				: null}
		</div>
	);
}
