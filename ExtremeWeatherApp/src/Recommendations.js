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
      <Text style={styles.text}>&#x2022; {rec2}</Text>
      <Text style={styles.text}>&#x2022; {rec3}</Text>
    </View>
    );
  }
}

function getRecommendation(dangerLevel) {
  const level = Math.floor(dangerLevel/16.67);
  let randomindex = Math.floor(Math.random() 
                    * (recommendationText[level]).length);
  return recommendationText[level][randomindex];
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

const recommendationText = [
  // None
  [
    "Go for a nice walk through the safe environment",
    "Read outside",
    "Go for a bike ride",
    "Paint/draw something in nature",
    "Be thankful you are not in peril",
  ],

  // Slight
  [
    "Bring an umbrella",
    "Reevaluate your outfit",
    "Travel outside with friends. Safety in numbers.",
    "Go for a run",
    "Clean up your yard/house"
  ],

  // Moderate
  [
    "Play a board game. Inside.",
    "Play video games in a virtual, nicer outside",
    "Charge your phone in case the power goes out",
    "Watch a movie",
    "Be alert"
  ],

  // Considerable
  [
    "Consider purchasing life insurance",
    "Wear a helmet",
    "Stockpile food",
    "Watch information about weather and the precipitation on YouTube",
    "Take some extra money to be more prepared",
  ],

  // Severe
  [
    "Hide under bed",
    "Write a sad/anxious song about the weather",
    "Stand outside in the hazardous weather to build toughness",
    "Hug your family",
    "Reconsider your life goals and behaviors",
  ],

  // XTRM
  [
    "Run to bunker",
    "Cry",
    "End of the world party",
    "Fortify your house",
    "Quickly learn survival skills"
  ],
];