import React, {useState, useEffect} from 'react';

const getNestedHeadings = (headingElements) => {
    const nestedHeadings = [];
  
    headingElements.forEach((heading, index) => {
      const { innerText: title, id } = heading;
  
      if (heading.nodeName === "H1") {
        nestedHeadings.push({ id, title, items: [] });
      } else if (heading.nodeName === "H2" && nestedHeadings.length > 0) {
        nestedHeadings[nestedHeadings.length - 1].items.push({
          id,
          title,
        });
      }
    });
  
    return nestedHeadings;
  };

const useHeadingsData = () => {
    const [nestedHeadings, setNestedHeadings] = useState([]);
  
    useEffect(() => {
      const headingElements = Array.from(
        document.querySelectorAll("h1, h2")
      );
  
      const newNestedHeadings = getNestedHeadings(headingElements);
      console.log("elephants: " + newNestedHeadings)
      setNestedHeadings(newNestedHeadings);
    }, []);
  
    return { nestedHeadings };
  };

 export default useHeadingsData; 