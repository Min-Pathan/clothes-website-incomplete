import React, { useState } from "react";
import "./tab.css";
import Data from "./data";
import Items from "./Items";
import CategoryTabs from "./CategoryTabs";


const AllCatgValues = [...new Set(Data.map((curElem)=>curElem.category)), "all"]
console.log(AllCatgValues);

const GalleryReact = () => {

    const [item ,setItem] = useState(Data);
    const [categoryItems, setCategoryItems] = useState(AllCatgValues);

    const filterItem=(CatElem)=>
    {
      if(CatElem === "all")
      {
        setItem(Data);
        return;
      }
      const updatedItem = Data.filter((curElem)=>{
        return curElem.category===CatElem;
      })
      setItem(updatedItem);
    }
  return (
    <>
      <h1 className="mt-5 text-center main-heading">Best Collections</h1>
      <hr />
        <CategoryTabs filterItem={filterItem} categoryItems={categoryItems}/>
        <Items item={item}/>   
    </>
  );
};

export default GalleryReact;
