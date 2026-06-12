import { useEffect, useState } from "react";

import { getSingleArticle } from "../contentful";

const promise = (slug) => getSingleArticle(slug);

export const useSingleArticle = (slug) => {
  const [article, setArticle] = useState(null);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    promise(slug)
      .then((result) => {
        setArticle(result.length > 0 ? result[0].fields : null);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setArticle(null);
        setLoading(false);
      });
  }, [slug]);

  return [article, isLoading];
};
