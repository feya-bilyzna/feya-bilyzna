import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper'
import 'swiper/swiper-bundle.min.css'
import 'swiper/swiper.min.css'
import 'swiper/components/pagination'
import 'swiper/components/scrollbar'
import styles from '../../css.module/slider.module.css'
import { sliderData } from '../../data'
import contactsData from "../../data/contactsData"
import { useTranslation } from "react-i18next"
import { SliderLink } from '..'

export default function Slider() {
    SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, Autoplay])

    const { t } = useTranslation()
    return <div style={{ margin: "0 3px 30px 3px" }}>
        <Swiper className={styles.slider}
            autoplay={
                { delay: 7000 }
            }
            spaceBetween={0}
            slidesPerView={1}
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
        >
            <SwiperSlide>
                <video className={styles.slider} autoPlay="autoplay" muted loop src={sliderData.flagSlider.link} />
            </SwiperSlide>
            {sliderData.basicSlides.map((slide, index) =>
                <SwiperSlide
                    key={index}>
                    <SliderLink link={slide.pageLink} isOuterURL={slide.isOuterURL}>
                        <img
                            className={styles.slider}
                            alt="Изображение"
                            src={slide.imageLink} />
                        <h1 className={styles[slide.styleHeadingText]}>{t(slide.headingText)}</h1>
                        <div className={styles[slide.wrapper]}>
                            {t(slide.textBelow).split(';').map((text, index) =>
                                <div key={index} className={styles[slide.styleTextBelow]}>{t(text)}</div>)}
                        </div>
                    </SliderLink>
                </SwiperSlide>)}
            <SwiperSlide>
                <a href={contactsData.instagramLink} target="_blank" rel="noopener noreferrer" >
                    <img className={styles.slider} alt="Изображение"
                        src={sliderData.instagramSlider.link} />
                    <h1 className={styles.instagram} style={{ paddingTop: 5 }} >{contactsData.instagram}</h1>
                </a>
            </SwiperSlide>
        </Swiper>
    </div>
}
