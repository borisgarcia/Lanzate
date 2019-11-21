import React from "react";
import { StyleSheet, Dimensions, ScrollView } from "react-native";
import {  Block, theme } from "galio-framework";

import { Product } from "../components/";

const { width } = Dimensions.get("screen");
import products from "../constants/products";

export default class Home extends React.Component {
  renderProducts = () => {
    return (
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.products}
      >
        <Block flex>
          <Product product={products[0]} full fromProfile={false}/>
          <Product product={products[1]} full fromProfile={false}/>
          <Product product={products[2]} full fromProfile={false}/>
          <Product product={products[3]} full fromProfile={false}/>
          <Product product={products[4]} full fromProfile={false}/>
          <Product product={products[5]} full fromProfile={false}/>
          <Product product={products[6]} full fromProfile={false}/>
        </Block>
      </ScrollView>
    );
  };

  render() {
    return (
      <Block flex center style={styles.home}>
        {this.renderProducts()}
      </Block>
    );
  }
}

const styles = StyleSheet.create({
  home: {
    width: width
  },

  header: {
    backgroundColor: theme.COLORS.WHITE,
    shadowColor: theme.COLORS.BLACK,
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowRadius: 8,
    shadowOpacity: 0.2,
    elevation: 4,
    zIndex: 2
  },
  products: {
    width: width - theme.SIZES.BASE * 2,
    paddingVertical: theme.SIZES.BASE * 2
  }
});
