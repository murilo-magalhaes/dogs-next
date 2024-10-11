import React from 'react';
import styles from './input.module.css';

type InputProps = React.ComponentProps<'input'> & {
  label: string;
  error?: string;
};

export default function Input(props: InputProps) {
  return (
    <div className={styles.wrapper}>
      <label className={styles.label} htmlFor={props.name}>
        {props.label}
      </label>
      <input className={styles.input} id={props.name} {...props} />
      {props.error && <p className={styles.error}>{props.error}</p>}
    </div>
  );
}
