import React from 'react'
import {categoriesData, sliderData} from '../../data'
import {GridView} from "../index"
import {Caption, Icon, Slide, Slider} from "react-materialize"
import contactsData from "../../data/contactsData"

const MainPage = () => {
    return <>
        <h3 style={{"textAlign": "center"}}>Группы товаров</h3>
        <div style={{margin: "0 3px 0 3px"}}>
            <Slider className="z-depth-1"
                    options={{
                        duration: 750,
                        height: 300,
                        indicators: true,
                        interval: 6000
                    }}
            >
                {sliderData.data.map(slide=><Slide
                    image={<img alt="Изображение"
                               src={slide.link}/>}>
                    <Caption placement={slide.side}>
                        <h1>
                            {slide.headingText}
                        </h1>
                        <h6 className="light grey-text text-lighten-3">
                            {slide.textBelow}
                        </h6>
                    </Caption>
                </Slide>)}
                <Slide image={<a
                    href={contactsData.contacts[0].link}
                    target="_blank"
                    rel="noopener noreferrer">
                    <img alt="Изображение"
                         src={sliderData.instagramSlider[0].link}/>
                </a>}>
                    <a
                        href={contactsData.contacts[0].link}
                        target="_blank"
                        rel="noopener noreferrer">
                        <Caption placement="left" className="black-text">
                            <h4
                            >Наш {contactsData.contacts[0].name}</h4>
                            <img style={{width: 50}}
                                 src={sliderData.instagramSlider[1].link}
                                 alt="Изображение"/>
                        </Caption>
                    </a>
                </Slide>
            </Slider>
        </div>
        <GridView cardItems={[
            ...Object.values(categoriesData.categories),
            ...Object.values(categoriesData.uncategorizedSubcategories),
        ]}/>
    </>
}

export default MainPage
