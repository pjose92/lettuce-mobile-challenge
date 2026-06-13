import { Pressable, StyleSheet, Text, View } from "react-native";
import { BlogTopic } from "../types/blog";

const TOPICS: BlogTopic[] = ["All Articles", "Openings", "Guides"];

interface FilterTabsProps {
  selectedTopic: BlogTopic;
  onSelectTopic: (topic: BlogTopic) => void;
}

export function FilterTabs({ selectedTopic, onSelectTopic }: FilterTabsProps) {
  return (
    <View style={styles.tabs}>
      {TOPICS.map((topic) => {
        const isActive = selectedTopic === topic;

        return (
          <Pressable
            key={topic}
            style={[styles.tab, isActive && styles.activeTab]}
            onPress={() => onSelectTopic(topic)}>
            <Text style={[styles.tabText, isActive && styles.activeTabText]}>
              {topic}
            </Text>
          </Pressable>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  tabs: {
    flexDirection: "row",

    borderBottomWidth: 1,
    borderBottomColor: "#EDEDEB",

    paddingHorizontal: 16,
    height: 29,

    marginBottom: 24,
  },

  tab: {
    marginRight: 24,
    paddingBottom: 7,
  },

  activeTab: {
    borderBottomWidth: 2,
    borderBottomColor: "#258834",
  },

  tabText: {
    fontSize: 15,
    fontWeight: "400",

    lineHeight: 22,
    letterSpacing: -0.24,

    color: "#194A23",
  },

  activeTabText: {
    fontWeight: "600",
    color: "#258834",
  },
});
