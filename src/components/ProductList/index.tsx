import React from "react";

import ProductCard from "../ProductCard";
import ProductCardSkeleton from "../ProductCard/skeleton";

import styles from "./productList.module.scss";

import { IProductRes } from "@/types";

interface IProductListProps {
  data: IProductRes;
  loading: boolean;
}
function ProductList({ data, loading }: IProductListProps) {
  return (
    <div className={styles.list}>
      {loading
        ? [...new Array(12)].map((_, index) => (
            <ProductCardSkeleton key={index + "skeleton"} />
          ))
        : data?.data?.map((item, index) => (
            <ProductCard
              key={item.id + "id" + index}
              image={item.imageUrl}
              title={item.name}
              price={item.minPrice}
            />
          ))}
    </div>
  );
}

export default ProductList;
