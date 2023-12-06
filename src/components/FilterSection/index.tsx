import React from "react";

import { ICategoriesRes, IMerchantRes } from "@/types";

import styles from "./filterSection.module.scss";
import { ArrowDown, ArrowDown2 } from "iconsax-react";
import { useRouter } from "next/router";
interface IFilterSectionProps {
  merchants: IMerchantRes;
  categories: ICategoriesRes;
  loading: boolean;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
}
function FilterSection({
  categories,
  merchants,
  loading,
  setLoading,
}: IFilterSectionProps) {
  //ROUTER
  const router = useRouter();
  return (
    <div className={styles.filterWrapper}>
      <h3>فیلترها</h3>
      <div>
        <h4>دسته بندی‌ها</h4>
        <div className={styles.categoriesWrapper}>
          {categories?.data?.map(
            (item) =>
              item.parent === null && (
                <div key={item.id}>
                  <div
                    className={
                      Number(router?.query?.catId) === item.id ||
                      categories?.data?.find(
                        (x) => x?.id === +(router?.query?.catId ?? "0")
                      )?.parent === item.id
                        ? styles.isActive
                        : ""
                    }
                    onClick={() => {
                      setLoading(true);
                      router.replace(`/?catId=${item.id}`);
                    }}
                  >
                    {" "}
                    {item.name}
                    {/* <ArrowDown2 size={"1.5rem"} /> */}
                  </div>
                  <div>
                    {categories?.data?.map(
                      (i) =>
                        i.parent === item.id && (
                          <div
                            className={
                              Number(router?.query?.catId) === i.id
                                ? styles.isActive
                                : ""
                            }
                            onClick={() => {
                              setLoading(true);
                              router.replace(`/?catId=${i.id}`);
                            }}
                          >
                            {i.name}
                          </div>
                        )
                    )}
                  </div>
                </div>
              )
          )}
        </div>
      </div>
      <hr />
      <div>
        <h4>فروشگاه‌ها</h4>
      </div>
    </div>
  );
}

export default FilterSection;
