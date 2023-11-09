import BaseInput from '@/components/ui/Input/Input.tsx';
import styles from './Main.module.scss';

const character = {
  name: 'Хеффин',
  class: 'Следопыт',
  race: 'Полурослик',
  experience: 3214,
  level: 3,
  speed: 25,
  armour: 14,
}

const Main = () => {
  return (
    <div className={styles.wrapper}>
      <BaseInput value={character.name} name={'Имя'} />
      <BaseInput value={character.class} name={'Класс'} />
      <BaseInput value={character.race} name={'Расса'} />
      <BaseInput value={character.experience} name={'Опыт'} />
      <BaseInput value={character.level} name={'Уровень'} />
      <BaseInput value={character.speed} name={'Скорость'} />
      <div className={styles.shield}>
        <span className={styles.shieldTitle}>кд</span>
        <span className={styles.shieldValue}>{character.armour}</span>
      </div>
    </div>
  )
}

export default Main
