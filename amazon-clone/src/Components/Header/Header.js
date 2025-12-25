import React from "react";
import { SlLocationPin } from "react-icons/sl";
import { BsSearch } from "react-icons/bs";
import { BiCart } from "react-icons/bi";
import LowerHeader from "./LowerHeader"
import Classes from "./Header.module.css"

function Header() {
  return (
    <>
      <section>
        <div className={Classes.header_container}>
          <div className={Classes.logo_container}>
            {/* logo section */}
            <a href="/">
              <img
                src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
                alt="amazon logo"
              />
            </a>

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
            <a href="#" className={Classes.language}>
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Flag_of_the_United_States_%28DDD-F-416E_specifications%29.svg/1280px-Flag_of_the_United_States_%28DDD-F-416E_specifications%29.svg.png"
                alt="flag"
              />
              <select name="" id="">
                <option value="">EN</option>
              </select>
            </a>
            <a href="#">
              <p>Sign In</p>
              <span>Account & Lists</span>
            </a>
            <a href="#">
              <p>returns</p>
              <span>& orders</span>
            </a>
            <a href="#" className={Classes.cart}>
              <BiCart size={35} />
              <span>0</span>
            </a>
          </div>
        </div>
      </section>
      <LowerHeader />
    </>
  );
}

export default Header;
