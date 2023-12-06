import React from "react";
import ProductCard from "../ProductCard";
import { IProductRes } from "@/types";
import styles from "./productList.module.scss";

interface IProductListProps {
  data: IProductRes;
}
function ProductList({ data }: IProductListProps) {
  return (
    <div className={styles.list}>
      {data?.data?.map((item) => (
        <ProductCard
          key={item.id}
          image={item.imageUrl}
          title={item.name}
          price={item.minPrice}
        />
      ))}
    </div>
  );
}

export default ProductList;
