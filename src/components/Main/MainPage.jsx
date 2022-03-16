import React from 'react'
import { categoriesData, sliderData } from '../../data'
import { GridView } from "../index"
import { Caption, Slide, Slider } from "react-materialize"
import contactsData from "../../data/contactsData"
import {useTranslation} from "react-i18next"

const MainPage = () => {
    const {t} = useTranslation()
    return <>
        <h3 style={{ "textAlign": "center", margin: 30 }}>{t("Группы товаров")}</h3>
        <div style={{ margin: "0 3px 30px 3px" }}>
            <Slider className="z-depth-1"
                options={{
                    duration: 750,
                    height: 300,
                    indicators: true,
                    interval: 6000
                }}
                style={{ marginBottom: "30px" }}
            >
                {sliderData.basicSlides.map((slide, index) => <Slide
                    key={index}
                    image={<img alt="Изображение"
                        src={slide.link} />}>
                    <Caption placement={slide.side}>
                        <h1>
                            {t(slide.headingText)}
                        </h1>
                        <h6 className="light grey-text text-lighten-3">
                            {t(slide.textBelow)}
                        </h6>
                    </Caption>
                </Slide>)}
                <Slide image={<a
                    href={contactsData.instagramLink}
                    target="_blank"
                    rel="noopener noreferrer">
                    <img alt="Изображение"
                        src={sliderData.instagramSlider.link} />
                </a>}>
                    <a
                        href={contactsData.instagramLink}
                        target="_blank"
                        rel="noopener noreferrer">
                        <Caption placement="left" className="black-text">
                            <h4
                            >Наш {contactsData.instagram}</h4>
                            <img style={{ width: 50 }}
                                src={sliderData.instagramSlider.iconLink}
                                alt="Изображение" />
                        </Caption>
                    </a>
                </Slide>
            </Slider>
        </div>
        <GridView cardItems={[
            ...Object.values(categoriesData.categories),
            ...Object.values(categoriesData.uncategorizedSubcategories),
        ]} />
    </>
}

export default MainPage
