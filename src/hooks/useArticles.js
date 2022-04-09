import { useEffect, useState } from "react";

import { getArticles } from "../contentful";

const promise = getArticles();

export const useArticles = () => {
  const [articles, setArticles] = useState([]);
  const [isLoading, setLoading] = useState(true);
  useEffect(() => {
    promise
      .then((blogPosts) => {
        setArticles(blogPosts);
        setLoading(false);
      })
      .catch((err) => {
        alert(err);
      });
  }, []);

  return [articles, isLoading];
};
