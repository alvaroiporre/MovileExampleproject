import {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import PrimaryButton from '../components/shared/PrimaryButton';

const HelloWorldScreen = () => {
  const [val, setVal] = useState(0);

  const handleSum = () => {
    setVal(v => v + 1);
  };
  const handleSubs = () => {
    setVal(v => v - 1);
  };
  return (
    <View style={styles.container}>
      <Text numberOfLines={2} ellipsizeMode="middle" style={styles.title}>
        Hello World : {val}
      </Text>
      <PrimaryButton label="+1" onPress={handleSum} />
      <PrimaryButton label="-1" onPress={handleSubs} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 45,
    textAlign: 'center',
    color: 'black',
    padding: 20,
  },
});

export default HelloWorldScreen;
