import {BrandsPage} from "../components/All-Types-Goods/BrandsPage"
import {BrasPage} from "../components/All-Types-Goods/BrasPage"
import {KnickersPage} from "../components/All-Types-Goods/KnickersPage"
import {SalePage} from "../components/All-Types-Goods/SalePage"
import {ShapewearPage} from "../components/All-Types-Goods/ShapewearPage"

const PagesList = [
    {route: "/brands", menuItem: "Бренды", component: <BrandsPage/>},
    {route: "/bras", menuItem: "Бюстгальтеры", component: <BrasPage/>},
    {route: "/knickers", menuItem: "Трусики", component: <KnickersPage/>},
    {route: "/sale", menuItem: "Распродажа", component: <SalePage/>},
    {route: "/shapewear", menuItem: "Корректирующее бельё", component: <ShapewearPage/>}
]

export default PagesList
