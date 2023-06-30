import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { incNumber, decNumber } from '../actions/index';
const Items = ({item}) => {
  const myState = useSelector((state)=> state.changeTheNumber);
  const dispatch = useDispatch();
  return (
    <>
         <div className="menu-items container fluid mt-5 ">
        <div className="row">
          <div className="col-md-12  mx-auto ">
            <div className="row my-2 sm-6 ">
                {
                    item.map((ele)=>{
                    const {id, image, name, price, description, category} = ele;
                    return(
                      <div className="item1 col-12 col-md-6 col-lg-6 col-xl-4 my-5 " key={id}>
                        <div className="row Item-inside">
                            {/* for img */}
                            <div className="col-12 col-md-12 col-lg-4 mt-4 img-div">
                                <img src={image} alt="Item" className="img-fluid"/>
                            </div>
                            {/* menu item description */}
                            <div className="col-12 col-md-12 col-lg-8 ">
                                <div className="main-title pt-4 pb-3">
                                    <h1>{name}</h1>
                                    <p>{description}</p>
                                </div>
                                <div className="menu-price-book">
                                    <div className="price-book-divide">
                                        <h2>Price : {price}</h2>
                                          <div className='col-xs-3 input-group input-group-sm'>
                                            <button title='Decrement' className="btn btn-primary btn-md" onClick={()=> dispatch(decNumber)}>-</button>
                                            <input className='quantity_input' type='text' name='quantity' value={myState}/>
                                            <button title='Increment' onClick={()=> dispatch(incNumber)} className="btn btn-primary btn-md">+</button>
                                          </div>                                        
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                    )
                })
                }                
            </div>
           </div>
        </div>
      </div>
    </>
  )
}

export default Items
