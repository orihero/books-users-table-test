import {
  StyleProp,
  TextStyle,
  TouchableOpacityProps,
  ViewStyle,
} from 'react-native';
import {COLORS} from 'shared/lib';

export interface ButtonProps
  extends Omit<TouchableOpacityProps, 'style' | 'children'> {
  disabled?: boolean;
  color?: keyof typeof COLORS;
  backgroundColor?: keyof typeof COLORS;
  text?: string;
  loading?: boolean;
  loadingText?: string;
  loadingIcon?: React.ReactNode;
  iconStyle?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
  style?: StyleProp<ViewStyle>;
}
