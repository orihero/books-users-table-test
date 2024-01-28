import RN from 'components/RN';
import AddButton from 'components/add-button';
import Table from 'components/table';
import {AddingBooksModal} from 'features/adding-books';
import {UseVisibility} from 'hooks/useVisibility';
import {observer} from 'mobx-react-lite';
import React, {useCallback, useEffect, useRef} from 'react';
import {BASE_PADDING, COLORS} from 'shared/lib';
import {useBooksStore} from 'shared/store/books-store';

const AddingBooks = () => {
  const {getBooks, books, sortBooks, sortType, removeBook} = useBooksStore();
  const modalRef = useRef<UseVisibility>(null);

  const onShowModal = useCallback((id?: number) => {
    modalRef.current?.show(id);
  }, []);

  useEffect(() => {
    getBooks();
  }, [getBooks]);

  return (
    <RN.View style={styles.container}>
      <AddButton onPress={() => onShowModal(undefined)} />
      <Table
        title="Книги"
        data={books}
        activeFilterType={sortType}
        onDelete={id => removeBook(id)}
        onEdit={id => {
          onShowModal(id);
        }}
        rowData={[
          {
            key: 'id',
            title: 'id',
            onPress: () => sortBooks('id'),
          },
          {
            key: 'title',
            title: 'Название',
            onPress: () => sortBooks('title'),
          },
          {
            key: 'author',
            title: 'Автор',
            onPress: () => sortBooks('author'),
          },
          {
            key: 'publisher',
            title: 'Издатель',
            onPress: () => sortBooks('publisher'),
          },
          {
            key: 'year',
            title: 'Год',
            onPress: () => sortBooks('year'),
          },
          {
            key: 'image_url',
            title: 'Изображений',
          },
          {
            key: 'none',
            title: 'Параметры',
          },
        ]}
      />

      <AddingBooksModal _ref={modalRef} />
    </RN.View>
  );
};

const styles = RN.StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.whiteOne,
    paddingHorizontal: BASE_PADDING,
  },
});

export default observer(AddingBooks);
