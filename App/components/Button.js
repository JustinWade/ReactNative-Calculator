import React from "react";
import { TouchableOpacity, StyleSheet, Text, Dimensions } from "react-native";

const screen = Dimensions.get("window");
const buttonWidth = screen.width / 4;

const styles = StyleSheet.create({
  text: {
    color: "#fff",
    fontSize: 30
  },
  textSecondary: {
    color: "blue"
  },
  textAccent: {
    color: "blue"
  },
  button: {
    backgroundColor: "#00008B",
    borderWidth: 2,
    borderColor: 'rgba(158, 150, 150, .5)',
    flex: 1,
    height: Math.floor(buttonWidth - 10),
    alignItems: "center",
    justifyContent: "center",
    borderRadius: Math.floor(buttonWidth),
    margin: 5
  },
  buttonDouble: {
    width: screen.width / 2 - 10,
    flex: 0,
    alignItems: "flex-start",
    paddingLeft: 40
  },
  buttonTall: {
    flex: 1,
    height: Math.floor(buttonWidth + 100),
    alignItems: "center",
    justifyContent: "center",
    borderRadius: Math.floor(buttonWidth),
    marginTop: -100,
    margin: 5
  },
  buttonSecondary: {
    borderWidth: 2,
    borderColor: 'yellow',
    color: "blue"
  },
  blankButton: {
    borderWidth: 0,
    borderColor: 'rgba(158, 150, 150, .5)',
    flex: 1,
    height: Math.floor(buttonWidth - 10),
    alignItems: "center",
    justifyContent: "center",
    borderRadius: Math.floor(buttonWidth),
    margin: 5
  },
  buttonAccent: {
    backgroundColor: "yellow",
    color: "blue"
    
  }
});

export default ({ onPress, text, size, theme }) => {
  const buttonStyles = [styles.button];
  const textStyles = [styles.text];

  if (size === "double") {
    buttonStyles.push(styles.buttonDouble);
  }

  if (size === "tall") {
    buttonStyles.push(styles.buttonTall);
  }

  if(theme === "blank"){
    buttonStyles.push(styles.blankButton);
  }

  if (theme === "secondary") {
    buttonStyles.push(styles.buttonSecondary);
    // textStyles.push(styles.textSecondary);
  } else if (theme === "accent") {
    buttonStyles.push(styles.buttonAccent);
    textStyles.push(styles.textAccent);
  }

  return (
    <TouchableOpacity onPress={onPress} style={buttonStyles}>
      <Text style={textStyles}>{text}</Text>
    </TouchableOpacity>
  );
};
