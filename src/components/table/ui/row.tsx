import RN from 'components/RN';
import React, {FC, useMemo} from 'react';
import {styles} from './styles';

interface Props {
  children: string;
  color?: string;
}
export const Row: FC<Props> = ({children, color}) => {
  const isImage = useMemo(() => /(https)/g.test(children), [children]);

  if (isImage) {
    return (
      <RN.View pv={5}>
        <RN.Image
          source={{uri: children}}
          height={100}
          width={100}
          borderRadius={4}
        />
      </RN.View>
    );
  }

  return (
    <RN.Text style={styles.title} color={color}>
      {children}
    </RN.Text>
  );
};
