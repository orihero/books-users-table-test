import RN from 'components/RN';
import React, {ReactNode} from 'react';
import {styles} from './styles';

type Props = {
  children: ReactNode;
  width?: number;
  height?: number;
};
export const Box = ({children, width, height}: Props) => {
  return (
    <RN.View w={width} h={height} style={styles.box}>
      {children}
    </RN.View>
  );
};
