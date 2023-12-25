import React from "react";
import { useState } from "react";
import { NextPage, NextPageContext } from "next";
import { useRouter } from "next/router";

import styles from "./error.module.scss";
import { RefreshCircle } from "iconsax-react";
interface Props {
  statusCode?: number;
}

const Error: NextPage<Props> = ({ statusCode }) => {
  //ROUTER
  const router = useRouter();
  //STATES
  const [loading, setLoading] = useState(false);
  console.log(statusCode);
  return (
    <div className={styles.errorPage}>
      <p>{statusCode}</p>
      <div>
        {statusCode === 404
          ? "متاسفانه گم شده اید :("
          : "متاسفانه مشکلی رخ داده است :("}
      </div>
      <span
        onClick={() => {
          setLoading(true);
          router.replace("/?limit=12");
        }}
      >
        {loading ? (
          <RefreshCircle className="loading" size="2rem" />
        ) : (
          "بازگشت به خانه؟"
        )}
      </span>
    </div>
  );
};

Error.getInitialProps = ({ res, err }: NextPageContext) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
  return { statusCode };
};

export default Error;
