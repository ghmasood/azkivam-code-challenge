import React, { useEffect, useState } from "react";
import { GetServerSideProps, NextPage } from "next";
import { useRouter } from "next/router";

import { Vazirmatn } from "next/font/google";

import ProductList from "@/components/ProductList";
import FilterSection from "@/components/FilterSection";

import styles from "./homePage.module.scss";

import {
  ICategoriesRes,
  IHomePageData,
  IMerchantRes,
  IProductRes,
} from "@/types";

const vazir = Vazirmatn({ subsets: ["arabic"] });

const Home: NextPage<IHomePageData> = (props) => {
  //STATES
  const [loading, setLoading] = useState(false);

  //ROUTER
  const router = useRouter();

  //LIFECYCLE HOOK
  useEffect(() => {
    setLoading(false);
  }, [props]);

  return (
    <main className={`${vazir.className} ${styles.mainPage}`}>
      <FilterSection
        setLoading={setLoading}
        merchants={props.merchantData}
        categories={props.categoriesData}
      />
      <ProductList loading={loading} data={props.productData} />
    </main>
  );
};

export default Home;

export const getServerSideProps: GetServerSideProps<IHomePageData> = async (
  ctx
) => {
  const baseURL = "https://interview-api.azkiloan.com/api/v1";

  const { catId, merchants } = ctx.query;

  //VARIABLES
  const merchantsArr =
    typeof merchants === "string"
      ? [merchants]
      : typeof merchants === "object"
      ? [...merchants]
      : [];
  const merchantsArrNumber = merchantsArr.map((i) => +i);

  //FETCH PRODUCT
  const productRes = await fetch(
    `${baseURL}/products/${catId ? catId : ""}?size=12&page=1`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ merchantIds: merchantsArrNumber }),
    }
  );
  const productData = (await productRes.json()) as IProductRes;

  //FETCH MERCHANT
  const merchantRes = await fetch(`${baseURL}/merchants`);
  const merchantData = (await merchantRes.json()) as IMerchantRes;

  //FETCH CATEGORIES
  const categoriesRes = await fetch(`${baseURL}/categories`);
  const categoriesData = (await categoriesRes.json()) as ICategoriesRes;

  return {
    props: {
      productData,
      merchantData,
      categoriesData,
    },
  };
};
