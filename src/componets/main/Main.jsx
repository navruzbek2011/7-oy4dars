import "./Main.css"

import imags1 from "../../assets/imags/1.png"
import imags2 from "../../assets/imags/2.png"

import { TbShoppingCart } from "react-icons/tb";


const Main = () => {
  return (
    <div className="container">
      <div className="content">
        <div className="gret_box"><img className="telfon" src={imags1} alt="" />
          
          <p className="text_one">Смартфон TECNO Pova 4 LG7n 8GB/128GB (серый)</p>
          <p className="lorem">Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis qui vero unde fuga animi exercitationem dolor. Quam impedit harum nisi?</p>
          <button className="btn_tecno">
            <TbShoppingCart className="TbShoppingCart " />
          </button>
        </div>
        <div className="gret_box"><img className="telfon" src={imags1} alt="" />
          
          <p className="text_one">Смартфон TECNO Pova 4 LG7n 8GB/128GB (серый)</p>
          <p className="lorem">Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis qui vero unde fuga animi exercitationem dolor. Quam impedit harum nisi?</p>
          <button className="btn_tecno">
            <TbShoppingCart className="TbShoppingCart " />
          </button>
        </div>
        <div className="gret_box"><img className="telfon" src={imags1} alt="" />
         
          <p className="text_one">Смартфон TECNO Pova 4 LG7n 8GB/128GB (серый)</p>
          <p className="lorem">Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis qui vero unde fuga animi exercitationem dolor. Quam impedit harum nisi?</p>
          <button className="btn_tecno">
            <TbShoppingCart className="TbShoppingCart " />
          </button>
        </div>
        <div className="gret_box"><img className="telfon" src={imags1} alt="" />
          
          <p className="text_one">Смартфон TECNO Pova 4 LG7n 8GB/128GB (серый)</p>
          <p className="lorem">Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis qui vero unde fuga animi exercitationem dolor. Quam impedit harum nisi?</p>
          <button className="btn_tecno">
            <TbShoppingCart className="TbShoppingCart " />
          </button>
        </div>
      </div>
      <div className="content">
        <div className="gret_box">
          <img className="telvezor" src={imags2} alt="" />
          <p className="text_one">
            Настройка SMART TV
          </p>
          <p className="lorem">Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis qui vero unde fuga animi exercitationem dolor. Quam impedit harum nisi?</p>
          <button className="btn_tecno">
            <TbShoppingCart className="TbShoppingCart " />
          </button>
        </div>
        <div className="gret_box">
          <img className="telvezor" src={imags2} alt="" />
          <p className="text_one">
            Настройка SMART TV
          </p>
          <p className="lorem">Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis qui vero unde fuga animi exercitationem dolor. Quam impedit harum nisi?</p>
          <button className="btn_tecno">
            <TbShoppingCart className="TbShoppingCart " />
          </button>
        </div>
        <div className="gret_box">
          <img className="telvezor" src={imags2} alt="" />
          <p className="text_one">
            Настройка SMART TV
          </p>
          <p className="lorem">Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis qui vero unde fuga animi exercitationem dolor. Quam impedit harum nisi?</p>
          <button className="btn_tecno">
            <TbShoppingCart className="TbShoppingCart " />
          </button>
        </div>
        <div className="gret_box">
          <img className="telvezor" src={imags2} alt="" />
          <p className="text_one">
            Настройка SMART TV
          </p>
          <p className="lorem">Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis qui vero unde fuga animi exercitationem dolor. Quam impedit harum nisi?</p>
          <button className="btn_tecno">
            <TbShoppingCart className="TbShoppingCart " />
          </button>
        </div>
      </div>
    </div>
  )
}

export default Main