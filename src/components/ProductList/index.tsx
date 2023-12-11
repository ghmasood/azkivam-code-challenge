import React from "react";
import { useRouter } from "next/router";

import ProductCard from "../ProductCard";
import ProductCardSkeleton from "../ProductCard/skeleton";

import styles from "./productList.module.scss";

import { IProductRes } from "@/types";
import { BoxRemove } from "iconsax-react";

interface IProductListProps {
  data: IProductRes;
  loading: boolean;
}
function ProductList({ data, loading }: IProductListProps) {
  //ROUTER
  const router = useRouter();

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
      {data.data.length === 0 && (
        <div className={styles.noProduct}>
          <BoxRemove variant="TwoTone" size={"10rem"} />
          <span>متاسفانه کالایی یافت نشد :(</span>
        </div>
      )}
    </div>
  );
}

export default ProductList;
