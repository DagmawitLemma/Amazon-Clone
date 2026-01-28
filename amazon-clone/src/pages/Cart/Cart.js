import React, { useContext } from "react";
import Layout from "../../Components/LayOut/Layout";
import { DataContext } from "../../Components/DataProvider/DataProvider";
import ProductCard from "../../Components/Product/ProductCard";
import CurrencyFormat from "../../Components/CurrencyFormat/CurrencyFormat";
import { Link } from 'react-router-dom'
import Classes from "./Cart.module.css" 
import {Type} from '../../Utility/action.type'
import { IoIosArrowUp } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";

function Cart() {
  const [{basket, user}, dispatch] = useContext(DataContext)
  const total = basket.reduce((amount,item) => {
    return item.price*item.amount + amount
  },0)

  const increment = (item) => {
    dispatch({
      type:Type.ADD_TO_BASKET,
      item
    })
  }

  const decrement = (id) => {
    dispatch ({
      type:Type.REMOVE_FROM_BASKET,
      id
    })
  }


  return (
    <Layout>
      <section className={Classes.container}>
        <div className={Classes.cart_container}>
          <h2>Hello</h2>
          <h3>Your Shopping Basket</h3>
          <hr />
          {
            basket?.length==0?(<p>Opps ! No item in Your cart</p>):(
              basket?.map((item,i) => {
                return <section className={Classes.cart_product}>
                  <ProductCard 
                key={i}
                product={item}
                renderDesc={true}
                renderAdd={false}
                flex={true}
                />
                <div className={Classes.btn_container}>
                  <button className={Classes.btn} onClick={() => increment(item)}><IoIosArrowUp size={20}/></button>
                  <span>{item.amount}</span>
                  <button className={Classes.btn} onClick={() => decrement(item.id)}><IoIosArrowDown size={20} /></button>
                </div>

                </section> 
              })
            )
          }
        </div>

        {basket?.length !==0&&(
          <div className={Classes.subtotal}>
            <div>
              <p>subtotal ({basket?.length}item)</p>
              <CurrencyFormat amount={total} />
            </div>
            <span>
              <input type="checkbox" />
              <small>This order contains a gift</small>
            </span>
            <Link to="/payments">Continue to checkout</Link>
          </div>
        )}
      </section>
    </Layout>
  );
}

export default Cart;
