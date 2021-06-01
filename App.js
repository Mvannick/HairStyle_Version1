import React from 'react';

import MyStack from './navigation/stack'
import { SafeAreaProvider } from 'react-native-safe-area-context';

export default function App() {
  return (
    <SafeAreaProvider>
      <MyStack />
    </SafeAreaProvider>
  );
}
