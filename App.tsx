import React from 'react';
import DrawerNavigator from './src/navigation/DrawerNavigator';
import AppGradient from './src/components/AppGradient';

const App = () => {
  return (
    <AppGradient>
      <DrawerNavigator />
    </AppGradient>
  );
};

export default App;
