import RN from 'components/RN';
import React from 'react';
import {ActivityIndicator, StyleSheet, View} from 'react-native';
import {COLORS} from 'shared/lib';
import {ButtonProps} from './button.types';

export const Button = ({
  style: propStyle,
  iconStyle,
  textStyle,
  text,
  loading,
  loadingIcon,
  color,
  backgroundColor,
  loadingText,
  ...props
}: ButtonProps) => {
  const textValue = loading ? loadingText : text;
  const onlyIndicator = !loadingText && loading;

  return (
    <RN.TouchableOpacity
      activeOpacity={0.5}
      {...props}
      style={[
        style.container,
        {
          backgroundColor: COLORS[backgroundColor!],
          borderColor: COLORS[backgroundColor!],
        },
        propStyle,
      ]}>
      <View>
        {loading && (
          <View style={style.inner}>
            <View style={iconStyle}>
              {loadingIcon ?? <ActivityIndicator color={COLORS[color!]} />}
            </View>
          </View>
        )}
        {!onlyIndicator && (
          <RN.Text
            style={[
              style.inner,
              {
                color: COLORS[color!],
              },
              textStyle,
            ]}>
            {textValue}
          </RN.Text>
        )}
      </View>
    </RN.TouchableOpacity>
  );
};

const style = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderRadius: 8,
  },
  text: {
    fontSize: 16,
    fontWeight: '500',
  },
  inner: {
    textAlign: 'center',
    paddingTop: 15,
    paddingBottom: 13,
  },
});
