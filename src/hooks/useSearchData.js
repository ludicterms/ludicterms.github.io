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
            value.fields.mainTitle.toLowerCase().includes(searchTerm.toLowerCase()) ||
            value.fields.mainContent.toLowerCase().includes(searchTerm.toLowerCase())
          );
        });
        //then the filtered list (results) is set on the searchResults state by using the setSearchResults method
        setSearchResults(results);
      }
    })();
  }, [data, searchTerm, isHome]);

  return { searchResults, searchTerm, handleChange };
};

export default useSearchData;
