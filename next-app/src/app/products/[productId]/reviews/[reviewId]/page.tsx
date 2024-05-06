"use client";
import { notFound } from "next/navigation";

function getRandomInt(max: number) {
  return Math.floor(Math.random() * max);
}

export default function ReviewDetail({
  params,
}: {
  params: { reviewId: string; productId: string };
}) {
  const random = getRandomInt(2);
  if (random === 1) {
    throw new Error("Error loading review");
  }

  if (parseInt(params.reviewId) > 1000) {
    notFound();
  }

  return (
    <div>
      <h1>
        Review {params.reviewId} for Product {params.productId}
      </h1>
    </div>
  );
}
