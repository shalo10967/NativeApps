import { Dimensions } from "react-native";

const { height, width } = Dimensions.get('window');

export const deviceWidth = Dimensions.get("window").width;
export const deviceHeight =
    Platform.OS === "ios"
        ? Dimensions.get("window").height
        : require("react-native-extra-dimensions-android").get(
            "REAL_WINDOW_HEIGHT"
        );

export const w = percent => (width * percent) / 100;
export const h = percent => (height * percent) / 100;
export const totalSize = num => (Math.sqrt((height * height) + (width * width)) * num) / 100;
