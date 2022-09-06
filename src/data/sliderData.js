import packageJSON from "../../package.json"

const sliderData = {
    flagSlider: {
        link: "./UkrainianFlag.WebM",
    },
    basicSlides: [
        {
            image: `${packageJSON.homepage}/images/slider/lanny-mode.webp`,
            pageLink: "brands/lanny-mode",
            isOuterURL: false,
            styleHeadingText:"headingLannyMode",
            wrapper: "wrapperTextBelowRight",
            styleTextBelow:"belowLocation",
            headingText: "Lanny mode",
            textBelow: "",
        },
        {
            image: `${packageJSON.homepage}/images/slider/diorella.webp`,
            pageLink: "brands/diorella",
            isOuterURL: false,
            styleHeadingText:"headingLeft",
            wrapper: "wrapperTextBelowLeft",
            headingText: "Diorella",
            styleTextBelow:"belowLocation",
            textBelow: "",
        },
        {
            image: `${packageJSON.homepage}/images/slider/address.webp`,
            pageLink: "https://g.page/bilyznaFeya?share",
            isOuterURL: true,
            styleHeadingText:"headingLocation",
            headingText: "Приглашаем приобрести",
            wrapper: "wrapperTextBelowLocation",
            styleTextBelow:"belowLocation",
            textBelow: "AddressForSlider",
        },
    ],
    instagramSlider: {
        image: `${packageJSON.homepage}/images/slider/instagram.webp`,
    },
}

export default sliderData
