import RN from 'components/RN';
import {has} from 'lodash';
import React, {FC, memo} from 'react';
import {FieldError} from 'react-hook-form';
import {
  TextInput as RNTextInput,
  StyleProp,
  TextInputProps,
  ViewStyle,
} from 'react-native';
import {COLORS} from 'shared/lib';
import {styles} from './TextInput.styles';

export type ITextInputProps = {
  right?: React.ReactNode;
  onChange?(val: string): void;
  error?: FieldError;
  inputRef?: React.RefObject<RNTextInput>;
  containerStyle?: StyleProp<ViewStyle>;
  bgColor?: string;
} & TextInputProps;

const TextInput: FC<ITextInputProps> = ({
  placeholder,
  right,
  onChange,
  error,
  inputRef,
  containerStyle,
  bgColor,
  style,
  ...resOfProps
}) => {
  return (
    <RN.View>
      <RN.View
        style={[
          styles.container,
          !!right && styles.pr0,
          !!error && styles.error,
          containerStyle,
          !!bgColor && {backgroundColor: bgColor},
        ]}>
        <RN.TextInput
          autoCapitalize="none"
          autoCorrect={false}
          placeholderTextColor={COLORS.gray}
          {...resOfProps}
          ref={inputRef}
          onChangeText={onChange}
          placeholder={placeholder}
          style={[styles.textInput, style]}
        />
        {!!right && <RN.View style={styles.rightItem}>{right}</RN.View>}
      </RN.View>

      {!!error && has(error, 'message') && (
        <RN.View pl={3}>
          <RN.Text color={COLORS.error}>{error.message}</RN.Text>
        </RN.View>
      )}
    </RN.View>
  );
};

export default memo(TextInput);
