import React from "react";
import { useRouter } from "next/router";

import ProductCard from "../ProductCard";
import ProductCardSkeleton from "../ProductCard/skeleton";

import styles from "./productList.module.scss";

import { IProductRes } from "@/types";

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
      <button
        onClick={() =>
          router.replace(
            {
              ...router,
              query: {
                ...router.query,
                limit: +(router.query.limit ?? 12) + 3,
              },
            },
            undefined,
            { scroll: false }
          )
        }
        style={{ display: "block" }}
      >
        ooo
      </button>
    </div>
  );
}

export default ProductList;
