import React from "react";
import {
  StyleSheet,
  Dimensions,
  ScrollView,
  Image,
  ImageBackground,
  Platform
} from "react-native";
import { Block, Text, theme } from "galio-framework";
import { Images, materialTheme } from "../constants";
import { HeaderHeight } from "../constants/utils";
const util = require("util");
const { width, height } = Dimensions.get("screen");
const thumbMeasure = (width - 48 - 32) / 3;
import { Product } from "../components/";

export default class Profile extends React.Component {
  render() {
    const params = this.props.navigation.getParam("params", "NotFount");
    return (
      <Block flex style={styles.profile}>
        <Block flex>
          <ImageBackground
            source={{ uri: params.image }}
            style={styles.profileContainer}
            imageStyle={styles.profileImage}
          >
            <Block flex style={styles.profileDetails}>
              <Block style={styles.profileTexts}>
                <Text color="white" size={28} style={{ paddingBottom: 8 }}>
                  {params.title}
                </Text>
              </Block>
            </Block>
          </ImageBackground>
        </Block>
        <Block flex style={styles.options}>
          <ScrollView showsVerticalScrollIndicator={false}>
            <Block
              row
              space="between"
              style={{ marginTop: theme.SIZES.BASE, flexWrap: "wrap" }}
            >
              <Block style={styles.shadow}>
                <Product
                  product={Images.Activities[0]}
                  info={params.cafeterias}
                  horizontal
                  fromProfile={true}
                />
              </Block>
              <Block style={styles.shadow}>
                <Product
                  product={Images.Activities[1]}
                  info={params.hospedaje}
                  horizontal
                  fromProfile={true}
                />
              </Block>
              <Block style={styles.shadow}>
                <Product
                  product={Images.Activities[2]}
                  info={params.sitios}
                  horizontal
                  fromProfile={true}
                />
              </Block>
              <Block style={styles.shadow}>
                <Product
                  product={Images.Activities[3]}
                  info={params.actividades}
                  horizontal
                  fromProfile={true}
                />
              </Block>
            </Block>
          </ScrollView>
        </Block>
      </Block>
    );
  }
}

const styles = StyleSheet.create({
  albumThumb: {
    borderRadius: 4,
    marginVertical: 4,
    alignSelf: "center",
    width: thumbMeasure,
    height: thumbMeasure
  },
  profile: {
    marginTop: Platform.OS === "android" ? -HeaderHeight : 0,
    marginBottom: -HeaderHeight * 3
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
    marginTop: -theme.SIZES.BASE * 7,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    backgroundColor: theme.COLORS.WHITE,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 0 },
    shadowRadius: 8,
    shadowOpacity: 0.5,
    zIndex: 2
  },
  thumb: {
    borderRadius: 4,
    marginVertical: 4,
    alignSelf: "center",
    width: thumbMeasure,
    height: thumbMeasure
  },
  gradient: {
    zIndex: 1,
    left: 0,
    right: 0,
    bottom: 0,
    height: "30%",
    position: "absolute"
  },
  
});
