import React from 'react'
import {categoriesData, sliderData} from '../../data'
import {GridView} from "../index"
import {Caption, Icon, Slide, Slider} from "react-materialize";
import contactsData from "../../data/contactsData";

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
                <Slide image={<img alt="Изображение"
                                   src={sliderData.links[0].link}/>}>
                    <Caption placement="right">
                        <h1>
                            Роскошь
                        </h1>
                        <h6 className="light grey-text text-lighten-3">
                            Уважайте себя. Балуйте себя. Любите себя
                        </h6>
                    </Caption>
                </Slide>
                <Slide image={<img alt="Изображение"
                                   src={sliderData.links[1].link}/>}>
                    <Caption placement="left">
                        <h2>
                            Удобство
                        </h2>
                        <h5>
                            Ощутите полную свободу.
                        </h5>
                        <h6>Нижнее бельё было создано именно для вас</h6>
                    </Caption>
                </Slide>
                <Slide image={<img alt="Изображение"
                                   src={sliderData.links[2].link}/>}>
                    <Caption style={{background: "radial-gradient(white, transparent)"}}
                        placement="center" className="light black-text text-lighten-3">
                        <h3>
                            Большой выбор
                        </h3>
                        <h5>
                            Трусики, бюстгальтеры и многое другое.
                        </h5>
                    </Caption>
                </Slide>
                <Slide image={<img alt="Изображение"
                                   src={sliderData.links[3].link}/>}>
                    <Caption placement="left">
                        <h3>
                            Доступные цены
                        </h3>
                        <h5 className="light grey-text text-lighten-3">
                            на все категории товаров
                        </h5>
                    </Caption>
                </Slide>
                <Slide image={<a
                    href={contactsData.contacts[0].link}
                    target="_blank"
                    rel="noopener noreferrer">
                    <img alt="Изображение"
                         src={sliderData.links[4].link}/>
                </a>}>
                    <a
                        href={contactsData.contacts[0].link}
                        target="_blank"
                        rel="noopener noreferrer">
                        <Caption placement="left" className="black-text">
                            <h4
                            >Наш {contactsData.contacts[0].name}</h4>
                            <img style={{width: 50}}
                                 src={sliderData.links[5].link}
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
