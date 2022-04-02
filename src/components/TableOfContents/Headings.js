import React from "react";
import { Link } from "react-router-dom";

const Headings = ({ headings, activeId }) => (
    <ul>
      {headings.map((heading) => (
        <li key={`${heading.id}`} className={heading.id === activeId ? "active" : ""}>
          <Link
            to={`./#${heading.id}`}
            onClick={(e) => {
              e.preventDefault();
              document.getElementById(`${heading.id}`).scrollIntoView({
                behavior: "smooth",
              });
            }}
          >
            {heading.title}
          </Link>
          {heading.items.length > 0 && (
            <ul>
              {heading.items.map((child) => (
                <li
                  key={`${child.id}`}
                  className={child.id === activeId ? "active" : ""}
                >
                  <Link
                    to={`./#${child.id}`}
                    onClick={(e) => {
                      e.preventDefault();
                      document.getElementById(`${child.id}`).scrollIntoView({
                        behavior: "smooth",
                      });
                    }}
                  >
                    {child.title}
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </li>
      ))}
    </ul>
  );

  export default Headings;