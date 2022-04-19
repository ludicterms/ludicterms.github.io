import { useState, useEffect } from "react";

const useSearchData = (data, isHome, setIsActive) => {
  const [searchTerm, setSearchterm] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const handleChange = (event) => {
    if (isHome) {
      setIsActive(true);
    }
    setSearchterm(event.target.value);
  };

  useEffect(() => {
    (async () => {
      let results = [];
      //for Home page we have showAll=false but for Contents page we have showAll=true
      if (!searchTerm && isHome) {
        return;
      } else {
        results = await data.filter((value) => {
          return (
            //search for either character or actor/actress name
            value.fields.mainTitle
              .toLowerCase()
              .includes(searchTerm.toLowerCase()) ||
            value.fields.mainContent
              .toLowerCase()
              .includes(searchTerm.toLowerCase()) ||
            value.fields.keywords
              .toLowerCase()
              .includes(searchTerm.toLowerCase())
          );
        });
        const sortedresults = results.sort((a, b) => {
          const prioA = a.fields.mainTitle
            .toLowerCase()
            .includes(searchTerm.toLowerCase())
            ? 3
            : a.fields.keywords.toLowerCase().includes(searchTerm.toLowerCase())
            ? 2
            : 1;
          const prioB = b.fields.mainTitle
            .toLowerCase()
            .includes(searchTerm.toLowerCase())
            ? 3
            : b.fields.keywords.toLowerCase().includes(searchTerm.toLowerCase())
            ? 2
            : 1;
          if (prioA < prioB) return 1;
          if (prioA > prioB) return -1;
          return 0;
        });
        //then the filtered list (results) is set on the searchResults state by using the setSearchResults method
        setSearchResults(sortedresults);
      }
    })();
  }, [data, searchTerm, isHome]);

  return { searchResults, searchTerm, handleChange };
};

export default useSearchData;
