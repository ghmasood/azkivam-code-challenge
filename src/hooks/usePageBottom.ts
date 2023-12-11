import { useRouter } from "next/router";
import { useState, useEffect } from "react";

const usePageBottom = (haveAnyItem: boolean) => {
  const router = useRouter();
  useEffect(() => {
    const handleScroll = () => {
      const offsetHeight = document.documentElement.offsetHeight;
      const innerHeight = window.innerHeight;
      const scrollTop = document.documentElement.scrollTop;

      const hasReachedBottom = offsetHeight - (innerHeight + scrollTop) <= 5;

      if (hasReachedBottom && haveAnyItem)
        router.replace(
          {
            ...router,
            query: {
              ...router.query,
              limit: +(router.query.limit ?? 12) + 12,
            },
          },
          undefined,
          { scroll: false }
        );
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [router]);
};

export default usePageBottom;
