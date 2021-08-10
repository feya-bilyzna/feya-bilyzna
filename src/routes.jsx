import React from 'react'
import {Redirect, Route, Switch} from 'react-router-dom'
import {
    NavbarMenu,
    MainPage,
    ContactsPage,
    FooterComponent,
    PageContainer,
    ProductCategoryPage,
    ProductSubcategoryPage
} from './components'

import {categoriesData} from './data'

import DetailPage from './components/VisualElements/DetailPage'

export const useRoutes = () => {
    return (
        <>
            <NavbarMenu/>
                <PageContainer>
                    <Switch>
                        <Route path="/" exact>
                            <MainPage/>
                        </Route>
                        <Route path="/contacts" exact>
                            <ContactsPage/>
                        </Route>
                        {Object.values(categoriesData.categories).map(categoryData =>
                            <Route key={categoryData.route} path={categoryData.route} exact>
                                <ProductCategoryPage category={categoryData}/>
                            </Route>
                        )}
                        {Object.values(categoriesData.uncategorizedSubcategories).map(subcategoryData =>
                            <Route key={subcategoryData.route} path={subcategoryData.route} exact>
                                <ProductSubcategoryPage subcategory={subcategoryData}/>
                            </Route>
                        )}
                        {Object.values(categoriesData.categories).map(categoryData =>
                            categoryData.subcategories.map(subcategoryData =>
                                <Route key={subcategoryData.route} path={subcategoryData.route} exact>
                                    <ProductSubcategoryPage subcategory={subcategoryData}/>
                                </Route>
                            )
                        )}
                        <Route path="/:productId" exact>
                            <DetailPage/>
                        </Route>
                        <Redirect to="/"/>
                    </Switch>
                </PageContainer>
            <FooterComponent/>
        </>
    )
}
