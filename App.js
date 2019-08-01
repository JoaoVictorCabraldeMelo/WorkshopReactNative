import React, { Component } from "react";
import { StyleSheet, View, TextInput, Button } from "react-native";
import ListItem from "./src/Components/ListItem/ListItem";
export default class App extends Component {
  state = {
    filmName: "",
    films: []
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
    this.setState(prevstate => {
      return {
        films: prevstate.films.concat(prevstate.filmName)
      };
    });
  };

  filmDelete = index => {
    const newState = this.state.films.filter(
      (value, indexItem) => indexItem !== index
    );
    this.setState({
      films: newState
    });
  };
  render() {
    const filmsOutput = this.state.films.map((film, i) => (
      <ListItem key={i} filmName={film} Clicando={() => this.filmDelete(i)} />
    ));
    return (
      <View style={styles.container}>
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
            onPress={this.filmSubmitHandler}
          />
        </View>
        <View style={styles.listContainer}>{filmsOutput}</View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#171A17",
    alignItems: "center",
    justifyContent: "flex-start"
  },
  listContainer: {
    flex: 1,
    width: "100%",
    justifyContent: "center"
  },
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
