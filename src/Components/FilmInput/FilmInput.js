import React, { Component } from "react";
import { View, TextInput, Button, Stylesheet } from "react-native";

export default class FilmInput extends Component {
  state = {
    filmName: ""
  };

  filmNameChangedHandler = text => {
    this.setState({
      filmName: text
    });
  };

  filmSubmitHandler = () => {
    if (this.state.filmName.trim() === "") {
      return;
    }
    this.props.addedFilm(this.state.filmName);
  };

  render() {
    return (
      <View style={styles.containerInput}>
        <TextInput
          style={styles.filmInput}
          onChangeText={this.filmNameChangedHandler}
          value={this.state.filmName}
          placeholder="Um filme Dahora!!!"
          placeholderTextColor="#4f574f"
        />
        <Button
          title="Add"
          style={styles.buttonAdd}
          color={"#057d05"}
          accessibilityLabel="Add"
          onPress={this.props.filmSubmitHandler}
        />
      </View>
    );
  }
}

const styles = Stylesheet.create({
  containerInput: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between"
  },
  filmInput: {
    height: 40,
    width: "80%",
    borderColor: "black",
    backgroundColor: "#222622",
    borderRadius: 10
  },
  buttonAdd: {
    alignItems: "center",
    borderRadius: 50
  }
});
