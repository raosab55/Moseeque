import React, {useEffect} from 'react';
import DrawerNavigator from './src/navigation/DrawerNavigator';
import AppGradient from './src/components/AppGradient';
import {setupPlayer} from './src/services/musicPlayerService';

const App = () => {
  const setup = async () => {
    const isSetup = await setupPlayer();
    console.log('setup', isSetup);
  };
  console.log('setup');

  useEffect(() => {
    setup();
  }, []);

  return (
    <AppGradient>
      <DrawerNavigator />
    </AppGradient>
  );
};

export default App;
