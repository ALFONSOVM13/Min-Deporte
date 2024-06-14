import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome6';

const CustomButton = ({ name, onPress, color, styleList, textColor, icon, iconPosition, disabled }) => {
  const renderIcon = () => {
    return icon ? (
      <Icon name={icon} size={20} color={textColor} style={styles.icon} />
    ) : null;
  };

  const renderText = () => {
    return name ? (
      <Text style={[styles.buttonText, { color: textColor }]}>
        {name}
      </Text>
    ) : null;
  };

  return (
    <TouchableOpacity onPress={onPress} style={[styles.customButton, { ...styleList, backgroundColor: color }]} disabled={disabled}>
      {iconPosition === 'left' && renderIcon()}
      {renderText()}
      {iconPosition === 'right' && renderIcon()}
    </TouchableOpacity>
  );
};

const styles = {
  customButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    height: 40,
    marginTop: 5,
    backgroundColor: '#40916c',
    borderRadius: 5,
    margin: 10,
    padding: 10,
    gap: 10,
  },
  buttonText: {
    fontWeight: 'bold',
    textAlign: 'center',
  },
  icon: {
    marginLeft: 10,
  },
};

CustomButton.defaultProps = {
  name: 'Aceptar',
  onPress: () => {},
  color: '#40916c',
  textColor: '#fff',
  styleList: {},
  icon: null,
  iconPosition: 'left', 
  disabled: false, 
};

export default CustomButton;
