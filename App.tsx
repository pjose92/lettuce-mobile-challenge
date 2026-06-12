import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  Pressable,
} from 'react-native';
import {
  SafeAreaProvider,
  SafeAreaView,
} from 'react-native-safe-area-context';

import { useBlogs } from './src/hooks/useBlogs';
import { formatBlogDate, isNewBlog } from './src/utils/dateHelpers';

function AppContent() {
  const { blogs, isLoading, error } = useBlogs();

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

      <View style={styles.tabs}>
        <Pressable style={[styles.tab, styles.activeTab]}>
          <Text style={[styles.tabText, styles.activeTabText]}>
            All Articles
          </Text>
        </Pressable>

        <Pressable style={styles.tab}>
          <Text style={styles.tabText}>Openings</Text>
        </Pressable>

        <Pressable style={styles.tab}>
          <Text style={styles.tabText}>Guides</Text>
        </Pressable>
      </View>

      <FlatList
        data={blogs}
        keyExtractor={(item) => item.id.toString()}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.listContent}
        renderItem={({ item }) => (
          <Pressable style={styles.card}>
            <View>
              {!!item.image && (
                <Image
                  source={{ uri: item.image }}
                  style={styles.image}
                  resizeMode="cover"
                />
              )}

              {isNewBlog(item.date) && (
                <View style={styles.badge}>
                  <Text style={styles.badgeText}>NEW!</Text>
                </View>
              )}
            </View>

            <View style={styles.cardContent}>
              <Text style={styles.title} numberOfLines={3}>
                {item.title}
              </Text>

              <Text style={styles.date}>
                {formatBlogDate(item.date)}
              </Text>
            </View>
          </Pressable>
        )}
      />
    </SafeAreaView>
  );
}

export default function App() {
  return (
    <SafeAreaProvider>
      <AppContent />
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },

  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  header: {
    fontSize: 32,
    fontWeight: '700',
    paddingHorizontal: 24,
    paddingTop: 12,
    marginBottom: 24,
  },

  tabs: {
    flexDirection: 'row',
    paddingHorizontal: 24,
    borderBottomWidth: 1,
    borderBottomColor: '#E5E7EB',
    marginBottom: 24,
  },

  tab: {
    marginRight: 24,
    paddingBottom: 12,
  },

  activeTab: {
    borderBottomWidth: 3,
    borderBottomColor: '#1F7A3E',
  },

  tabText: {
    fontSize: 14,
    color: '#666',
  },

  activeTabText: {
    color: '#1F7A3E',
    fontWeight: '700',
  },

  listContent: {
    paddingHorizontal: 24,
    paddingBottom: 32,
  },

  card: {
    flexDirection: 'row',
    marginBottom: 24,
  },

  image: {
    width: 140,
    height: 90,
    borderRadius: 6,
    backgroundColor: '#E5E7EB',
  },

  badge: {
    position: 'absolute',
    top: 8,
    left: 8,
    backgroundColor: '#1F7A3E',
    borderRadius: 12,
    paddingHorizontal: 8,
    paddingVertical: 4,
  },

  badgeText: {
    color: '#FFF',
    fontSize: 11,
    fontWeight: '700',
  },

  cardContent: {
    flex: 1,
    marginLeft: 16,
    justifyContent: 'space-between',
  },

  title: {
    fontSize: 16,
    lineHeight: 22,
    fontWeight: '700',
    color: '#1F1F1F',
  },

  date: {
    fontSize: 13,
    color: '#6B7280',
    marginTop: 8,
  },
});