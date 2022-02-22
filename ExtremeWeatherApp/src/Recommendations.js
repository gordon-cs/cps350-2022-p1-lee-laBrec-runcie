import { React, Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

/* Recommendations class - no Props need to be provided*/
export default class Recommendations extends Component {
  render() {
    const rec1 = getRecommendation(this.props.dangerLevel);
    const rec2 = getRecommendation(this.props.dangerLevel);
    const rec3 = getRecommendation(this.props.dangerLevel);
    return (
    <View style={{backgroundColor: "#EA977B", borderRadius: 10}}>
      <Text style={styles.header}>Recommended Activities Today</Text>
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
  header: {
    fontSize: 22,
    textAlign: "center",
    fontWeight: "700"
  }
});

const reccomendationText = [
  // None
  [
    "Go for a nice walk through the safe enviroment"
  ],

  // Slight
  [
    "Bring an umbrella"
  ],

  // Moderate
  [
    "Play a board game. Inside."
  ],

  // Considerable
  [
    "Consider purchasing life insurance"
  ],

  // Severe
  [
    "Hide under bed"
  ],

  // XTRM
  [
    "Run to bunker",
  ],
];