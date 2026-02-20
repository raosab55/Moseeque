import LinearGradient from 'react-native-linear-gradient';

const AppGradient = ({children}: any) => (
  <LinearGradient
    colors={['#9013fe', '#1a237e']}
    start={{x: 0.7, y: 0.96}}
    end={{x: 0.3, y: 0.04}}
    style={{flex: 1}}>
    {children}
  </LinearGradient>
);

export default AppGradient;
