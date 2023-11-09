import { Navigation, Pagination, Scrollbar } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import styles from './Tabs.module.scss';
import { sheetTabs } from '@/data/mock.ts';
import { Tab, TabsProps } from '@/types/types.ts';
import 'swiper/css';
import classNames from 'classnames';

const Tabs = (props: TabsProps) => {
  return (
    <>
      <Swiper
        modules={[Navigation, Pagination, Scrollbar]}
        spaceBetween={20}
        freeMode={true}
        slidesPerView={2}
        className={styles.tabs}
      >
        {sheetTabs.map((tab: Tab) => {
          return <SwiperSlide key={tab.id} onClick={() => props.setCurrentTabId(tab.id)}>
            <div className={classNames(styles.tab, {
              [styles.active]: tab.id === props.currentTabId
            })}>
              { tab.name }
            </div>
          </SwiperSlide>
        })}
      </Swiper>
    </>
  )
}

export default Tabs
