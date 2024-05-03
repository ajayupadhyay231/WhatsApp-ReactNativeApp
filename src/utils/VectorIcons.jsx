import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import AntDesign from "react-native-vector-icons/AntDesign";
import Entypo from "react-native-vector-icons/Entypo";
import EvilIcons from "react-native-vector-icons/EvilIcons";
import Feather from "react-native-vector-icons/Feather";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import FontAwesome6 from "react-native-vector-icons/FontAwesome6";
import Fontisto from "react-native-vector-icons/Fontisto";
import Foundation from "react-native-vector-icons/Foundation";
import Ionicons from "react-native-vector-icons/Ionicons";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Octicons from "react-native-vector-icons/Octicons";
import Zocial from "react-native-vector-icons/Zocial";
import SimpleLineIcons from "react-native-vector-icons/SimpleLineIcons";

const VectorIcons = ({ type = "AntDesign", name = "xyz", size, color, style, onPress }) => {
    // Define a map of icon components
    const iconComponents = {
        AntDesign: AntDesign,
        Entypo: Entypo,
        EvilIcons: EvilIcons,
        Feather: Feather,
        FontAwesome: FontAwesome,
        FontAwesome5: FontAwesome5,
        FontAwesome6: FontAwesome6,
        Fontisto: Fontisto,
        Foundation: Foundation,
        Ionicons: Ionicons,
        MaterialIcons: MaterialIcons,
        MaterialCommunityIcons: MaterialCommunityIcons,
        Octicons: Octicons,
        Zocial: Zocial,
        SimpleLineIcons: SimpleLineIcons
    };

    // Get the appropriate icon component based on the type prop
    const IconComponent = iconComponents[type] || AntDesign;

    // Render the icon component with props
    return (
        <IconComponent
            name={name}
            size={size}
            color={color}
            style={style}
            onPress={onPress}
        />
    );
}

export default VectorIcons;

const styles = StyleSheet.create({});
