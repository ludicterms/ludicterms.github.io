import { useEffect, useState } from "react";

import { getSingleArticle } from "../contentful";

const promise = (slug) => getSingleArticle(slug);

export const useSingleArticle = (slug) => {
  const [article, setArticle] = useState(null);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    promise(slug)
      .then((result) => {
        setArticle(result[0].fields);
        setLoading(false);
      })
      .catch((err) => {
        alert(err);
      });
  }, [slug]);

  return [article, isLoading];
};
