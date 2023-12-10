import BaseInput from '@/components/ui/Input/Input.tsx';
import styles from './Main.module.scss';
import { MainProps } from '@/types/types.ts';

const Main = (props: MainProps) => {
  return (
    <div className={styles.wrapper}>
      <BaseInput value={props.character.name} name={'Имя'} />
      <BaseInput value={props.character.class} name={'Класс'} />
      <BaseInput value={props.character.race} name={'Раса'} />
      <BaseInput value={props.character.experience} name={'Опыт'} />
      <BaseInput value={props.character.level} name={'Уровень'} />
      <BaseInput value={props.character.speed} name={'Скорость'} />
      <div className={styles.shield}>
        <span className={styles.shieldTitle}>кд</span>
        <span className={styles.shieldValue}>{props.character.armour}</span>
      </div>
    </div>
  )
}

export default Main
