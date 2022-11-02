import { Text, View } from "react-native";
import { Provider } from "react-redux";
import { store } from "./component/redux/store";
import Todo from "./component/todoComponent/Todo";

export default function App() {
  return (
    <Provider store={store}>
      <View>
        <Todo />
      </View>
    </Provider>
  );
}
