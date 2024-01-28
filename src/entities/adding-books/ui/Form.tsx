import {yupResolver} from '@hookform/resolvers/yup';
import RN from 'components/RN';
import {Button} from 'components/button';
import TextInput from 'components/text-input/TextInput';
import {observer} from 'mobx-react-lite';
import React, {FC, useMemo} from 'react';
import {Controller, useForm} from 'react-hook-form';
import {KeyboardAvoidingScrollView} from 'react-native-keyboard-avoiding-scroll-view';
import {SIZES} from 'shared/lib';
import {booksFormSchema} from 'shared/lib/form';
import {genRandomImg} from 'shared/lib/utils';
import {useBooksStore} from 'shared/store/books-store';

interface FormProps {
  onClose?(): void;
  bookID?: number;
}

export const Form: FC<FormProps> = observer(({onClose, bookID}) => {
  const {addNewBook, findOneItem, udateBook} = useBooksStore();
  const isEditBook = !!bookID;
  const book = useMemo(() => findOneItem(bookID!), [bookID, findOneItem]);

  const {handleSubmit, control, reset} = useForm({
    defaultValues: {
      title: book?.title ?? '',
      author: book?.author ?? '',
      publisher: book?.publisher ?? '',
      year: (book?.year ?? '') as string,
    },
    mode: 'all',
    reValidateMode: 'onBlur',
    resolver: yupResolver(booksFormSchema),
  });

  const actions = {
    onClose: () => {
      onClose?.();
      reset();
    },
    onSubmit: handleSubmit(async formData => {
      const data = {
        ...formData,
        image_url: await genRandomImg(),
      };
      // @ts-expect-error
      isEditBook ? udateBook(data, bookID) : addNewBook(data);
      actions.onClose();
    }),
  };

  return (
    <RN.View h={400}>
      <KeyboardAvoidingScrollView scrollEventThrottle={16}>
        <RN.View g={10}>
          <Controller
            control={control}
            name={'title'}
            render={({field: {value, onChange}, fieldState: {error}}) => (
              <TextInput
                value={value ?? ''}
                onChange={onChange}
                placeholder="Название"
                style={styles.input}
                error={error}
              />
            )}
          />
          <Controller
            control={control}
            name={'author'}
            render={({field: {value, onChange}, fieldState: {error}}) => (
              <TextInput
                value={value ?? ''}
                onChange={onChange}
                placeholder="Автор"
                style={styles.input}
                error={error}
              />
            )}
          />
          <Controller
            control={control}
            name={'publisher'}
            render={({field: {value, onChange}, fieldState: {error}}) => (
              <TextInput
                value={value ?? ''}
                onChange={onChange}
                placeholder="Издатель"
                style={styles.input}
                error={error}
              />
            )}
          />
          <Controller
            control={control}
            name={'year'}
            render={({field: {value, onChange}, fieldState: {error}}) => (
              <TextInput
                value={String(value) ?? ''}
                keyboardType="numeric"
                onChange={onChange}
                placeholder="Год"
                style={styles.input}
                error={error}
              />
            )}
          />
          <Button
            text={isEditBook ? 'Обновление книги' : 'Добавить книгу'}
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
});

const styles = RN.StyleSheet.create({
  input: {
    width: SIZES.width * 0.8,
  },
});
