import { graphql } from "react-apollo";
import { gql } from "apollo-boost";
//HOC
//Componente de orden superior
//Se envia la info desde un componenete para renderizar en otro

export const withPhotos = graphql(gql`
  query getPhotos($categoryId: ID) {
    photos(categoryId: $categoryId) {
      id
      categoryId
      src
      likes
      userId
      liked
    }
  }
`);
