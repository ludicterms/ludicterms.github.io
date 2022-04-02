import React from "react";

const useIntersectionObserver = (setActiveId) => {
    const headingElementsRef = React.useRef({});
    React.useEffect(() => {
      const callback = (headings) => {
        headingElementsRef.current = headings.reduce((map, headingElement) => {
          map[headingElement.target.id] = headingElement;
          return map;
        }, headingElementsRef.current);
  
        // Get all headings that are currently visible on the page
        const visibleHeadings = [];
        Object.keys(headingElementsRef.current).forEach((key) => {
          const headingElement = headingElementsRef.current[key];
          if (headingElement.isIntersecting) visibleHeadings.push(headingElement);
        });
  
        const getIndexFromId = (id) =>
          headingElements.findIndex((heading) => heading.id === id);
  
        // If there is only one visible heading, this is our "active" heading
        if (visibleHeadings.length === 1) {
          setActiveId(visibleHeadings[0].target.id);
          // If there is more than one visible heading,
          // choose the one that is closest to the top of the page
        } else if (visibleHeadings.length > 1) {
          const sortedVisibleHeadings = visibleHeadings.sort(
            (a, b) => getIndexFromId(a.target.id) > getIndexFromId(b.target.id)
          );
  
          setActiveId(sortedVisibleHeadings[0].target.id);
        }
      };
  
      const observer = new IntersectionObserver(callback, { root: document.querySelector("iframe"), rootMargin: "500px" });
  
      const headingElements = Array.from(document.querySelectorAll("h1, h2"));
  
      headingElements.forEach((element) => observer.observe(element));
  
      return () => observer.disconnect();
    }, [setActiveId]);
  };

  export default useIntersectionObserver;