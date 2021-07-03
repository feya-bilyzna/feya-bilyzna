const PagesList = [
    {route: "/brands", menuItem: "Бренды", component: "<BrandsPage/>"},
    {route: "/bras", menuItem: "Бюстгальтеры", component: "<BrasPage/>"},
    {route: "/knickers", menuItem: "Трусики", component: "<KnickersPage/>"},
    {route: "/sale", menuItem: "Распродажа", component: "<SalePage/>"},
    {route: "/shapewear", menuItem: "Корректирующее бельё", component: "<ShapewearPage/>"}
]

/*
 <Route path="/" exact>
                    <PageContainer Page={<MainPage/>}/>
                </Route>
                <Route path="/contacts" exact>
                    <PageContainer Page={<ContactsPage/>}/>
                </Route>
                <Route path="/brands" exact>
                    <PageContainer Page={<BrandsPage/>}/>
                </Route>
                <Route path="/bras" exact>
                    <PageContainer Page={<BrasPage/>}/>
                </Route>
                <Route path="/knickers" exact>
                    <PageContainer Page={<KnickersPage/>}/>
                </Route>
                <Route path="/sale" exact>
                    <PageContainer Page={<SalePage/>}/>
                </Route>
                <Route path="/shapewear" exact>
                    <PageContainer Page={<ShapewearPage/>}/>
                </Route>
                <Redirect to = "/"/>
              */

export default PagesList
