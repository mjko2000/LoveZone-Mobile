import React, {memo} from 'react';
import {TouchableWithoutFeedback, View, Text} from 'react-native';
import {ScaledSheet} from 'react-native-size-matters';
import colors from '../../../config/colors';

const Chip = ({value, style, onSelect, isActive, text}) => {
  return (
    <TouchableWithoutFeedback onPress={onSelect}>
      <View style={[styles.chip, isActive && styles.chipActive]}>
        <Text
          style={[
            styles.content,
            {color: isActive ? colors.primary : colors.white},
          ]}>
          {text}
        </Text>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = ScaledSheet.create({
  chip: {
    backgroundColor: colors.textField,
    height: '30@s',
    borderRadius: '15@s',
    flexDirection: 'row',
    alignItems: 'center',
    margin: '5@s',
    borderWidth: '1@s',
    borderColor: 'transparent',
  },
  chipActive: {
    borderColor: colors.primary,
  },
  content: {
    textAlign: 'center',
    marginHorizontal: '15@s',
  },
});
export default memo(Chip);
