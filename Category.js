import React from 'react';
import {Voew, Text, Image} from 'react-native'

class Category extends React.Component {
    render(){
    const{name,description}= this.props.category
    
        return(
            <View>
        <Text>{name}</Text>
        <Text>{description}</Text>
                </View>
        );
    }
}

export default Category;