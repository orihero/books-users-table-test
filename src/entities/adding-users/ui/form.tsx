import React, {FC, useMemo} from 'react';
import RN from 'components/RN';
import TextInput from 'components/text-input/TextInput';
import {Controller, useForm} from 'react-hook-form';
import {SIZES} from 'shared/lib';
import {yupResolver} from '@hookform/resolvers/yup';
import {usersFormSchema} from 'shared/lib/form';
import {DateInput} from 'components/date-picker';
import {Button} from 'components/button';
import {useUserStore} from 'shared/store/users-store';
import {KeyboardAvoidingScrollView} from 'react-native-keyboard-avoiding-scroll-view';

interface FormProps {
  onClose?(): void;
  userID?: number;
}

export const Form: FC<FormProps> = ({onClose, userID}) => {
  const {addNewUser, findOneItem, udateUser} = useUserStore();
  const isEditUser = !!userID;
  const user = useMemo(() => findOneItem(userID!), [userID, findOneItem]);

  const {handleSubmit, control, reset} = useForm({
    defaultValues: {
      firstName: user?.firstName ?? '',
      lastName: user?.lastName ?? '',
      middleName: user?.middleName ?? '',
      dob: user?.dob ?? '',
    },
    mode: 'all',
    reValidateMode: 'onBlur',
    resolver: yupResolver(usersFormSchema),
  });

  const actions = {
    onClose: () => {
      onClose?.();
      reset();
    },
    onSubmit: handleSubmit(async data => {
      // @ts-expect-error
      isEditUser ? udateUser(data, userID) : addNewUser(data);
      actions.onClose();
    }),
  };

  return (
    <RN.View h={400}>
      <KeyboardAvoidingScrollView scrollEventThrottle={16}>
        <RN.View g={10}>
          <Controller
            control={control}
            name={'firstName'}
            render={({field: {value, onChange}, fieldState: {error}}) => (
              <TextInput
                value={value ?? ''}
                onChange={onChange}
                placeholder="Имя"
                style={styles.input}
                error={error}
              />
            )}
          />
          <Controller
            control={control}
            name={'lastName'}
            render={({field: {value, onChange}, fieldState: {error}}) => (
              <TextInput
                value={value ?? ''}
                onChange={onChange}
                placeholder="Фамилия"
                style={styles.input}
                error={error}
              />
            )}
          />
          <Controller
            control={control}
            name={'middleName'}
            render={({field: {value, onChange}, fieldState: {error}}) => (
              <TextInput
                value={value ?? ''}
                onChange={onChange}
                placeholder="Отчество"
                style={styles.input}
                error={error}
              />
            )}
          />
          <Controller
            control={control}
            name={'dob'}
            render={({field: {value, onChange}, fieldState: {error}}) => (
              <DateInput
                value={value}
                onChange={onChange}
                placeholder="Дата рождения"
                error={error}
              />
            )}
          />

          <Button
            text={isEditUser ? 'Обновление автора' : ' Добавить автора'}
            backgroundColor="blackThree"
            color="whith"
            onPress={actions.onSubmit}
          />
          <Button
            text="Отмена"
            backgroundColor="error"
            color="whith"
            onPress={actions.onClose}
          />
        </RN.View>
      </KeyboardAvoidingScrollView>
    </RN.View>
  );
};

const styles = RN.StyleSheet.create({
  input: {
    width: SIZES.width * 0.8,
  },
});
