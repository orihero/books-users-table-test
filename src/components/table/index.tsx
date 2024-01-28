import RN from 'components/RN';
import React from 'react';
import {TableBody, TableHeader, TableTitle} from './ui';
import {RowHeaderItem} from './ui/Header';

export interface TableProps<T> {
  title: string;
  data: T[];
  activeFilterType?: keyof T;
  rowData: RowHeaderItem<keyof T>[];
  onDelete?(id: number): void;
  onEdit?(id: number): void;
}

function Table<T>({
  title,
  data = [],
  rowData,
  onDelete,
  onEdit,
  activeFilterType,
}: TableProps<T>) {
  return (
    <RN.ScrollView nestedScrollEnabled showsVerticalScrollIndicator={false}>
      <RN.ScrollView horizontal>
        <RN.View>
          <TableTitle>{title}</TableTitle>
          <TableHeader data={rowData} activeFilter={activeFilterType} />
          <TableBody data={data} onDelete={onDelete} onEdit={onEdit} />
        </RN.View>
      </RN.ScrollView>
    </RN.ScrollView>
  );
}

export default Table;
