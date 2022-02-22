import { React, Component } from 'react';
import { View, Text, StyleSheet, Alert } from 'react-native';

/* Recommendations class - no Props need to be provided*/
export default class Recommendations extends Component {
  render() {
    const rec1 = getRecommendation(this.props.dangerLevel);
    const rec2 = getRecommendation(this.props.dangerLevel);
    const rec3 = getRecommendation(this.props.dangerLevel);
    return (
    <View style={{backgroundColor: "#EA977B", borderRadius: 10}}>
      <Text style={styles.text}>&#x2022; {rec1}</Text>
      {/* <Text style={styles.text}>&#x2022; {rec2}</Text>
      <Text style={styles.text}>&#x2022; {rec3}</Text> */}
    </View>
    );
  }
}

function getRecommendation(dangerLevel) {
  const level = Math.floor(dangerLevel/16.67);
  let randomindex = Math.floor(Math.random() 
                    * (reccomendationText[level]).length);
  return reccomendationText[level][randomindex];
}

const styles = StyleSheet.create({
  text: {
    paddingVertical: "2%", 
    paddingHorizontal: "2%",
    fontSize: 20,
  },
});

// const reccomendationText = [
//   noneText, 
//   slightText, 
//   moderateText, 
//   considerableText, 
//   severeText, 
//   xtrmText
// ];
const reccomendationText = [

  [
    "aaaa",
    "a",
    "aaa"
  ],
  [
    "bbbbb",
    "b",
    "bbbbbbbbb"
  ],
  
  [
    "cc",
    "c",
    "ccc"
  ],
  
  [
    "xxx",
    "x",
    "xx"
  ],
  
  [
    "vv",
    "v",
    "vvv",
    "Hide under bed"
  ],
  
  [
    "dgfdggdf",
    "dfdsfsdfsd",
    "dfsdsfsdf",
    "Run to bunker",
  ],

];



// const noneText = [
//   "dgfdggdf",
//   "dfdsfsdfsd",
//   "dfsdsfsdf"
// ];

// const slightText = [
//   "dgfdggdf",
//   "dfdsfsdfsd",
//   "dfsdsfsdf"
// ];

// const moderateText = [
//   "dgfdggdf",
//   "dfdsfsdfsd",
//   "dfsdsfsdf"
// ];

// const considerableText = [
//   "dgfdggdf",
//   "dfdsfsdfsd",
//   "dfsdsfsdf"
// ];

// const severeText = [
//   "dgfdggdf",
//   "dfdsfsdfsd",
//   "dfsdsfsdf",
//   "Hide under bed"
// ];

// const xtrmText = [
//   "dgfdggdf",
//   "dfdsfsdfsd",
//   "dfsdsfsdf",
//   "Run to bunker",
// ];