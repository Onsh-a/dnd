import { Stats, AbilityScoresProps } from '@/types/types.ts';
import styles from './AbilityScores.module.scss';
import { calculateModificator } from '@/utils/utils.ts';

const AbilityScores = (props: AbilityScoresProps) => {

  const statsRender = () => {
    const stats = props.character.stats
    const statsMarkdown = []
    let stat: keyof Stats;
    for (stat in stats) {
      statsMarkdown.push(
        <div className={styles.item} key={stat}>
          <div className={styles.item__title}>
            {stat}
          </div>
          <div className={styles.item__modificator}>
            { calculateModificator(stats[stat]) }
          </div>
          <div className={styles.item__value}>
            {stats[stat]}
          </div>
        </div>
      );
    }
    return statsMarkdown;
  }

  return (
    <>
      <div className={styles.wrapper}>
        {statsRender()}
      </div>
    </>
  )
}

export default AbilityScores
