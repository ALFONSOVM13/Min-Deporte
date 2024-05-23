import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  fieldQuestion: {
    fontSize: 13,
    marginTop: 10,
    color: 'black',
  },
  title: {
    fontSize: 14,
    marginBottom: 5,
    marginLeft: 3,
    fontWeight: 'bold',
    color: '#000',
  },
  fieldLabel: {
    fontSize: 16,
    color: '#000',
    marginLeft: 5,
  },
  fieldLabel2: {
    fontSize: 13,
    color: 'gray',
    paddingVertical: 2,
  },
  dateContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderWidth: 1,
    padding: 8,
    height: 40,
    width: '100%',
    borderColor: 'gray',
    backgroundColor: 'white',
    borderRadius: 5,
  },
  field: {
    fontSize: 14,
    color: 'black',
  },
  separator: {
    backgroundColor: 'lightgray',
    height: 1,
    marginTop: 10,
  },
  separatorback: {
    backgroundColor: 'lightgray',
    height: 1,
    marginTop: 10,
  },
  separatorbackGroup: {
    backgroundColor: 'lightgray',
    height: 2,
    marginTop: 10,
  },
  titleseparator: {
    fontSize: 16,
    marginTop: 10,
    color: 'black',
    backgroundColor: '#d9e1f2',
    paddingVertical: 5,
    fontWeight: 'bold',
  },
  fieldtrue: {
    padding: 8,
    height: 40,
    width: '100%',
    borderColor: '#E8EBF3',
    backgroundColor: '#F1F5FA',
    color: 'black',
    borderRadius: 1,
    borderWidth: 0.2,
  },
  fieldfalse: {
    padding: 8,
    height: 40,
    width: '100%',
    borderColor: 'gray',
    backgroundColor: 'white',
    color: 'black',
    borderRadius: 1,
    borderWidth: 0.2,
  },
  fieldfalse2: {
    borderWidth: 1,
    padding: 0,
    height: 40,
    width: '100%',
    borderColor: 'gray',
    backgroundColor: 'white',
    color: 'black',
    borderRadius: 5,
  },
  fielRadiobuttons: {
    flexDirection: 'row',
    alignItems: 'center',
    color: 'black',
  },
  text: {
    marginTop: 5,
    color: '#808080',
    fontSize: 13,
  },
});

export default styles;
