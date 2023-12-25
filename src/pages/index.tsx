import React, { useEffect, useState } from "react";
import { GetServerSideProps, NextPage } from "next";
import { useRouter } from "next/router";

import { Vazirmatn } from "next/font/google";

import ProductList from "@/components/ProductList";
import FilterSection from "@/components/FilterSection";

import usePageBottom from "@/hooks/usePageBottom";

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

  //LIFECYCLEHOOK
  useEffect(() => {
    setLoading(false);
  }, [props]);

  //COSTUME HOOK
  usePageBottom(props.productData.totalItems > +(router.query.limit ?? 12));

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
  const baseURL = "https://interview-api.azkivam.com/api/v1";

  const { catId, merchantIds, limit } = ctx.query;

  //VARIABLES
  const merchantIdsArr =
    typeof merchantIds === "string"
      ? [merchantIds]
      : typeof merchantIds === "object"
      ? [...merchantIds]
      : [];
  const merchantIdsArrNumber = merchantIdsArr.map((i) => +i);

  //FETCH PRODUCT
  const productRes = await fetch(
    `${baseURL}/products/${catId ? catId : ""}?size=${limit ?? 12}&page=1`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ merchantIds: merchantIdsArrNumber }),
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
