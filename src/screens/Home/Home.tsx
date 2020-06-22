import React from "react";
import { View, Text, Button } from "react-native";
import { inject, observer } from "mobx-react";
import { _storeData } from "storage";
import RNLogo from "assets/img/rn_logo.svg";
import CalendarStrip from "react-native-calendar-strip";

@inject("counterStore")
@observer
export default class Home extends React.Component {
  constructor(props) {
    super(props);
    _storeData("test", "hello world");
  }

  render() {
    return (
      <View>
        <RNLogo width={200} height={200} />
        <Text>{this.props.counterStore.counter}</Text>
        <Button
          onPress={this.props.counterStore.incrementCount}
          title="Increment"
        />
        <Button
          title="Go to About"
          onPress={() => this.props.navigation.navigate("About")}
        />
        <CalendarStrip
          ref={"calendarStrip"}
          style={{ height: 90 }}
          scrollable={true}
          useIsoWeekday={true}
          //startingDate={new Date()}
          selectedDate={new Date()}
          onDateSelected={(date) => console.log("Selected date is: ", date)}
          updateWeek={true}
          markedDatesStyle={{ borderColor: "#000" }}
          daySelectionAnimation={{
            type: "background",
            highlightColor: "blue",
          }}
          highlightDateNameStyle={{
            color: "#fff",
          }}
          highlightDateNumberStyle={{ color: "#fff" }}
        />
      </View>
    );
  }
}
