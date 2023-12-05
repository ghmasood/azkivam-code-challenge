import React from "react";
import styles from "./productCard.module.scss";
import Image from "next/image";

interface IProductCardProps {
  image: string;
  title: string;
  price: number;
}
function ProductCard({ image, price, title }: IProductCardProps) {
  return (
    <div className={styles.card}>
      <div className={styles.imageContainer}>
        <Image src={image} fill alt={title} objectFit="contain" />
      </div>
      <h3 className={styles.title}>{title}</h3>
      <div className={styles.priceContainer}>
        <span>شروع قیمت از</span>
        <div>
          <span>{price.toLocaleString("fa")}</span>
          <span>تومان</span>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
