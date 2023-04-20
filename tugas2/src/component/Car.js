import React, { Component } from 'react';
import { render } from 'react-dom';
import { Text, View} from 'react-native-web';

class Car extends Component {
    constructor(props){
        super(props);
        this.Come2Go = this.Come2Go.bind(this);
        this.state={
            Merek:"Toyota",
            types:{type:"Matic", model:"Calya ADS"}
        }

    }

Come2Go(Value){
    return(
        <View>
            <Text>Let's go running away from duty</Text>
            <Text>with us only {Value} IDR</Text>
        </View>
    )
}

render(){
    return(
        <View>
            <Text>Mobil Toyota Indonsia</Text>
            <Text>Merek : {this.state.Merek}</Text>
            <Text>Type : {this.state.types.type}</Text>
            <Text>Model : {this.state.types.model}</Text>
            {this.Come2Go(200000)}
        </View>
    )

}

}

export default Car;