import RN from 'components/RN';
import {map} from 'lodash';
import React, {useCallback} from 'react';
import {BASE_PADDING, COLORS} from 'shared/lib';
import {TableRow} from '.';
import {Box} from './Box';
import {DeleteIcon, EditIcon} from 'shared/assets/icons';

const WIDTH = BASE_PADDING * 8;

interface BodyProps<T> {
  data: T[];
  onDelete?(id: number): void;
  onEdit?(id: number): void;
}

export function Body<T>({data = [], onDelete, onEdit}: BodyProps<T>) {
  const renderItem = useCallback(
    (_data = {}, _key: number) => {
      const id = 'id' in _data && (_data.id as number);
      return (
        <RN.View fd={'row'} jc={'space-between'} key={_key}>
          {map(_data, (row, key) => (
            <Box key={key} width={WIDTH}>
              <TableRow children={row} />
            </Box>
          ))}

          {/* edit, delete */}
          <Box width={WIDTH}>
            <RN.View fd={'row'} ai={'center'} g={10}>
              <RN.TouchableOpacity onPress={() => onEdit?.(id as number)}>
                <EditIcon width={20} height={20} fill={COLORS.error} />
              </RN.TouchableOpacity>
              <RN.TouchableOpacity onPress={() => onDelete?.(id as number)}>
                <DeleteIcon width={30} height={30} fill={COLORS.error} />
              </RN.TouchableOpacity>
            </RN.View>
          </Box>
        </RN.View>
      );
    },
    [onDelete, onEdit],
  );

  return <RN.View fd={'column'}>{map(data, renderItem)}</RN.View>;
}
