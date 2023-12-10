import React from "react";
import Image from "next/image";

import styles from "./productCard.module.scss";

function ProductCardSkeleton() {
  return (
    <div className={styles.card}>
      <div className={`${styles.imageContainer} skeleton`}>
        <Image
          src={
            "https://ghestchy.ir/wp-content/uploads/2023/08/unnamed-file-17.jpg"
          }
          fill
          alt={"title"}
          objectFit="contain"
        />
      </div>
      <h3 className={`${styles.title} skeleton`}>
        {"titletitletitletitleti titletitletitletitleti tletitletitletitle"}
      </h3>
      <div className={styles.priceContainer}>
        <span className="skeleton">شروع قیمت از</span>
        <div>
          <span className="skeleton">{100000000}</span>
        </div>
      </div>
    </div>
  );
}

export default ProductCardSkeleton;
