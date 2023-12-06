import React, { useState } from "react";

import { ICategoriesRes, IMerchantRes } from "@/types";

import styles from "./filterSection.module.scss";
import { useRouter } from "next/router";
import { Stop, TickSquare } from "iconsax-react";
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

  //STATES
  const [ids, setIds] = useState<number[]>([]);

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
      <div className={styles.merchantWrapper}>
        <h4>فروشگاه‌ها</h4>
        <div>
          {merchants.data.map((item, _) => (
            <div
              key={item.id}
              onClick={() => {
                if (ids.includes(item.id))
                  setIds((prev) => prev.filter((i) => i !== item.id));
                else setIds((prev) => [...prev, item.id]);
              }}
            >
              {ids.includes(item.id) ? (
                <TickSquare variant="Bold" className={styles.isActive} />
              ) : (
                <Stop />
              )}
              <span className={ids.includes(item.id) ? styles.isActive : ""}>
                {item.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default FilterSection;
