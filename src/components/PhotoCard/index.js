import React, { Fragment, useEffect, useState, useRef } from "react";
import { Article, ImgWrapper, Img, Button } from "./styles";
import { MdFavoriteBorder } from "react-icons/md";

let DEFAULT_IMAGE =
  "https://res.cloudinary.com/midudev/image/upload/w_300/q_80/v1560262103/dogs.png";

export const PhotoCard = ({ id, likes = 0, src }) => {
  const element = useRef(null); //Captura la referencia del elemento en el DOM
  const [show, setShow] = useState(false);

  useEffect(
    function() {
      const observer = new window.IntersectionObserver(function(entries) {
        const { isIntersecting } = entries[0];
        if (isIntersecting) {
          console.log("si");
          setShow(true);
          observer.disconnect();
        }
      });
      observer.observe(element.current);
    },
    [element]
  );

  return (
    <Article ref={element}>
      {show && (
        <Fragment>
          <a href={`/detail/${id}`}>
            <ImgWrapper>
              <Img src={DEFAULT_IMAGE} />
            </ImgWrapper>
          </a>
          <Button>
            <MdFavoriteBorder size="32px" /> {likes} likes!
          </Button>
        </Fragment>
      )}
    </Article>
  );
};
