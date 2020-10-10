import React, { memo } from 'react';
import { Message, Table as SemTable, Image, Segment } from 'semantic-ui-react';

interface TableItem {
  cells: (React.ReactNode | string | number)[];
}

interface TableProps {
  headers: string[];
  items?: TableItem[];
  isLoading: boolean;
  error: string | null;
  children?: React.ReactNode;
}

const Table: React.FC<TableProps> = ({ headers, items, isLoading, error, children }) => {
  if (isLoading) {
    return (
      <Segment loading style={{ minHeight: 160 }}>
        <Image src="https://react.semantic-ui.com/images/wireframe/paragraph.png" />
      </Segment>
    );
  }

  return (
    <>
      {error && <Message error header="List error" content={error} />}
      <SemTable striped celled padded fixed>
        <SemTable.Header>
          <SemTable.Row>
            {headers.map((header) => (
              <SemTable.HeaderCell key={header}>{header}</SemTable.HeaderCell>
            ))}
          </SemTable.Row>
        </SemTable.Header>

        <SemTable.Body>
          {items?.map(({ cells }, itemId) => (
            <SemTable.Row key={`item-${itemId}`}>
              {cells.map((cell, cellId) => (
                <SemTable.Cell key={`${itemId}-cell-${cellId}`}>
                  {Array.isArray(cell) ? JSON.stringify(cell) : cell}
                </SemTable.Cell>
              ))}
            </SemTable.Row>
          ))}
          {children}
        </SemTable.Body>
      </SemTable>
    </>
  );
};

export default memo(Table);
