import React, { Component } from "react";
import { View, ScrollView } from "react-native";
import { Text, Icon, Header, Left, Right, Body } from "native-base";
import Helper from "./Helper";
import { data } from './data'


class Faq extends Component {
  static navigationOptions = {
    drawerIcon: () => <Icon name="information" style={{ color: "blue" }} />
  };

  makeHeader = () => {
    return (
      <Header style={{ backgroundColor: "white" }}>
        <Left>
          <Icon
            name="menu"
            onPress={() => this.props.screenProps.root.openDrawer()}
          />
        </Left>
        <Body>
          <Text style={{ fontSize: 18, fontWeight: "bold" }}>FAQ</Text>
        </Body>
        <Right />
      </Header>
    );
  };

  makeHelpers = () => {
    return data.map((item, index) => {
        return (
            <Helper
                question={item.question}
                answer={item.answer}
                key={index}
                index={index+1}
            />
        )
    }) 
  }

  render() {
    return (
        <View style={{ flex: 1 }}>
            {this.makeHeader()}
            <ScrollView style={{ flex: 1, backgroundColor: 'white' }}>
                {this.makeHelpers()}
            </ScrollView>
        </View>
        );
  }
}
export default Faq;
