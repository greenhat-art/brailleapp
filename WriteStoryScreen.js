import React from 'react';
import { StyleSheet, Text, View ,FlatList,ScrollView, SafeAreaView} from 'react-native';
import {SearchBar} from 'react-native-elements';
import {Header} from 'react-native-elements';
import { TouchableOpacity } from 'react-native-gesture-handler';




export default function App (){
 const lessons=[
   {
    id:1 ,


    title: 'Instructions to use the app:  ',
    description: 'welcome to your first lesson. '
  
   },
   {
     id:2,
     title: 'treble clef and bass clef'
   },
   {
     id:3,
     title: 'lesson 3'
   },
   {
     id: 4,
     title: 'lesson 4'
  }
 ]
  
 const Item = ({ title, description}) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
    <Text style= {styles.description}>{description}</Text>
  </View>
);

  const renderItem = ({ item }) => (
    <Item title={item.title} />
  );


      return(
        <View style ={styles.container}>
           <Header 
                backgroundColor = {'black'}
                centerComponent = {{
                    text : 'Audio lessons',
                    style : { color: 'white', fontSize: 20}
                }}
            />
          <View styles ={{height:20,width:'100%'}}>
              <SearchBar
              placeholder="Type Here..."
              onChangeText={text => this.SearchFilterFunction(text)}
              onClear={text => this.SearchFilterFunction('')}
            />


          </View>
          
          <SafeAreaView style={styles.container}>
      <FlatList
      
        data={lessons}
        renderItem={renderItem}
        keyExtractor={item => item.id}
             
          
          
        
      />

      
    
          
    <TouchableOpacity
      style={styles.button}
      /*onPress={() => {
        this.props.navigation.navigate(URL);
      }}
      */
    >
      <Text style={{ color: "#ffff" }}>Play lesson</Text>
    </TouchableOpacity>
    </SafeAreaView>
        </View>  
      );      
    }



const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ff',
  },
  item: {
    backgroundColor: '#107896',
    padding:10,
    marginVertical: 8,
    marginHorizontal: 16,
  },

 button:{
  width: 100,
  height: 30,
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: "#107896",
  shadowColor: "#000",
  position: "relative",
  shadowOffset: {
    width: 0,
    height: 8,
  },
 },
  title: {
    flex: 1,
    fontSize: 16,
    fontStyle: 'Times',
    color: 'white',
    backgroundColor: '#107896'
  },
 
  itemContainer: {
    height: 80,
    width:'100%',
    borderWidth: 2,
    borderColor: 'gold',
    justifyContent:'center',
    alignSelf: 'center',
  }
});







/*import React, {Component} from 'react';
import { Text, Stylesheet, View, ScrollView, Dimensions, SafeAreaView } from 'react-native';
import { RotationGestureHandler, FlatList } from 'react-native-gesture-handler';
import Category from '../Category';

export default function app(){
  const categories=[
  {
    id: 100,
    name: 'Lesson transcripts',
    description: 'Please click to view lesson transcripts. This can be accessed by a screen reader'
},
{
    id: 101,
    name: 'Instructions',
    description: 'Instructions to use the app'
},
{
    id: 102,
    name: 'Helpful websites and other sources',
    description: 'Links to articles and ebooks that will help you in you rlearning journey!'
}
];

const App= ()=> {
  return (
    <SafeAreaView>
      <FlatList data = {categories} renderItem= {({item})=> (<Category category={item}/>)}></FlatList>
      </SafeAreaView>
  )
}

}
*/