import React from 'react';
import {Button, Parallax} from "react-materialize";
import FooterComp from "./Footer-Component";
import {NavbarMenu} from "../../NavbarMenu";
import GridTest from "./GridTest";
import {ProductList} from "../../Product-Views/ProductList";
import M from "materialize-css";

const ParallaxTest = () => {
    const showToast = () => (M.toast({
        html: '<h2>Here you go!</h2>'
    }))
    return (
        <div className="transparent">
            <Parallax
                image={<img alt=""
                            src="https://lh3.googleusercontent.com/AeiFFpQy-uIckf8eX2Ch5TAkHaocdzuI-mwWPrFX-5eFgM2Z1xX9Nr9Nv8hZyAaFMjWaXLL0D_E5OSNbjCmO82MTHn_oaQ4sGnjyJpIAeucnv3WSJgNVj_2AmV2ud0VFkUTcFoqjhtkJDjcxXZNCaDYDDSvwW6-EdWbDwopiTI-a6sEEEUrybkQviDHzNvk7eo2H5hAnmbdA-8aRe6IAld2gtbvucabTeZWwaaAiWcNjuuIQeHCVpGs5TfU0rjJxMQbGOuQbfECuFLRoogH7nXSt4EPwmPEeTYflRP9rPnPyieqL4k0OIn1eHgVbTjtCLfunHvWt05qENWQ3EL29x195Ia6Ev3wiuq4SBumojywnZl2D6J5pGkoqlgiIXqAtpXsWcAr-FAucmt_6e-smczAfjw0CHUWmrl78CgYvXoqdsZGDJ_PgzsxBHYzTVCtJDBXp7BBXbhfri_TA_WHy1NqXCH427OhXX1T5es2aWTeg2hEFFlWg57f6Id1XQJQh9uq5u2meswR89M7rBuKFhu2yf7O52xBc4-Hbt1JztvseZ6O49yJ4nmyKjBKYcbh5FQ0pknvCywEKYD8zHuqSShOSqboLiZz_WrVwGOp74UgnqDNlOQ653stjQo7JFYxrAiMvVHwsLJwISeu6Vmk8NUw3P09IcI4OT17M-KEZOT66Cf4jtghRfKQrlX_hRSs9KQR_y2DPhIAqNHy5sRLeer2O=w1290-h977-no?authuser=0"/>}
                options={{
                    responsiveThreshold: 0
                }}
            />
            <div className="transparent">
                <div className="transparent">
                    {/*<h2 className="header">*/}
                    {/*    Parallax*/}
                    {/*</h2>*/}
                    {/*<p className="grey-text text-darken-3 lighten-3">*/}
                    {/*    Parallax is an effect where the background content or image in this case, is moved at a different speed than the foreground content while scrolling.*/}
                    {/*</p>*/}
                    {/*<div >*/}
                    {/*    <h1>Группы товаров:</h1>*/}
                    {/*    /!*<GridTest/>*!/*/}
                    {/*</div>*/}
                    <NavbarMenu></NavbarMenu>

                    <GridTest/>

                    <div style={{display: 'flex', flexDirection: 'row', flexWrap: 'wrap'}}>
                        <ProductList/>
                    </div>
                    <Button onClick={showToast}>Show toast</Button>
                    <FooterComp></FooterComp>
                </div>
            </div>
            <Parallax
                image={<img alt=""
                            src="https://lh3.googleusercontent.com/_52BR6cw42cgZ5CkGZau2k1B412aRFlgU4uGDTVTOirEwCRW8oGJt5u3KvFaXMvPVNqSVc2REZiBQY3qmIHDP5PtNPEGi94xNY3KITt9er_8AdfrG-0NTen66CXjo9loKxYjBaQ7sbdcExWv8vW1sfuEYBxIXRs-xNpzx_sh1j9O1PGQZkMcjVf48MOCY8QKf2C83-lx01VWdw4UTlzNxVBg28Do_OIraf_oTULNzVJavLo1JfUtTIrfAV5a2-t766chGXbe68K-gQ-W7qESFMLzTN2udSXfzUcKurMdjksPiLLz-dKY8xi7RH_hrdNSDyXfrMiYQKmw6moiW945-wzz50XET-vw0Ru_X-tvPs_JxP1ZoWpdNK8DzlzbKtquTnWv3Pt82ca7AG37P-QB8qYwtgD0DtBmF6Qij1-b2TSFa3hJjcCvm8y0_V7m2VHYasHDg-GP7ZcHbtZxIvEJhQeYTN2gpK75ABwb8NrN2hIM-ywdsb8ZadYHI3wuEdWB3ZB8TmqJEJjoMcgaFwBthQslO9N0FoKNmpGv10hqsPGI0VbxfMCx4ot__fmT5eTBHViw38OIBoNilV97ZB6crvOxVYBGXWmJIw6lmKA-P7rhk495_FilmWSAYVXGzhVYonWAifLMy6yzfckax2XgXIpdJdt0uv6Xxfnni0Vbhy5KdV1uqoD3HMW54-g_L8VZhfXsMAPG-bMz9Y-cS2XviTMW=w1303-h977-no?authuser=0"/>}
                options={{
                    responsiveThreshold: 5
                }}
            />
        </div>
    );
};

export default ParallaxTest;