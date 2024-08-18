import React from "react";
import { useState } from "react";
import "./portfolio.css";
import Menu from "./Menu";
const Portfolio = () => {
  const [items, setItems] = useState(Menu);
  const filterItem = (categoryItem) => {
    const updatedItems = Menu.filter((elem) => {
      return elem.category === categoryItem;
    });
    setItems(updatedItems);
  };
  return (
    <section className="work container section" id="portfolio">
      <h2 className="section__title">Recent Works</h2>

      <div className="work__filters">
        <span className="work__item" onClick={() => setItems(Menu)}>
          All
        </span>
        <span className="work__item" onClick={() => filterItem("Fullstack")}>
          Fullstack app
        </span>
        <span className="work__item" onClick={() => filterItem("Clone")}>
          Clones
        </span>
      </div>
      <div className="work__container grid">
        {items.map((elem) => {
          const { id, image, title, category,link } = elem;
          return (
            <div className="work__card" key={id}>
              <div className="work__thumbnail">
                <img src={image} alt="" className="work__img" />
                <div className="work__mask"></div>
              </div>
              <span className="work__category">{category}</span>
              <h3 className="work__title">{title}</h3>
              <a href={link} className="work__button">
                <i className="icon-link work_button-icon"></i>
              </a>
              <a href="https://github.com/arihantcodes" className="work__button2">
              <i class="fa-brands fa-github"></i>   
              </a>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
