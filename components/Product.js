import React from "react";
import { withNavigation } from "react-navigation";
import {
  StyleSheet,
  Dimensions,
  Image,
  TouchableWithoutFeedback,
  ScrollView,
  ImageBackground
} from "react-native";
import { Block, Text, theme } from "galio-framework";

const { width } = Dimensions.get("screen");

class Product extends React.Component {
  render() {
    const {
      navigation,
      product,
      info,
      fromProfile,
      horizontal,
      full,
      style,
      imageStyle
    } = this.props;
    const imageStyles = [
      styles.image,
      full ? styles.fullImage : styles.horizontalImage,
      imageStyle
    ];
    const productList = (
      <Block
        row={horizontal}
        card
        flex
        style={[styles.product, styles.shadow, style]}
      >
        <TouchableWithoutFeedback
          onPress={() => navigation.navigate("Profile", { params: product })}
        >
          <Block flex space="between" style={styles.productDescription}>
            <Text size={18} style={styles.productTitle}>
              {product.title}
            </Text>
            <Text></Text>
          </Block>
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback
          onPress={() => navigation.navigate("Profile", { params: product })}
        >
          <Block flex style={[styles.imageContainer, styles.shadow]}>
            <Image source={{ uri: product.image }} style={imageStyles} />
            <Text></Text>
          </Block>
        </TouchableWithoutFeedback>
      </Block>
    );

    const productInfo = (
      <TouchableWithoutFeedback
        onPress={() => navigation.navigate("Info", { params: product })}
      >
        <Block flex style={styles.options}>
          <Block flex card shadow style={styles.category}>
            <ImageBackground
              source={{ uri: product.image }}
              style={[
                styles.imageBlock,
                { width: width - theme.SIZES.BASE * 16, height: 120 }
              ]}
              imageStyle={{
                width: width - theme.SIZES.BASE * 16,
                height: 120
              }}
            >
              <Block style={styles.categoryTitle}>
                <Text size={18} bold color={theme.COLORS.WHITE}>
                  {product.title}
                </Text>
              </Block>
            </ImageBackground>
          </Block>
        </Block>
      </TouchableWithoutFeedback>
    );
    return <Block>{fromProfile ? productInfo : productList}</Block>;
  }
}

export default withNavigation(Product);

const styles = StyleSheet.create({
  category: {
    backgroundColor: theme.COLORS.WHITE,
    marginVertical: theme.SIZES.BASE / 2,
    borderWidth: 0
  },
  categoryTitle: {
    height: "100%",
    paddingHorizontal: theme.SIZES.BASE,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    justifyContent: "center",
    alignItems: "center"
  },
  product: {
    backgroundColor: theme.COLORS.WHITE,
    marginVertical: theme.SIZES.BASE,
    borderWidth: 0,
    minHeight: 114
  },
  productTitle: {
    flex: 1,
    flexWrap: "wrap",
    paddingBottom: 6
  },
  productDescription: {
    padding: theme.SIZES.BASE / 2
  },
  imageContainer: {
    elevation: 1
  },
  image: {
    borderRadius: 3,
    marginHorizontal: theme.SIZES.BASE / 2,
    marginTop: -16
  },
  horizontalImage: {
    height: 122,
    width: "auto"
  },
  fullImage: {
    height: 215,
    width: width - theme.SIZES.BASE * 3
  },
  shadow: {
    shadowColor: theme.COLORS.BLACK,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    shadowOpacity: 0.1,
    elevation: 2
  }
});
