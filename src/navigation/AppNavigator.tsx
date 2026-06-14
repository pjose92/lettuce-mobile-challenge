import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import BlogListScreen from '../screens/BlogListScreen';
import BlogDetailScreen from '../screens/BlogDetailScreen';
import { Blog } from '../types/blog';

export type RootStackParamList = {
  BlogList: undefined;
  BlogDetail: {
    blog: Blog;
  };
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="BlogList" component={BlogListScreen} />
        <Stack.Screen name="BlogDetail" component={BlogDetailScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}