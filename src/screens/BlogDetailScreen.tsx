import { Image, Pressable, ScrollView, StyleSheet, Text, View, useWindowDimensions } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import RenderHTML from "react-native-render-html";

import { RootStackParamList } from "../navigation/AppNavigator";
import { formatBlogDate } from "../utils/dateHelpers";

type Props = NativeStackScreenProps<RootStackParamList, "BlogDetail">;

export default function BlogDetailScreen({ route, navigation }: Props) {
  const { blog } = route.params;
  const { width } = useWindowDimensions();

  return (
    <SafeAreaView style={styles.screen}>
      <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
        <View>
          {!!blog.image && (
            <Image source={{ uri: blog.image }} style={styles.heroImage} resizeMode="cover" />
          )}

          <Pressable style={styles.backButton} onPress={() => navigation.goBack()}>
            <Text style={styles.backText}>←</Text>
          </Pressable>
        </View>

        <View style={styles.content}>
          <Text style={styles.title}>{blog.title}</Text>
          <Text style={styles.date}>{formatBlogDate(blog.date)}</Text>

          {!!blog.tagline && <Text style={styles.tagline}>{blog.tagline}</Text>}

          <RenderHTML
            contentWidth={width - 40}
            source={{ html: blog.content }}
            baseStyle={styles.htmlBody}
            tagsStyles={{
              p: styles.paragraph,
              span: styles.paragraph,
              a: styles.link,
              strong: styles.strong,
              b: styles.strong,
              h2: styles.heading,
              img: styles.inlineImage,
              li: styles.listItem,
              ul: styles.list,
            }}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "#F2F2F2",
  },
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  heroImage: {
    width: "100%",
    height: 180,
    backgroundColor: "#EDEDEB",
  },
  backButton: {
    position: "absolute",
    top: 20,
    left: 20,
    width: 58,
    height: 58,
    borderRadius: 29,
    backgroundColor: "#FFFFFF",
    justifyContent: "center",
    alignItems: "center",
  },
  backText: {
    fontSize: 34,
    lineHeight: 38,
    color: "#3A3036",
  },
  content: {
    paddingHorizontal: 20,
    paddingTop: 24,
    paddingBottom: 40,
  },
  title: {
    fontSize: 28,
    lineHeight: 36,
    fontWeight: "700",
    color: "#3A3036",
    marginBottom: 8,
  },
  date: {
    fontSize: 17,
    lineHeight: 24,
    color: "#41424A",
    marginBottom: 28,
  },
  tagline: {
    fontSize: 20,
    lineHeight: 28,
    fontWeight: "600",
    color: "#3A3036",
    marginBottom: 20,
  },
  htmlBody: {
    color: "#3A3036",
    fontSize: 18,
    lineHeight: 26,
  },
  paragraph: {
    color: "#3A3036",
    fontSize: 18,
    lineHeight: 26,
    marginBottom: 16,
  },
  link: {
    color: "#258834",
    textDecorationLine: "none",
  },
  strong: {
    fontWeight: "700",
  },
  heading: {
    color: "#3A3036",
    fontSize: 24,
    lineHeight: 32,
    fontWeight: "700",
    marginTop: 24,
    marginBottom: 12,
  },
  inlineImage: {
    borderRadius: 4,
    marginTop: 12,
    marginBottom: 12,
  },
  list: {
    marginBottom: 16,
  },
  listItem: {
    color: "#3A3036",
    fontSize: 18,
    lineHeight: 26,
    marginBottom: 8,
  },
});