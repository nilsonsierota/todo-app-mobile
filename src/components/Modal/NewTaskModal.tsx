import {
  Modal,
  StyleSheet,
  View,
  SafeAreaView,
  Text,
  Image,
  TouchableOpacity,
  TextInput,
} from "react-native";
import { Theme } from "../../themes";
import { Button } from "../Buttons";

const closeImage = require("../../../assets/close.png");

type Props = {
  isVisible: boolean;
  OnClose: VoidFunction;
};

export function NewTaskModal({ isVisible, OnClose }: Props) {
  return (
    <Modal animationType="slide" visible={isVisible} transparent>
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.container}>
          <View style={styles.header}>
            <Text style={styles.headerText}>New Task</Text>
            <TouchableOpacity
              onPress={OnClose}
              hitSlop={{ top: 20, left: 20, right: 20, bottom: 20 }}
            >
              <Image
                source={closeImage}
                style={styles.closeImage}
                resizeMode="contain"
              />
            </TouchableOpacity>
          </View>
          <View style={styles.modalContext}>
            <TextInput
              style={styles.textInput}
              placeholder="Enter a task name here..."
              placeholderTextColor="rgba(0,0,0,0.5)"
            />
            <Button label="CREATE" />
          </View>
        </View>
      </SafeAreaView>
    </Modal>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.3)",
    alignItems: "center",
    justifyContent: "center",
  },
  container: {
    width: "80%",
    height: 200,
    backgroundColor: "white",
    borderRadius: 4,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 5 },
    shadowRadius: 10,
    shadowOpacity: 0.15,
  },
  header: {
    width: "100%",
    height: 50,
    backgroundColor: Theme.colors.primary,
    borderTopLeftRadius: 4,
    borderTopRightRadius: 4,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 20,
  },
  headerText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 18,
  },
  closeImage: {
    width: 14,
    height: 14,
  },
  textInput: {
    borderBottomWidth: 1,
    paddingVertical: 10,
    marginBottom: 20,
  },
  modalContext: {
    padding: 20,
  },
});
