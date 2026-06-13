import { StyleSheet, Text, View } from "react-native";

export function NewBadge() {
  return (
    <View style={styles.badge}>
      <Text style={styles.text}>NEW!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  badge: {
    position: "absolute",
    top: 7,
    left: 4,

    width: 71,
    height: 30,

    backgroundColor: "#258834",

    borderRadius: 22,

    paddingTop: 4,
    paddingBottom: 4,
    paddingLeft: 16,
    paddingRight: 16,

    justifyContent: "center",
    alignItems: "center",
  },

  text: {
    color: "#FFFFFF",

    fontSize: 15,
    // fontWeight: "600",

    lineHeight: 22,

    letterSpacing: -0.24,

    textAlign: "center",
  },
});
