import React from "react";
import styles from "./productCard.module.scss";
import Image from "next/image";

interface IProductCardProps {
  image: string;
  title: string;
  price: number;
  merchantName: string;
}
function ProductCard({ image, price, title, merchantName }: IProductCardProps) {
  return (
    <div className={styles.card}>
      <h5>{merchantName}</h5>
      <div className={styles.imageContainer}>
        <Image src={image} fill alt={title} objectFit="contain" />
      </div>
      <h3 className={styles.title}>
        {title} - {merchantName}
      </h3>
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
