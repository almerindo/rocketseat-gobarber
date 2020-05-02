import React from 'react';
import {SafeAreaView, FlatList, View, Text, Modal, Button} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import Container from './components/container/Conteiner';

const App = (React.FC = () => {
  return (
    <>
      <SafeAreaView>
        <Container>
          <Text> ${Math.round(hp(2.1))} </Text>
          <Text> ${hp(2.1)} </Text>
        </Container>
      </SafeAreaView>
    </>
  );
});

export default App;
