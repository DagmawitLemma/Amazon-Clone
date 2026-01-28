import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { SlLocationPin } from "react-icons/sl";
import { BsSearch } from "react-icons/bs";
import { BiCart } from "react-icons/bi";
import LowerHeader from "./LowerHeader"
import Classes from "./Header.module.css"
import { DataContext } from "../DataProvider/DataProvider";

function Header() {
  const [{basket}, dispatch] = useContext(DataContext)
  const totalItem = basket?.reduce((amount,item) => {
    return item.amount + amount
  },0)
  return (
    <>
    <section className={Classes.fixed}>
      <section>
        <div className={Classes.header_container}>
          <div className={Classes.logo_container}>
            {/* logo section */}
            <Link to="/">
              <img
                src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
                alt="amazon logo"
              />
            </Link>

            <div className={Classes.delivery}>
              <span>
                <SlLocationPin />
              </span>
              <div>
                <p>Deliver to</p>
                <span>Ethiopia</span>
              </div>
            </div>
          </div>

          {/* search section */}

          <div className={Classes.search}>
            <select name="" id="">
              <option value="">All</option>
            </select>
            <input type="text" />
            <BsSearch size={25} />
          </div>

          {/* other section */}

          <div className={Classes.order_container}>
            <Link to="#" className={Classes.language}>
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Flag_of_the_United_States_%28DDD-F-416E_specifications%29.svg/1280px-Flag_of_the_United_States_%28DDD-F-416E_specifications%29.svg.png"
                alt="flag"
              />
              <select name="" id="">
                <option value="">EN</option>
              </select>
            </Link>
            <Link to="/auth">
              <p>Sign In</p>
              <span>Account & Lists</span>
            </Link>
            <Link to="/orders">
              <p>returns</p>
              <span>& orders</span>
            </Link>
            <Link to="/cart" className={Classes.cart}>
              <BiCart size={35} />
              <span>{totalItem}</span>
            </Link>
          </div>
        </div>
      </section>
      <LowerHeader />
    </section>
    </>
  );
}

export default Header;
