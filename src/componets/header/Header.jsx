import "./Header.css"
import React, { useState } from 'react';
import { LuMapPin } from "react-icons/lu";
import { IoMenu } from "react-icons/io5";
import { PiMagnifyingGlass } from "react-icons/pi";
import { FaRegUser } from "react-icons/fa";
import { GiSelfLove } from "react-icons/gi";
import { RiShoppingCart2Line } from "react-icons/ri";

import img1 from "../../assets/imags/texnomart-logo.fcda25c.svg"



const Header = () => {

  const [language, setLanguage] = useState("RUS")
  return (
    <div className="container">

      <header>
        <div className="header_top">
          <div className="text_box">
            <p className="header_top_text"><LuMapPin />{language === "RUS" ? "Ташкент" : "Toshkent"}</p>
            <p className="header_top_text">{language === "RUS" ? "Наши магазины" : "Bizning do'konlarimiz"}</p>
            <p className="header_top_text">{language === "RUS" ? "Юридическим лицам" : "Yuridik shaxslar"}</p>
            <p className="header_top_text">{language === "RUS" ? "Покупка в рассрочку" : "Bo'lib-bo'lib sotib oling"}</p>
            <p className="header_top_text">{language === "RUS" ? "Способы оплаты" : "To'lov usullari"}</p>
          </div>
          <div className="header_languch">
            <a className="href" href="tel:+99871 209 99 44">
              {language === "RUS" ? "Контакт центр :+99871 209 99 44" : "To'lov usullari"}
            </a>

            <div className='language'>
              <div className='language_value'>{language}</div>

              <div className='language_setect'>
                <p onClick={() => setLanguage("RUS")}>RUS</p>
                <p onClick={() => setLanguage("UZB")}>UZB</p>
              </div>
            </div>
          </div>
        </div>
        <div className="header_left">
          <a href="#"><img src={img1} alt="" /></a>

          <button className="header_btn1">
            <IoMenu /> Каталог
          </button>

          <form className="form">
            <PiMagnifyingGlass  className="PiMagnifyingGlass"/>
            <input className="input" type="text" placeholder="Поиск товара" />

          </form>

          <div className="text_box1">
            <p className="header_text1"><FaRegUser />Вход</p>
            <p className="header_text1"><GiSelfLove />Избранное</p>
            <p className="header_text1"><RiShoppingCart2Line />Корзина</p>
          </div>
        </div>
        <div>

        </div>



      </header>

    </div>
  )
}

export default Header