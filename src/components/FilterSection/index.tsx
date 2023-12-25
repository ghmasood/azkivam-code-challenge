import React, { useState } from 'react';
import { NextRouter, useRouter } from 'next/router';

import {
  ArrowRotateLeft,
  SearchNormal1,
  Stop,
  TickSquare,
} from 'iconsax-react';

import styles from './filterSection.module.scss';

import { ICategories, ICategoriesRes, IMerchantRes } from '@/types';

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
    typeof merchantIds === 'string'
      ? [merchantIds]
      : typeof merchantIds === 'object'
      ? [...merchantIds]
      : [];

  //STATES
  const [localSearch, setLocalSearch] = useState('');
  const [isOpen, setIsOpen] = useState(true);
  const rawData = categories.data;

  const getParentDeep = (
    arr: ICategories[],
    targetId: number | null
  ): ICategories | undefined =>
    arr.find(({ id }) => id === targetId) ??
    arr
      .flatMap(({ children }) => getParentDeep(children ?? [], targetId))
      .filter((e) => e)
      .at(0);

  const result = rawData
    .sort(({ id: a }, { id: b }) => a - b)
    .reduce((acc: ICategories[], data, index) => {
      const obj: ICategories = {
        ...data,
        children: [],
        depth: 0,
      };
      const parentObj = getParentDeep(acc, obj.parent);
      if (parentObj) parentObj?.children?.push(obj);
      else acc.push(obj);
      return acc;
    }, []);

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
        <div className={styles.categriesWrapper}>
          {result.map((item, index) => (
            <Item
              key={item.id}
              data={item}
              index={index}
              setLoading={setLoading}
              router={router}
            />
          ))}
        </div>
      </div>
      <hr />
      <div className={styles.merchantWrapper}>
        <h4>فروشگاه‌ها</h4>
        <div className={styles.inputWrapper}>
          <input
            placeholder='جستجوی فروشگاه'
            value={localSearch}
            onChange={(e) => setLocalSearch(e.target.value)}
          />
          <SearchNormal1 size={'1rem'} />
        </div>
        <div>
          {merchants.data
            .filter((i) => i.name.includes(localSearch))
            .map((item, _) => (
              <div
                key={item.id}
                onClick={() => {
                  if (merchantsArr.includes('' + item.id))
                    router.replace({
                      ...router,
                      query: {
                        ...router.query,
                        merchantIds: merchantsArr.filter(
                          (i) => i !== item.id + ''
                        ),
                      },
                    });
                  else
                    router.replace({
                      ...router,
                      query: {
                        ...router.query,
                        merchantIds: [...merchantsArr, item.id + ''],
                      },
                    });
                }}
              >
                {merchantsArr.includes('' + item.id) ? (
                  <TickSquare variant='Bold' className={styles.isActive} />
                ) : (
                  <Stop />
                )}
                <span
                  className={
                    merchantsArr.includes('' + item.id) ? styles.isActive : ''
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

export function Item({
  data,
  index,
  setLoading,
  router,
}: {
  data: ICategories;
  index: number;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
  router: NextRouter;
}) {
  return (
    <div>
      <div
        style={{ whiteSpace: 'pre-wrap' }}
        onClick={() => {
          setLoading(true);
          router.replace({
            ...router,
            query: { ...router.query, catId: data.id },
          });
        }}
      >
        {data.name}
      </div>

      {(data?.children?.length ?? 0) > 0 && (
        <div>
          {data?.children?.map((i, j) => (
            <Item
              key={i.id + 'a'}
              data={{ ...i, name: '-'.repeat(i.depth ?? 0) + i.name }}
              index={j}
              setLoading={setLoading}
              router={router}
            />
          ))}
        </div>
      )}
    </div>
  );
}
