import RN from 'components/RN';
import React, {FC} from 'react';
import {PlusIcon} from 'shared/assets/icons';
import {BASE_PADDING, COLORS} from 'shared/lib';

type Props = {
  onPress?(): void;
};

const sizes = {
  width: 24,
  height: 24,
};

const AddButton: FC<Props> = ({onPress}) => {
  return (
    <RN.TouchableOpacity
      activeOpacity={0.5}
      onPress={onPress}
      style={styles.container}>
      <PlusIcon fill={COLORS.blue} {...sizes} />
    </RN.TouchableOpacity>
  );
};

const styles = RN.StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: BASE_PADDING * 3,
    right: BASE_PADDING * 2,
    zIndex: 1,
    borderWidth: 1,
    borderColor: COLORS.blue,
    padding: BASE_PADDING,
    borderRadius: BASE_PADDING * 0.5,
  },
});

export default AddButton;
