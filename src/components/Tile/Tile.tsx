import React, { FunctionComponent, useEffect } from 'react';

import styles from './Tile.module.less';

interface TileProps {
  char: string;
  validationClassName: string;
  isFinal: boolean;
}

export const Tile: FunctionComponent<TileProps> = ({
  char,
  validationClassName,
  isFinal,
}) => {
  const classNames = [
    styles.tile,
    char && !isFinal && styles.scaleTile,
    isFinal && styles.rotateTile,
    styles[validationClassName],
  ];

  return (
    <div
      className={classNames.join(' ')}
    >
      {char}
    </div>
  );
};
