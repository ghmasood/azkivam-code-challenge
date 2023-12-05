import React from "react";

interface IProductCardProps {
  customClass?: string;
  image: string;
  title: string;
  price: number;
}
function ProductCard({ customClass = "" }: IProductCardProps) {
  return <div className={customClass}>ProductCard</div>;
}

export default ProductCard;
