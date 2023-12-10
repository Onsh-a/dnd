import { CAccordion, CAccordionItem, CAccordionHeader, CAccordionBody } from '@coreui/react';
import styles from './Spells.module.scss';
import { spells } from '@/data/spells.ts';
import { useMemo } from 'react';
import { SpellsProps } from '@/types/types.ts';

const Spells = (props: SpellsProps) => {
  const knownSpellsAdapted = useMemo(() => {
    const knownSpells = spells.filter(spell => props.character.knownSpellsIds.includes(spell.id))
    return [
      { level: '1 уровень ячейки', spells: knownSpells.filter(spell => spell.level === '1') },
      { level: '2 уровень ячейки', spells: knownSpells.filter(spell => spell.level === '2') },
      { level: '3 уровень ячейки', spells: knownSpells.filter(spell => spell.level === '3') },
      { level: '4 уровень ячейки', spells: knownSpells.filter(spell => spell.level === '4') },
    ]
  }, [props.character.knownSpellsIds, spells]);

  return (
    <>
      {
        knownSpellsAdapted.map(level => {
          if (level.spells.length > 0) {
            return <div>
              <h3 className={styles.level}>{ level.level }</h3>
              <CAccordion activeItemKey={undefined} className={styles.accordion}>
                { level.spells.map(spell => {
                  return <CAccordionItem itemKey={ spell.id } key={ spell.id }>
                    <CAccordionHeader>{ spell.name }</CAccordionHeader>
                    <CAccordionBody className={styles.description}>
                      { spell.description }
                    </CAccordionBody>
                  </CAccordionItem>
                }) }
              </CAccordion>
            </div>
          }
        })
      }
    </>
  )
}

export default Spells
