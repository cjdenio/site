import clsx from "clsx";
import { PropsWithChildren, useEffect, useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar as faStarFill } from "@fortawesome/free-solid-svg-icons";
import { faStar } from "@fortawesome/free-regular-svg-icons";
import { gql, useMutation, useQuery } from "@apollo/client";

const RATING = gql`
  query Rating($item: String!) {
    rating(item: $item) {
      item
      stars
      reviewCount
    }
  }
`;

const REVIEW = gql`
  mutation Review($item: String!, $stars: Int!) {
    review(item: $item, stars: $stars) {
      item
      stars
      reviewCount
    }
  }
`;

export function Review({ id }) {
  const { data } = useQuery(RATING, {
    variables: { item: id },
  });
  const [review] = useMutation(REVIEW);
  const [_stars, _setStars] = useState<number>(null);

  const stars = _stars ?? (Math.round(data?.rating?.stars) || 0);

  return (
    <div className="px-1 py-1 inline-flex items-center text-yellow-500 bg-zinc-600 rounded-full">
      {[1, 2, 3, 4, 5].map((star) => (
        <FontAwesomeIcon
          key={star}
          icon={stars >= star ? faStarFill : faStar}
          className="cursor-pointer"
          onMouseEnter={() => _setStars(star)}
          onMouseLeave={() => _setStars(null)}
          onClick={() => {
            review({ variables: { stars: star, item: id } });
          }}
        />
      ))}
      <span className="text-zinc-400 text-xs ml-1 select-none">
        ({data?.rating?.reviewCount || 0})
      </span>
    </div>
  );
}

export default function ReviewMe({
  children,
  className,
  id,
  ...props
}: PropsWithChildren<{ id: string; className?: string }>) {
  return (
    <div className={clsx("relative group", className)} {...props}>
      <div className="absolute bottom-full right-0">
        <div
          className="
          opacity-0 group-hover:opacity-100
          translate-y-1 group-hover:translate-y-0
          transition
          mb-1
        "
        >
          <Review id={id} />
        </div>
      </div>
      {children}
    </div>
  );
}
