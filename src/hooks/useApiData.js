import { useState, useEffect } from "react";

const useApiData = () => {
  const [data, setData] = useState([]);
  const [httpError, setHttpError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    (async () => {
      setIsLoading(true);
      try {
        const response = await fetch("https://eolt-ea153-default-rtdb.europe-west1.firebasedatabase.app/content.json");
        if (!response.ok){
            throw new Error("Semething went wrong with fetching the data")
        }
        const data = await response.json();
        
        let loadedContent = [];

        for(const key in data) {
            loadedContent.push({
                id: key,
                title: data[key].title,
                preview: data[key].preview,
                author: data[key].author,
                url: data[key].url
            })
        }
        setData(loadedContent);
        setIsLoading(false)
      } catch (error) {
        setIsLoading(false);
        setHttpError(error.message);
      }
    })();
    //call function right away
    //this allows me to use the lifecycle method inside of a functional component
  }, []);

  return { data, httpError, isLoading };
};

export default useApiData;
