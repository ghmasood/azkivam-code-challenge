import React from "react";

import { ICategoriesRes, IMerchantRes } from "@/types";

import styles from "./filterSection.module.scss";
interface IFilterSectionProps {
  merchants: IMerchantRes;
  categories: ICategoriesRes;
}
function FilterSection({ categories, merchants }: IFilterSectionProps) {
  return <div className={styles.filterWrapper}>FilterSection</div>;
}

export default FilterSection;
