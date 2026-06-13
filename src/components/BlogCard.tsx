import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import { Blog } from "../types/blog";
import { formatBlogDate, isNewBlog } from "../utils/dateHelpers";
import { NewBadge } from "./NewBadge";

interface BlogCardProps {
  blog: Blog;
  onPress?: () => void;
}

export function BlogCard({ blog, onPress }: BlogCardProps) {
  return (
    <Pressable style={styles.card} onPress={onPress}>
      <View>
        {!!blog.image && (
          <Image
            source={{ uri: blog.image }}
            style={styles.image}
            resizeMode="cover"
          />
        )}

        {isNewBlog(blog.date) && <NewBadge />}
      </View>

      <View style={styles.content}>
        <Text style={styles.title} numberOfLines={3}>
          {blog.title}
        </Text>

        <Text style={styles.date}>{formatBlogDate(blog.date)}</Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: "row",
    marginBottom: 24,
  },

  image: {
    width: 150,
    height: 100,
    borderRadius: 4,
    backgroundColor: "#E5E7EB",
  },

  content: {
    flex: 1,
    marginLeft: 16,
    paddingTop: 0,
  },

  title: {
    fontSize: 17,
    lineHeight: 22,
    fontWeight: "700",
    color: "#3A3036",
    marginBottom: 14,
  },

  date: {
    fontSize: 15,
    lineHeight: 22,
    fontWeight: "400",
    letterSpacing: -0.24,
    color: "#41424A",
  },
});
