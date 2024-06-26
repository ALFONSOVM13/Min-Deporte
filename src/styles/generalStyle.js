import {Dimensions, StyleSheet} from 'react-native';
let {width, height} = Dimensions.get('window');

export const generalStyle = StyleSheet.create({
  overlay: {
    flex: 1,
    position: 'absolute',
    left: 0,
    top: 0,
    opacity: 0.5,
    backgroundColor: 'black',
    width: width,
    height: height,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
    marginTop: 7,
    marginHorizontal: 15,
    backgroundColor: '#F3F3F3',
    borderRadius: 7,
  },
  input: {
    borderRadius: 10,
    flex: 1,
    height: 50,
    borderColor: 'transparent',
    borderWidth: 1,
    paddingHorizontal: 10,
    color: '#000',
  },
  generalInputContent: {
    backgroundColor: '#F3F3F3',
    borderRadius: 7,
  },
  generalInputContainer: {
    marginBottom: 5,
    marginVertical: 5,
  },
  generalInputContainerDisabled: {
    backgroundColor: '#cdcdcd',
  },
  generalInput: {
    borderRadius: 10,
    height: 50,
    borderColor: 'transparent',
    borderWidth: 1,
    paddingHorizontal: 10,
    color: '#000',
  },
  generalInputTitle: {
    fontSize: 14,
    marginLeft: 3,
    fontWeight: 'bold',
    color: '#000',
    marginVertical: 5,
  },
  button: {
    backgroundColor: 'transparent',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    minWidth: 50,
    height: '100%',
  },
  addButton: {
    backgroundColor: 'transparent',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
    minWidth: 50,
  },
  propertyList: {
    flexDirection: 'column',
    gap: 10,
    paddingBottom: 0,
  },
  participantList: {
    flexDirection: 'column',
    gap: 10,
  },
  participantItem: {
    backgroundColor: '#fff',
    padding: 15,
    marginVertical: 8,
    borderRadius: 5,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 2,
  },
  participantName: {
    fontSize: 16,
    color: '#333',
    marginBottom: 5,
  },
  container: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    width: 'auto',
    alignContent: 'center',
    backgroundColor: '#fff',
    padding: 10,
    marginHorizontal: 16,
    borderRadius: 5,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
  },

  subContainer: {
    flexDirection: 'row',
    alignItems: 'stretch',
    justifyContent: 'space-between',
    // width: 'auto',
    flex: 1,
    width: '90%',
    backgroundColor: '#fff',
    marginHorizontal: 16,
    borderRadius: 5,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
  },
  containerPredio: {
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  propertyListItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#fff',
    padding: 10,
    marginHorizontal: 16,
    borderRadius: 5,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
  },
  participantListItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#fff',
    padding: 10,
    marginHorizontal: 16,
    borderRadius: 5,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
  },
  separator: {
    height: 1,
    width: '100%',
    backgroundColor: '#B5C0D0',
    margin: 2,
  },

  itemTitle: {
    fontSize: 14,
    color: '#000',
  },
  itemSubTitle: {
    fontSize: 17,
    fontWeight: '600',
    color: '#000',
  },
  title: {
    fontSize: 20,
    // fontWeight: "600",
    color: '#000',
  },
  itemActions: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 20,
    marginTop: 10,
  },

  participantItemTitle: {
    fontSize: 15,
    fontWeight: '600',
    color: '#000',
  },

  tabBar: {
    backgroundColor: '#181C32',
  },
  topTitleContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'baseline',
    gap: 5,
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  topTitleText: {
    fontSize: 25,
    fontWeight: '600',
    color: '#000',
  },
  customButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    height: 40,
    marginTop: 5,
    backgroundColor: '#40916c',
    color: '#fff',
    borderRadius: 5,
    margin: 10,
    padding: 5,
    gap: 10,
  },
  flexRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 10,
    marginVertical: 2,
  },
  primaryButton: {
    backgroundColor: 'darkblue',
    padding: 10,
    borderRadius: 5,
    marginHorizontal: 5,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  successButton: {
    backgroundColor: 'green',
    padding: 10,
    borderRadius: 5,
    marginHorizontal: 5,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  contentAttachmentDoc: {
    marginVertical: 10,
    flexDirection: 'row',
    alignContent: 'center',
    height: 100,
    borderStyle: 'dashed',
    borderColor: '#cdcdcd',
    borderWidth: 1,
    borderRadius: 7,
  },
  attachmentDocElement: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  attachmentDocText: {
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#000',
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    backgroundColor: 'white',
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    marginBottom: 100,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    backgroundColor: 'white',
  },
  activeCheckbox: {
    backgroundColor: '#000',
    width: 20,
    height: 20,
    padding: 10,
  },
  unActiveCheckbox: {
    backgroundColor: '',
    width: 20,
    height: 20,
    padding: 10,
  },
});
