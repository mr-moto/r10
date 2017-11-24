import React from "react";
import { View } from "react-native";

import ConductItem from "./ConductItem";

const ConductList = ({ data }) => {
    return (
        <View>
            {data.map(conduct => (
                <ConductItem key={conduct.title} data={conduct} />
            ))}
        </View>
    );
};

export default ConductList;
