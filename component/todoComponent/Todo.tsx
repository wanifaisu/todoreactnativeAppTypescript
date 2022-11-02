import React from "react";
import {
  Button,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import { useDispatch } from "react-redux";
import { addItem, removeItem, clearList } from "../redux/todoSlice";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
function Todo() {
  const dispatch = useDispatch();
  const list = useSelector((state: RootState) => state.todo);

  const [text, setText] = React.useState("");
  const onChangeText = (e: any) => {
    setText(e);
  };
  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (text.trim().length === 0) {
      return;
    }

    dispatch(addItem({ title: text }));
    setText("");
    console.log(text, "text");
  };
  const handleRemove = (item) => {
    console.log(item, "ghv");
    // e.stopPropagation();
    dispatch(removeItem({ id: item.id }));
  };
  const handleClear = () => {
    dispatch(clearList());
  };
  return (
    <SafeAreaView style={{ marginTop: 50 }}>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "center",
          backgroundColor: "gray",
          padding: 10,
          margin: 10,
        }}
      >
        <Text style={{ color: "white", fontWeight: "bold" }}>Add Todo</Text>
      </View>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <TextInput
          style={styles.input}
          onChangeText={onChangeText}
          value={text}
          placeholder="Enter Task Name"
        />
        <Pressable
          onPress={handleSubmit}
          style={{
            backgroundColor: "blue",
            height: 50,
            alignItems: "center",
            flexDirection: "row",
            padding: 5,
            borderRadius: 10,
          }}
        >
          <Text style={{ color: "white" }}>Add Task</Text>
        </Pressable>
      </View>
      {list.length !== 0 ? (
        <View>
          {list.map((item: any) => {
            return (
              <View
                key={item.id}
                style={{
                  flexDirection: "row",
                  justifyContent: "center",
                  margin: 5,
                }}
              >
                <Text
                  style={{
                    borderColor: "black",
                    borderWidth: 1,
                    width: 300,
                    padding: 5,
                  }}
                >
                  {item.title}
                </Text>
                <Pressable
                  onPress={() => handleRemove(item)}
                  style={{
                    backgroundColor: "red",
                    height: 35,
                    alignItems: "center",
                    flexDirection: "row",
                    padding: 5,
                  }}
                >
                  <Text style={{ color: "white" }}>Remove Task</Text>
                </Pressable>
              </View>
            );
          })}
          {list.length > 5 ? (
            <View
              style={{
                flexDirection: "row",
                justifyContent: "center",
                marginTop: 50,
              }}
            >
              <Pressable
                onPress={handleClear}
                style={{
                  backgroundColor: "red",
                  height: 35,
                  alignItems: "center",
                  flexDirection: "row",
                  padding: 5,
                  width: 200,
                  justifyContent: "center",
                }}
              >
                <Text style={{ color: "white" }}>Clear All</Text>
              </Pressable>
            </View>
          ) : null}
        </View>
      ) : (
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            marginTop: 100,
          }}
        >
          <Text style={{ color: "brown", fontSize: 40, fontWeight: "bold" }}>
            LIST IS EMPTY{" "}
          </Text>
        </View>
      )}
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  input: {
    padding: 10,
    margin: 10,
    width: 310,
  },
  view_Ist: {
    marginTop: 20,

    flexDirection: "row",
  },
});
export default Todo;
