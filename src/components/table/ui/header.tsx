import RN from 'components/RN';
import {map} from 'lodash';
import React from 'react';
import {TableRow} from '.';
import {Box} from './Box';
import {BASE_PADDING, COLORS} from 'shared/lib';
import {styles} from './styles';

const WIDTH = BASE_PADDING * 8;
const HEIGHT = BASE_PADDING * 2;

export interface RowHeaderItem<Key> {
  title: string;
  onPress?: () => void;
  key: 'none' | Key;
}

export interface RowHeaderProps<Key> {
  data: RowHeaderItem<Key>[];
  activeFilter: Key;
}

export function Header<Key>({data = [], activeFilter}: RowHeaderProps<Key>) {
  return (
    <RN.View fd={'row'} jc={'space-between'}>
      {map(data, (row, key) => (
        <RN.TouchableOpacity
          key={key}
          style={[activeFilter === row.key && styles.activeFilter]}
          onPress={row.onPress}>
          <Box width={WIDTH} height={HEIGHT}>
            <TableRow
              children={row.title}
              color={
                activeFilter === row.key && styles.activeFilter
                  ? COLORS.whiteOne
                  : COLORS.black
              }
            />
          </Box>
        </RN.TouchableOpacity>
      ))}
    </RN.View>
  );
}
