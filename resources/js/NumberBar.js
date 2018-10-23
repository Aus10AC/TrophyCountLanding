import React, { Component } from 'react';
import { View } from 'react-native';

import NumberBar from './NumberBar';

class NumberBar extends Component {

    const days = // math for days
    const hours = // math for hours
    const minutes = // math for minutes
    const seconds = // math for seconds

    render() {
        <View>
            <NumberBox numberValue={days} title={"Days"} />
            <NumberBox numberValue={hours} title={"Hours"} />
            <NumberBox numberValue={minutes} title={"Minutes"} />
            <NumberBox numberValue={seconds} title={"Seconds"} />
        </View>
    }
}

export default NumberBar;
