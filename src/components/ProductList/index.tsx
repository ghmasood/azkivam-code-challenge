import React, { useEffect, useState } from "react";
import ProductCard from "../ProductCard";
import { IProduct } from "@/types";

interface IProductListProps {}
function ProductList({}: IProductListProps) {
  const [productList, setProductList] = useState<IProduct[]>([]);
  useEffect(() => {
    fetch("https://interview-api.azkiloan.com/api/v1/products?size=12&page=1", {
      method: "POST",
    }).then((res) => res.json().then((data) => setProductList(data.data)));
  }, []);

  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        width: "80%",
        borderRadius: "0.75rem",
        overflow: "hidden",
        border: "1px solid gray",
      }}
    >
      {productList?.map((item, index) => (
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
