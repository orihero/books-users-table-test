import RN from 'components/RN';
import React from 'react';
import {styles} from './styles';
export const Title = ({children}: {children: string}) => (
  <RN.View style={styles.titleContainer} mb={3}>
    <RN.Text style={styles.title}>{children}</RN.Text>
  </RN.View>
);
