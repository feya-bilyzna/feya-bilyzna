import packageJSON from "../../package.json"
const getImage = (imageName) => {
    const image = new Image()
    image.src = `${packageJSON.homepage}/images/slider/${imageName}`
    return image
}

const sliderData = {
    flagSlider: {
        link: "./UkrainianFlag.WebM",
    },
    basicSlides: [
        {
            image: getImage('lanny-mode.webp'),
            pageLink: "brands/lanny-mode",
            isOuterURL: false,
            styleHeadingText:"headingLannyMode",
            wrapper: "wrapperTextBelowRight",
            styleTextBelow:"belowLocation",
            headingText: "Lanny mode",
            textBelow: "",
        },
        {
            image: getImage('diorella.webp'),
            pageLink: "brands/diorella",
            isOuterURL: false,
            styleHeadingText:"headingLeft",
            wrapper: "wrapperTextBelowLeft",
            headingText: "Diorella",
            styleTextBelow:"belowLocation",
            textBelow: "",
        },
        {
            image: getImage('address.webp'),
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
        image: getImage('instagram.webp'),
    },
}

export default sliderData
