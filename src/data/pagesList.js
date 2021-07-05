import {BrandsPage, BrasPage, KnickersPage, SalePage, ShapewearPage} from '../components'

const PagesList = [
    {route: "/brands", menuItem: "Бренды", component: <BrandsPage/>},
    {route: "/bras", menuItem: "Бюстгальтеры", component: <BrasPage/>},
    {route: "/knickers", menuItem: "Трусики", component: <KnickersPage/>},
    {route: "/sale", menuItem: "Распродажа", component: <SalePage/>},
    {route: "/shapewear", menuItem: "Корректирующее бельё", component: <ShapewearPage/>}
]

export default PagesList
