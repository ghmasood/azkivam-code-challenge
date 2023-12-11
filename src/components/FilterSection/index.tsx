import React, { useState } from "react";
import { useRouter } from "next/router";

import {
  ArrowRotateLeft,
  SearchNormal1,
  Stop,
  TickSquare,
} from "iconsax-react";

import styles from "./filterSection.module.scss";

import { ICategoriesRes, IMerchantRes } from "@/types";

interface IFilterSectionProps {
  merchants: IMerchantRes;
  categories: ICategoriesRes;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
}

function FilterSection({
  categories,
  merchants,
  setLoading,
}: IFilterSectionProps) {
  //ROUTER
  const router = useRouter();

  //VARIABLES
  const { merchantIds } = router.query;
  const merchantsArr =
    typeof merchantIds === "string"
      ? [merchantIds]
      : typeof merchantIds === "object"
      ? [...merchantIds]
      : [];

  //STATES
  const [localSearch, setLocalSearch] = useState("");
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div
      className={`${styles.filterWrapper} ${
        isOpen ? styles.open : styles.close
      }`}
    >
      <div>
        <h3 onClick={() => setIsOpen((prev) => !prev)}>فیلترها</h3>
        <ArrowRotateLeft
          onClick={() => {
            setLoading(true);

            if (router.isReady)
              router.replace({
                ...router,
                query: {
                  limit: 12,
                },
              });
          }}
        />
      </div>
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
                      router.replace({
                        ...router,
                        query: { ...router.query, catId: item.id },
                      });
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
                            key={i.id}
                            className={
                              Number(router?.query?.catId) === i.id
                                ? styles.isActive
                                : ""
                            }
                            onClick={() => {
                              setLoading(true);
                              router.replace({
                                ...router,
                                query: { ...router.query, catId: i.id },
                              });
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
        <div className={styles.inputWrapper}>
          <input
            placeholder="جستجوی فروشگاه"
            value={localSearch}
            onChange={(e) => setLocalSearch(e.target.value)}
          />
          <SearchNormal1 size={"1rem"} />
        </div>
        <div>
          {merchants.data
            .filter((i) => i.name.includes(localSearch))
            .map((item, _) => (
              <div
                key={item.id}
                onClick={() => {
                  if (merchantsArr.includes("" + item.id))
                    router.replace({
                      ...router,
                      query: {
                        ...router.query,
                        merchantIds: merchantsArr.filter(
                          (i) => i !== item.id + ""
                        ),
                      },
                    });
                  else
                    router.replace({
                      ...router,
                      query: {
                        ...router.query,
                        merchantIds: [...merchantsArr, item.id + ""],
                      },
                    });
                }}
              >
                {merchantsArr.includes("" + item.id) ? (
                  <TickSquare variant="Bold" className={styles.isActive} />
                ) : (
                  <Stop />
                )}
                <span
                  className={
                    merchantsArr.includes("" + item.id) ? styles.isActive : ""
                  }
                >
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
