import {Bralette, Foam, NoFoam, PushUp, Nursing, ThinFoam} from '../../components'

const linkListSubcategoriesBra = [
    {
        route: "/bralette", menuItem: "Без косточек", component: <Bralette/>
    },
    {
        route: "/foam", menuItem: "С поролоном", component: <Foam/>
    },
    {
        route: "/no-foam", menuItem: "Без поролона", component: <NoFoam/>
    },
    {
        route: "/push-up", menuItem: "Пуш-ап", component: <PushUp/>
    },
    {
        route: "/nursing", menuItem: "Для кормления", component: <Nursing/>
    },
    {
        route: "/thin-foam", menuItem: "Тонкий поролон", component: <ThinFoam/>
    },
]

export default linkListSubcategoriesBra