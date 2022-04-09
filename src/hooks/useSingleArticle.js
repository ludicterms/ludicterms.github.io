import { useEffect, useState } from "react";

import { getSingleArticle } from "../contentful";

export const useSingleArticle = (slug) => {
  const promise = getSingleArticle(slug);

  const [article, setArticle] = useState(null);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    promise
      .then((result) => {
        setArticle(result[0].fields);
        setLoading(false);
      })
      .catch((err) => {
        alert(err);
      });
  }, [promise]);

  return [article, isLoading];
};
