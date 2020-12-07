import React, { Component } from "react";
import Search from "../../components/Search/Search";
import { connect } from "react-redux";
import { getCommunityIdFromHome } from "../../store/actions";

import { seachingFor } from "./higherFunc/higherFunction.js";

import classes from "./Homes.module.css";

class Homes extends Component {
  state = {
    searchCommunity: "",
    price: {
      totalPrice: 0,
    },
  };

  componentDidMount() {
    const CIFH = this.props.dispatch(getCommunityIdFromHome());
    console.log(CIFH);
  }

  searchHandlerFilter = (event) => {
    this.setState({
      searchCommunity: event.target.value,
    });
  };

  renderHomes = (homes) =>
    homes && homes.home && homes.home instanceof Array
      ? homes.home
          .filter(seachingFor(this.state.searchCommunity))
          .map((home) => (
            <div key={home.id} className={classes.communityWrapper}>
              <div className={classes.communityItem}>
                {home.communityData ? (
                  <div className={classes.communityImg}>
                    <h3 className={home.communityDataName}>
                      <span>Home Name:</span> {home.communityData.name}
                    </h3>
                    <img
                      src={home.communityData.imgUrl}
                      alt="community_image"
                    />
                  </div>
                ) : null}

                <div className={classes.homeDataText}>
                  <div className={classes.homeWrappeText}>
                    <div className={classes.homePriceText}>
                      <span>Home total_Price - </span>
                      <span>
                        {Math.ceil(home.totalPrices / home.occurences)}
                      </span>
                    </div>
                    <div className={classes.homeType}>
                      <span>Home Type - </span>
                      <span>{home.type}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))
      : null;

  render() {
    const homes = this.props.homes;
    console.log("FROM GET HOMES", homes);

    return (
      <div className={classes.track}>
        <Search
          placeholder="Search by home type ..."
          searchHandler={this.searchHandlerFilter}
          value={this.state.searchCommunity}
        />

        {this.renderHomes(homes)}
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  //console.log("Homes Data", state);
  return {
    homes: state.homes,
  };
};

export default connect(mapStateToProps)(Homes);
