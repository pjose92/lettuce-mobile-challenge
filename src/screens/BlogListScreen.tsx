import { useMemo, useState } from "react";
import { FlatList, StyleSheet, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { BlogCard } from "../components/BlogCard";
import { FilterTabs } from "../components/FilterTabs";
import { useBlogs } from "../hooks/useBlogs";
import { BlogTopic } from "../types/blog";

export default function BlogListScreen() {
  const { blogs, isLoading, error } = useBlogs();
  const [selectedTopic, setSelectedTopic] = useState<BlogTopic>("All Articles");

  const filteredBlogs = useMemo(() => {
    if (selectedTopic === "All Articles") return blogs;

    return blogs.filter((blog) => blog.topics.includes(selectedTopic));
  }, [blogs, selectedTopic]);

  if (isLoading) {
    return (
      <SafeAreaView style={styles.center}>
        <Text>Loading blogs...</Text>
      </SafeAreaView>
    );
  }

  if (error) {
    return (
      <SafeAreaView style={styles.center}>
        <Text>{error}</Text>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>Newsfeed</Text>

      <FilterTabs
        selectedTopic={selectedTopic}
        onSelectTopic={setSelectedTopic}
      />

      <FlatList
        data={filteredBlogs}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <BlogCard blog={item} />}
        contentContainerStyle={styles.listContent}
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  header: {
    fontSize: 28,
    fontWeight: "700",

    lineHeight: 39.2, // 28 * 1.4 (140%)

    color: "#3A3036",

    marginLeft: 16,
    marginTop: 16,
    marginBottom: 24,
  },
  listContent: {
    paddingHorizontal: 24,
    paddingBottom: 32,
  },
});
