import styles from './Input.module.scss';

export interface BaseInputProps {
  value: string | undefined | number,
  name: string,
  type?: 'text' | 'number'
}

const BaseInput = (props: BaseInputProps) => {
  return (
    <>
      <div className={styles.wrapper}>
        <label
          className={styles.label}
          htmlFor={props.name}
        >
          {props.name}
        </label>
        <input
          readOnly={true}
          className={styles.input}
          type={props.type ? props.type : 'text'}
          value={props.value}
          name={props.name}
          onInput={() => {}}
          id={'1'}
        />
      </div>
    </>
  )
}

export default BaseInput
