import React from "react";

function CategoryFilter({categories, handleCategoryChange, selectedCategory}) {


let categoriesList = categories.map((el, i) => {
  return <button key={i} className={selectedCategory === el ? "selected" : "" } onClick={() => handleCategoryChange(el)} >{el}</button>
})


  return (
    <div className="categories">
      <h5>{categories}</h5>
      {
        categoriesList
      }
    </div>
  );
}

export default CategoryFilter;
