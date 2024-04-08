import {StyleSheet, Text, Pressable} from 'react-native';

interface props {
  label: string;
  onPress: () => void;
}

const PrimaryButton = ({label, onPress}: props) => {
  return (
    <Pressable
      style={({pressed}) => [styles.button, pressed && styles.buttonPressed]}
      onPress={() => onPress()}>
      <Text>{label}</Text>
    </Pressable>
  );
};
const styles = StyleSheet.create({
  button: {
    backgroundColor: '#2563eb',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 10,
  },
  buttonPressed: {
    backgroundColor: '#1e40af',
  },
});
export default PrimaryButton;
