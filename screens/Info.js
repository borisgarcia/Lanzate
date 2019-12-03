import React from "react";
import {
  StyleSheet,
  Dimensions,
  ScrollView,
  ImageBackground,
  Platform,
  Image
} from "react-native";
import { Block, theme, Text } from "galio-framework";
import { HeaderHeight } from "../constants/utils";
import { products, materialTheme } from "../constants";
import { Select, Icon, Header, Product, Switch } from "../components/";

const { width, height } = Dimensions.get("screen");

export default class Home extends React.Component {
  render() {
    const params = this.props.navigation.getParam("params", "NotFount");
    const info = this.props.navigation.getParam("info", "NotFount");
    return (
      <Block flex style={styles.options}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Block
            row
            space="between"
            style={{ marginTop: theme.SIZES.BASE, flexWrap: "wrap" }}
          >
            {info.map((item, index) => (
              <Block key={index}>
                <Product
                  product={item}
                  fromInfo={true}
                  full
                  fromProfile={false}
                />
              </Block>
            ))}
          </Block>
        </ScrollView>
      </Block>
    );
  }
}

const styles = StyleSheet.create({
  image: {
    borderRadius: 3,
    marginHorizontal: theme.SIZES.BASE / 2,
    marginTop: -16
  },

  profile: {
    marginTop: Platform.OS === "android" ? -HeaderHeight : 0,
    marginBottom: -HeaderHeight * 3
  },
  fullImage: {
    height: 215,
    width: width - theme.SIZES.BASE * 3
  },
  profileImage: {
    width: width * 1.1,
    height: "auto"
  },
  profileContainer: {
    width: width,
    height: height / 2
  },
  profileDetails: {
    paddingTop: theme.SIZES.BASE * 4,
    justifyContent: "flex-end",
    position: "relative"
  },
  profileTexts: {
    paddingHorizontal: theme.SIZES.BASE * 2,
    paddingVertical: theme.SIZES.BASE * 2,
    zIndex: 2
  },
  pro: {
    backgroundColor: materialTheme.COLORS.LABEL,
    paddingHorizontal: 6,
    marginRight: theme.SIZES.BASE / 2,
    borderRadius: 4,
    height: 19,
    width: 38
  },
  seller: {
    marginRight: theme.SIZES.BASE / 2
  },
  options: {
    position: "relative",
    padding: theme.SIZES.BASE,
    marginHorizontal: theme.SIZES.BASE,
    marginTop: theme.SIZES.BASE,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    backgroundColor: theme.COLORS.WHITE,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 0 },
    shadowRadius: 8,
    shadowOpacity: 0.5,
    zIndex: 2
  },

  gradient: {
    zIndex: 1,
    left: 0,
    right: 0,
    bottom: 0,
    height: "30%",
    position: "absolute"
  },
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
