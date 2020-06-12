import React from 'react';

export interface ListProps{
  data: Array<string>;
}

export const List: React.FC<ListProps> = ({ data, ...props }) => {
  return (
    <ul>
      {data.map(item => ( <li key={item}>{item}</li>)) }
    </ul>
  );
}
