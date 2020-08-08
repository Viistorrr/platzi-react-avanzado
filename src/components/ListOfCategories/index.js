import React, { Fragment, useState, useEffect } from "react";
import { Category } from "../Category";
import { List, Item } from "./styles";

export const ListOfCategories = () => {
  const [categories, setCategories] = useState([]); //se inicializa con [] porque se sabe que retorna la App
  const [showFixed, setShowFixed] = useState(false);

  const renderList = fixed => (
    <List className={fixed ? "fixed" : ""}>
      {categories.map(category => (
        <Item key={category.id}>
          <Category {...category} />
        </Item>
      ))}
    </List>
  );

  useEffect(function() {
    fetch("https://viistorrr-petgram.viistorrr.vercel.app/categories")
      .then(res => res.json())
      .then(response => {
        setCategories(response);
      });
  }, []); //Se debe solo cuando se monta el componente

  useEffect(function() {
    const onScroll = e => {
      const newShowFixed = window.scrollY > 200;
      showFixed !== newShowFixed && setShowFixed(newShowFixed);
    };
    document.addEventListener("scroll", onScroll);
    return () => document.removeEventListener("scroll", onScroll); //detener el listener del evento en  la ventana
  });
  return (
    <Fragment>
      {renderList()}
      {showFixed && renderList(true)}
    </Fragment>
  );
};
