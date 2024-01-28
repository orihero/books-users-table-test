import React, {FC, useImperativeHandle, useState} from 'react';
import RN from 'components/RN';
import {AddingBooksForm} from 'entities/adding-books';
import ReactNativeModal from 'react-native-modal';
import useVisibility, {UseVisibility} from 'hooks/useVisibility';
import {BASE_PADDING, COLORS} from 'shared/lib';

interface Props {
  _ref?: React.RefObject<UseVisibility>;
}

export const AddingBooksModal: FC<Props> = ({_ref}) => {
  const modal = useVisibility();
  const [bookID, setBookID] = useState<number>();
  useImperativeHandle(
    _ref,
    () => ({
      ...modal,
      show: (id?: number) => {
        modal.show();
        setBookID(id);
      },
    }),
    [modal],
  );

  return (
    <RN.View>
      <ReactNativeModal
        isVisible={modal.visible}
        onSwipeComplete={modal.hide}
        onBackdropPress={modal.hide}
        onBackButtonPress={modal.hide}
        style={styles.wrap}>
        <RN.View style={styles.content}>
          <AddingBooksForm onClose={modal.hide} bookID={bookID} />
        </RN.View>
      </ReactNativeModal>
    </RN.View>
  );
};

const styles = RN.StyleSheet.create({
  wrap: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    backgroundColor: COLORS.whiteOne,
    paddingVertical: BASE_PADDING * 2,
    borderRadius: BASE_PADDING * 0.4,
    paddingHorizontal: BASE_PADDING,
  },
});
