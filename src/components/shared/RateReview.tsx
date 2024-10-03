import {
	IconStar,
	IconStarFilled,
	IconStarHalfFilled
} from "@tabler/icons-react";

export interface RateReviewProps {
	rate: number;
	size?: number;
}

export default function RateReview(props: RateReviewProps) {
	function rateToStars(rate: number) {
		const stars = [];
		for (let i = 1; i <= 5; i++) {
			if (rate >= i) {
				stars.push(<IconStarFilled size={props.size ?? 12} />);
			} else if (rate >= i - 0.5) {
				stars.push(<IconStarHalfFilled size={props.size ?? 12} />);
			} else {
				stars.push(<IconStar size={props.size ?? 12} />);
			}
		}
		return stars;
	}

	return (
		<div className="flex gap-0.5 text-emerald-400">
			{rateToStars(props.rate)}
		</div>
	);
}
