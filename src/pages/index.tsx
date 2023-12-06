import { Vazirmatn } from "next/font/google";

import ProductList from "@/components/ProductList";
import FilterSection from "@/components/FilterSection";

import styles from "./homePage.module.scss";
import { GetServerSideProps, NextPage } from "next";
import {
  ICategoriesRes,
  IHomePageData,
  IMerchantRes,
  IProductRes,
} from "@/types";

const vazir = Vazirmatn({ subsets: ["arabic"] });

const Home: NextPage<IHomePageData> = (props) => {
  return (
    <main className={`${vazir.className} ${styles.mainPage}`}>
      <FilterSection
        merchants={props.merchantData}
        categories={props.categoriesData}
      />
      <ProductList data={props.productData} />
    </main>
  );
};

export default Home;

export const getServerSideProps: GetServerSideProps<IHomePageData> = async (
  ctx
) => {
  const {} = ctx.query;
  const baseURL = "https://interview-api.azkiloan.com/api/v1";

  //FETCH PRODUCT
  const productRes = await fetch(`${baseURL}/products?size=12&page=1`, {
    method: "POST",
  });
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
