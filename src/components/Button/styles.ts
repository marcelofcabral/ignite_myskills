import {StyleSheet, ViewStyle, TextStyle} from 'react-native';

type Styles = {
  addButton: ViewStyle;
  deleteButton: ViewStyle;
  buttonText: TextStyle;
};
/*
export type ButtonStyleProps = {
  backgroundColor: string;
  padding: number;
  borderRadius: number;
  alignItems: string;
  marginTop: number;
};
*/
const styles = StyleSheet.create<Styles>({
  buttonText: {
    color: '#FFF',
    fontSize: 17,
    fontWeight: 'bold',
  },
  addButton: {
    backgroundColor: '#A370F7',
    padding: 15,
    borderRadius: 7,
    alignItems: 'center',
    marginTop: 20,
  },
  deleteButton: {
    padding: 15,
    borderRadius: 7,
    alignItems: 'center',
    marginTop: 20,
    backgroundColor: '#f04141',
  },
});

export default styles;
