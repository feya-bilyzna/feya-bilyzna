import packageJSON from './../../package.json'

const wishlistDescription = "Не пропустіть моделі, які вам подобаються | Додайте їх до списку бажань!"
const wishlistImage = "https://ams03pap001files.storage.live.com/y4mlpzsp8tR0WVGD9aViy1uhdHs7yXU3FhCHXnYzqiLaUzbwWl_aGRq8b1vn8scSO1-ENEyXgXzpDt_DsYp-WFnXqMqUgJND3A2humBVXy0J50x1R2jHHA7_Fhrytxc8zDpNqELosYGodRQE3h_D59Y0RxhTIMWuWmS5YeEOqdYTFdr0hIExYOM4HtCPJDjPEK9?width=498&height=498&cropmode=none"
const shoppingCartDescription = "Додайте товари, які ви вирішили придбати, до кошику!"
const shoppingCartImage = "https://ams03pap001files.storage.live.com/y4mOOgb-aJ-VVMTWwxGryhZtdb7UmC1zirv2Ctwg6lEr62hLvNLXq5IwaAibUT5rsx7knX-WwCzHXWbyh74XTs2c2TZ_dMvBRt9mkn119xXy0007ibJrlbB6yKGLZCvGztf2USVz9jQfG840kNZfBHSHUU48Kjmw92G7jchJjxoT0ijn0cl5n0a7dCiOqcE3g-p?width=498&height=498&cropmode=none"
const mainPageDescription = "Cпідня білизна за доступною ціною. Індивідуальний підбір, з урахуванням ваших уподобань. Бюстгальтери Lanny mode, топи, для годування, коригуюче"
const mainPageImage = "https://ams03pap001files.storage.live.com/y4mOOgb-aJ-VVMTWwxGryhZtdb7UmC1zirv2Ctwg6lEr62hLvNLXq5IwaAibUT5rsx7knX-WwCzHXWbyh74XTs2c2TZ_dMvBRt9mkn119xXy0007ibJrlbB6yKGLZCvGztf2USVz9jQfG840kNZfBHSHUU48Kjmw92G7jchJjxoT0ijn0cl5n0a7dCiOqcE3g-p?width=498&height=498&cropmode=none"
const mainPageKeywords = "фея, аунф, feya, atz, лифчик, ливчик, бюстгальтер, бюсгальтер, бюстгалтер, бюсгалтер, трусики, интернет-магазин, Lanny mode, Diorella, для годування, коригуюча білизна, спортивні та підліткові топи, плавки та боксерки, чоловіча спідня білизна, нижнее белье, стринги"
const contactsPageDescription = "Тел. ☎️ (098) 008 38 08 | м. Кривий Ріг | район Центрально-Міський | вулиця Лермонтова | ринок Речовий | ряд 1-2 | місце 29"
const contactsPageImage = "https://ams03pap001files.storage.live.com/y4miXw4qT7JY8Ch0P6dMkkp8iiiljbruCzgbyawwn2eOI7FgHBnWiyn5JMaguab1aoclxOR304wdxjBBwYpGFcvCv69qmcz_2dzheV0ZadpZOFCzjh-ALU1uniEUD3lvKcf0JhTeLD0s480VGNFHygt-SRil9tcUqf-STwvucwESkNBSKodZ5FKrmo0uWqOGwdp?width=498&height=498&cropmode=none"
const contactsPageKeywords = "фея, аунф, feya, atz, магазин, кривой рог, телефон, номер, как найти, адрес, instagram, facebook"

const metaTagsData = {
    wishlist: {
        title: "Список бажань❤️ | магазин ФЕЯ🧚",
        description: wishlistDescription,
        image: wishlistImage,
        type: "website",
        canonicalUrl: packageJSON.homepage
    },
    shoppingCart: {
        title: "Кошик🛒 | Інтернет магазин ФЕЯ🧚",
        description: shoppingCartDescription,
        image: shoppingCartImage,
        type: "website",
        canonicalUrl: packageJSON.homepage
    },
    mainPage: {
        title: "Фея🧚‍♀️ | Інтернет магазин спідньої білизни",
        description: mainPageDescription,
        image: mainPageImage,
        type: "website",
        canonicalUrl: packageJSON.homepage,
        keywords: mainPageKeywords
    },
    contactsPage: {
        title: "Контактна інформація інет. магазин ФЕЯ🧚‍♀️",
        description: contactsPageDescription,
        image: contactsPageImage,
        type: "website",
        canonicalUrl: packageJSON.homepage,
        keywords: contactsPageKeywords
    },
}

export default metaTagsData
