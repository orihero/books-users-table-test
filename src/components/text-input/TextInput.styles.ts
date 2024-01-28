import RN from 'components/RN';
import {COLORS} from 'shared/lib';

export const styles = RN.StyleSheet.create({
  container: {
    backgroundColor: COLORS.whiteOne,
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderRadius: 13,
    borderWidth: 1,
    borderColor: COLORS.gray2,
    height: 55,
  },
  error: {
    borderColor: COLORS.error,
  },
  pr0: {
    paddingRight: 0,
  },
  textInput: {
    fontSize: 16,
    color: COLORS.black,
    fontFamily: 'Kanit_400Regular',
    flexGrow: 1,
    padding: 15,
  },
  rightItem: {
    width: 40,
    justifyContent: 'center',
    alignItems: 'center',
    opacity: 0.6,
  },
});
