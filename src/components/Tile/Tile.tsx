import { FunctionComponent } from 'react';

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
  ].join(' ');

  return <div className={classNames}>{char}</div>;
};
