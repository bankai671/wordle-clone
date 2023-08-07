import styles from './VirtualKeyboard.module.less';

export const VirtualKeyboard = () => {
  const FIRST_ROW = [...'QWERTYUIOP'];
  const SECOND_ROW = [...'ASDFGHJKL'];
  const THIRD_ROW = ['Enter', ...'ZXCVBNM', 'Delete'];

  function handleKeyClick(key: string) {
    dispatchEvent(
      new KeyboardEvent('keydown', {
        key: key === 'Delete' ? 'Backspace' : key,
        view: window,
      })
    );
  }

  return (
    <div className={styles.keyboard}>
      <div className={styles.row}>
        {FIRST_ROW.map((key) => (
          <button
            className={styles.btn}
            key={key}
            onClick={() => handleKeyClick(key)}
          >
            {key}
          </button>
        ))}
      </div>
      <div className={styles.row}>
        {SECOND_ROW.map((key) => (
          <button
            className={styles.btn}
            key={key}
            onClick={() => handleKeyClick(key)}
          >
            {key}
          </button>
        ))}
      </div>
      <div className={styles.row}>
        {THIRD_ROW.map((key) => (
          <button
            className={styles.btn}
            key={key}
            onClick={() => handleKeyClick(key)}
          >
            {key}
          </button>
        ))}
      </div>
    </div>
  );
};
