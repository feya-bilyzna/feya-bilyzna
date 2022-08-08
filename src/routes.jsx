import React from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import {
    NavbarMenu,
    MainPage,
    ContactsPage,
    FooterComponent,
    PageContainer,
    ProductCategoryPage,
    ProductSubcategoryPage,
    CartButton,
    DetailPage,
    ShoppingCart,
    PersonalDetails,
    Wishlist,
    CookiesConsent
} from './components'

import { categoriesData } from './data'
import { useCookies } from "react-cookie";

export const useRoutes = () => {
    const [cookies] = useCookies(['user', 'wishlist'])

    return <>
        <NavbarMenu />
        <CartButton />
        <CookiesConsent />
        <PageContainer>
            <Switch>
                <Route path="/" exact>
                    <MainPage />
                </Route>
                <Route path="/contacts" exact>
                    <ContactsPage />
                </Route>
                {Object.entries(categoriesData.categories).map(([categoryDataKey, categoryDataValue]) =>
                    <Route key={categoryDataValue.route} path={categoryDataValue.route} exact>
                        <ProductCategoryPage categoryKey={categoryDataKey} categoryValue={categoryDataValue} />
                    </Route>
                )}
                {Object.entries(categoriesData.uncategorizedSubcategories).map(([subcategoryDataKey, subcategoryDataValue]) =>
                    <Route key={subcategoryDataValue.route} path={subcategoryDataValue.route} exact>
                        <ProductSubcategoryPage subcategory={subcategoryDataValue} subcategoryMetaName={subcategoryDataKey} />
                    </Route>
                )}
                {Object.values(categoriesData.categories).map(categoryData =>
                    categoryData.subcategories.map(subcategoryData =>
                        <Route key={subcategoryData.route} path={subcategoryData.route} exact>
                            <ProductSubcategoryPage subcategory={subcategoryData} subcategoryMetaName={subcategoryData.name} parentFilters={categoryData.filters} />
                        </Route>
                    )
                )}
                <Route path="/:productId(\d+)" exact>
                    <DetailPage />
                </Route>
                <Route path="/cart" exact>
                    <ShoppingCart />
                </Route>
                <Route path="/wishlist" exact>
                    <Wishlist />
                </Route>
                {cookies.user !== undefined ? <Route path="/login" exact>
                    <PersonalDetails />
                </Route> : <></>}
                <Redirect to="/" />
            </Switch>
        </PageContainer>
        <FooterComponent />
    </>
}
