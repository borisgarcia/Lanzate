import React from "react";
import { StyleSheet, Dimensions, ScrollView } from "react-native";
import { Block, theme, Text } from "galio-framework";

const { width } = Dimensions.get("screen");

export default class Home extends React.Component {
  render() {
    return (
      <Block flex center style={styles.home}>
        <Text h1 style={{ marginBottom: theme.SIZES.BASE / 2 }}>
          Heading 1
        </Text>
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
