import RN from 'components/RN';
import useVisibility from 'hooks/useVisibility';
import React, {FC} from 'react';
import {FieldError} from 'react-hook-form';
import DatePicker from 'react-native-date-picker';
import {styles} from '../text-input/TextInput.styles';
import {has} from 'lodash';
import {COLORS} from 'shared/lib';
import {formatDate} from 'shared/lib/date';

interface DateInputProps {
  onChange(value: string): void;
  value: string;
  error?: FieldError;
  placeholder?: string;
}

export const DateInput: FC<DateInputProps> = ({
  onChange,
  value,
  error,
  placeholder,
}) => {
  const datePicker = useVisibility();
  return (
    <RN.TouchableOpacity activeOpacity={0.5} onPress={datePicker.show}>
      <RN.View>
        <RN.View style={[styles.container, !!error && styles.error]}>
          <RN.Text style={styles.textInput}>{value || placeholder}</RN.Text>
        </RN.View>
        {!!error && has(error, 'message') && (
          <RN.View pl={3}>
            <RN.Text color={COLORS.error}>{error.message}</RN.Text>
          </RN.View>
        )}

        <DatePicker
          locale="ru"
          title={null}
          mode={'date'}
          onConfirm={val => {
            onChange?.(formatDate(val));
            datePicker.hide();
          }}
          onCancel={() => datePicker.hide()}
          open={datePicker.visible}
          modal={true}
          confirmText={'Сохранить'}
          cancelText={'Отменить'}
          date={value ? new Date(value) : new Date()}
        />
      </RN.View>
    </RN.TouchableOpacity>
  );
};
