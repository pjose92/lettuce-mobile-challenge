import { SafeAreaProvider } from "react-native-safe-area-context";
import BlogListScreen from "./src/screens/BlogListScreen";

export default function App() {
  return (
    <SafeAreaProvider>
      <BlogListScreen />
    </SafeAreaProvider>
  );
}
