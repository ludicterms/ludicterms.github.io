import { useEffect, useState } from "react";

import { getGeneralContent } from "../contentful";

const promise = getGeneralContent();

export const useGeneralContent = () => {
  const [generalContent, setGeneralContent] = useState([]);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    promise.then((generalContent) => {
      setGeneralContent(generalContent);
      setLoading(false);
    });
  }, []);

  return [generalContent, isLoading];
};
