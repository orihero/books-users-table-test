import RN from 'components/RN';
import {BASE_PADDING, COLORS} from 'shared/lib';

export const styles = RN.StyleSheet.create({
  title: {
    fontSize: 14,
    fontWeight: '400',
    color: COLORS.black,
    textAlign: 'center',
  },
  titleContainer: {
    borderWidth: 1,
    borderColor: COLORS.black,
    paddingVertical: (BASE_PADDING * 1) / 4,
    alignItems: 'center',
    borderBottomWidth: 0.5,
  },
  box: {
    borderWidth: 0.5,
    borderColor: COLORS.black,
    justifyContent: 'center',
    alignItems: 'center',
  },
  activeFilter: {
    backgroundColor: COLORS.blue,
  },
});
