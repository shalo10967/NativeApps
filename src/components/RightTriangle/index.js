import React from "react";
import { Svg, Path, Marker, G, TSpan, Circle, Rect, Text } from 'react-native-svg';
import {
    View,
    Image
} from "react-native";
const lineas = require('@assets/icons/lineas.png');
const RightTriangle = ({ width = 0, height = 0, fill = "black" } = {}) => {
    return (
        // <Svg width={width} height={height} style={{

        // }}>
        //     <Path
        //         fill={fill}
        //         filter={"drop-shadow(-2px -1px 1px black)"}
        //         d={`M 0 0 L ${width} ${height} L ${width} ${width} L ${height} 0`}
        //     />
        // </Svg>
        <Image source={lineas} resizeMode="contain" style={{
            width: "100%",
        }} />
    );
};

export default RightTriangle;