import React, { useState } from "react";

const CategoryContex = React.createContext({
  category: "search",
  changeCategory: (selected) => {},
});

export function CategoryProvider({ children }) {
  const [currentCategory, setCurrentCategory] = useState("search");

  console.log(currentCategory)

  return (
    <CategoryContex.Provider
      value={{ category: currentCategory, changeCategory: setCurrentCategory }}
    >
      {children}
    </CategoryContex.Provider>
  );
}

export default CategoryContex;
