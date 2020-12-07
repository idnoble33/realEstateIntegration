import * as actionTypes from "./actionsTypes";
import axios from "axios";

export const getCommunityIdFromHome = () => {
  const request = axios.get(
    `https://a18fda49-215e-47d1-9dc6-c6136a04a33a.mock.pstmn.io/homes`
  );

  return (dispatch) => {
    request.then(({ data }) => {
      let homes = data;
      let result = [];
      let newHome = homes.reduce((res, value) => {
        //if object does not exist
        if (!res[value.type]) {
          //add it
          res[value.type] = {
            price: 0,
            type: value.type,
          };
        }
        result.push(value.type);
        res[value.type].price += value.price;
        return res;
      }, {});

      let occurences = {};

      result.forEach((occurRes) => {
        occurences[occurRes] = (occurences[occurRes] || 0) + 1;

        return occurences;
      });
      homes.map((h) => {
        h["totalPrices"] = newHome[h["type"]]["price"];
        h["occurences"] = occurences[h["type"]];

        return h;
      });
      axios
        .get(
          `https://a18fda49-215e-47d1-9dc6-c6136a04a33a.mock.pstmn.io/communities`
        )
        .then(({ data }) => {
          let home = homes.map((h) => {
            let community = data.find(
              (community) => community.id === h.communityId
            );
            h["communityData"] = community;

            return h;
          });
          let response = {
            occurences,
            home,
            community: data,
          };
          dispatch({
            type: actionTypes.GET_COMMUNITIES_ID_FROM_HOME,
            payload: response,
          });
        });
    });
  };
};
