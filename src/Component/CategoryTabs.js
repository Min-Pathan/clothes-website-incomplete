import React from 'react'

const CategoryTabs = ({filterItem, categoryItems}) => {
  return (
    <>
      <div className="menu-tabs container">
        <div className="menu-tab d-flex justify-content-around">
          {
            categoryItems.map((curElem, index)=>{
              return <button className="btn btn-warning" key={index} onClick={()=> filterItem(curElem)}>{curElem}</button>          
            })
          }                    
          {/* <button className="btn btn-warning" onClick={()=> setItem(Data)}>All</button> */}
        </div>
      </div>  
    </>
  )
}

export default CategoryTabs
