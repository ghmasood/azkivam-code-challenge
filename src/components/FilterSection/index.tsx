import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";

import { SearchNormal1, Stop, TickSquare } from "iconsax-react";

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

  //STATES
  const [ids, setIds] = useState<number[]>([]);
  const [localSearch, setLocalSearch] = useState("");

  //LIFECYCLE HOOK
  useEffect(() => {
    setLoading(true);
    router.replace({ ...router, query: { ...router.query, merchants: ids } });
  }, [ids]);

  return (
    <div className={styles.filterWrapper}>
      <h3>فیلترها</h3>
      <div>
        <h4
          onClick={() => {
            setLoading(true);
            router.query.merchants
              ? router.replace({
                  ...router,
                  query: {
                    merchants: router.query.merchants,
                    limit: router.query.limit ?? 12,
                  },
                })
              : router.replace({
                  pathname: router.pathname,
                  query: { limit: router.query.limit ?? 12 },
                });
          }}
        >
          دسته بندی‌ها
        </h4>
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
