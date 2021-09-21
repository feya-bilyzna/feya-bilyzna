import React from 'react'
import {categoriesData} from '../../data'
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
                <Slide image={<img alt=""
                                   src="https://bn1301files.storage.live.com/y4mIyFICCQ_K6jj7K0BHd_C4_TZ3IXM7gh3nctLnvFRjvovSWun-WKv4tDzy7SD0awK7z7ajgpyFssdRMFJx6GK3QcWDjAc3siuENmK1UTs8xwjbkxWZdAI-qo8a3vYx1xAXFivZIoUuJFYryhY4IjZQsbp6zLZLnuOKXfTUCgLacNqJZ5dXVaAgB10HUdblF-Y?width=1400&height=800&cropmode=none"/>}>
                    <Caption placement="right">
                        <h1>
                            Роскошь
                        </h1>
                        <h6 className="light grey-text text-lighten-3">
                            Уважайте себя. Балуйте себя. Любите себя
                        </h6>
                    </Caption>
                </Slide>
                <Slide image={<img alt=""
                                   src="https://bn1301files.storage.live.com/y4mGjyhtjZGgG-YcHhqawiwhZfn0bpegVKN5IosGWsp09RRvcUj7VKVIBXPDV1B0NLIUMhQq4Qkm3sFbC5qmYo4tpDrHIT7HrmR36Lvocb8wkDjY0BhBvpbNLX6k4-JxMgod2eKil7TrsxJe9D_Iqp-nNXxQN0p61iKs-vnTJqChE14Cz6XuphJpsUrdLyBMN8x?width=660&height=440&cropmode=none"/>}>
                    <Caption placement="left">
                        <h2>
                            Удобство
                        </h2>
                        <h5 className="https://bn1301files.storage.live.com/y4mwjz62nP_ULmRkyTOQN95B-b4W0UrVofrH1dyUvWK7rlaff3fcKt1Chu55KctkldrVjL3Q5fFLJmw0inEXZfuzWPnGVdaIX6Zpqr-0_M2g1ieYt7k2nuq4lXNhQpQCA_kUn9o-61Si37vsCMzVaZKTaFYDNrgXNK8BZbyTnDKcJQvXjpDynbvDsoLMWCMNkiP?width=660&height=346&cropmode=none">
                            Ощутите полную свободу.
                        </h5>
                        <h6>Нижнее бельё было создано именно для вас</h6>
                    </Caption>
                </Slide>
                <Slide image={<img alt=""
                                   src="https://bn1301files.storage.live.com/y4m8abZ9U_g7OiiVFOABVk8G7b5yfgdTF80HUDPZJn5xlGS-YNqmToHQMyhEL4W2z6fiqNUPP7aOXeMTB_b0KPd2_pa0bmUbmP1aXvao161wz44Fm2xH5CG6hrSvxa8CjGKRINP2NTFc1wH01mWGOaNyddJfveWQAariYEZfk8-9lSbvlKJhQOTsTpXtwqIKdYL?width=519&height=320&cropmode=none"/>}>
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
                <Slide image={<img alt=""
                                   src="https://bn1301files.storage.live.com/y4mwjz62nP_ULmRkyTOQN95B-b4W0UrVofrH1dyUvWK7rlaff3fcKt1Chu55KctkldrVjL3Q5fFLJmw0inEXZfuzWPnGVdaIX6Zpqr-0_M2g1ieYt7k2nuq4lXNhQpQCA_kUn9o-61Si37vsCMzVaZKTaFYDNrgXNK8BZbyTnDKcJQvXjpDynbvDsoLMWCMNkiP?width=660&height=346&cropmode=none"/>}>
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
                         src="https://bn1301files.storage.live.com/y4mR_b-XmnB1K0HDq1dZC4-aTtLPiC7omlOGSOAEGcOxWnjNLF2kPmKVe3Wa-yUNBbaG3km4ce5CogaF8gOd5PmPzmG0IPFwpG8oiviYPVWUvlSjqu_FI3V-p8ydW9OMA4Hgx_90Q4NzAEcoQ5YwnOLu3YilFMhLxKuVU9yApqTbxSpuguQSDXmae4NxF0lsQg1?width=600&height=295&cropmode=none"/>
                </a>}>
                    <a
                        href={contactsData.contacts[0].link}
                        target="_blank"
                        rel="noopener noreferrer">
                        <Caption placement="left" className="black-text">
                            <h4 style={{background: "radial-gradient(circle at .1%, #111, #999 .2%, white, transparent)"}}
                            >Наш {contactsData.contacts[0].name}</h4>
                            <img style={{width: 50}}
                                 src="https://bn1301files.storage.live.com/y4mkzYESjT2dZEaAr3HcXVuYf21_DCeMiCgdBKc5YQ9KAN7P3GKKW4RWR6g5fe7rm8bL5y1gjXoQLaJxGzlVa_XCT15zhpuhEAEqKaMnhmaF0qT75aP4-oNOUuDmcXc29zPOsPOCxIaihZVQIT4EzRXGAB7CVpY2Sm2LPCkIvksqI800d05lyTOtzLltT4yDpb_?width=256&height=256&cropmode=none"
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
