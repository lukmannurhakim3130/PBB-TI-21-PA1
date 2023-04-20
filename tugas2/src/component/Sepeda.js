import React from 'react';
import { Text, View, Image } from 'react-native';

function Sepeda(){
    const city = "South West";
    const peoples = [{name:"lukman", fams:"Sister"},
                    {name:"nurhakim", fams:"Brother"},]


    return (
        <View style={{padding:10}}> 
            <Text>Saya Sepeda</Text>
            <TakeARide peoples={peoples} />
            {Place2Go(city)}
            <View>
                <Text>Sepeda Gunung</Text>
                <Image
                source={{
                    uri:"https://images.unsplash.com/photo-1534150034764-046bf225d3fa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8c2VwZWRhfGVufDB8fDB8fA%3D%3D&w=1000&q=80",
                }}
                style={{width:200, height:200}}
                />
            </View>
            
            <View>
                <Text>Sepeda Gunung</Text>
                <Image
                    source={require("../../assets/sepeda.png")}
                    style={{width:200, height:200}}
                />
            </View>

        </View>
         
        
    );
}

export default Sepeda;

const TakeARide = ({peoples}) => {
    return (
        <View>
            <Text>Let's go riding with us:</Text>
            {peoples.map((v,index)=>(
            
            <View key={index}>
                <Text>{v.name} / my {v.fams}</Text>
            </View>
        
        ))}
        </View>
    )
};

function Place2Go(Value) {
    return <Text>We'r going to {Value} now, come on.</Text>
}