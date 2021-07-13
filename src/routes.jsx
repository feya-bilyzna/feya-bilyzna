import React from 'react'
import {Redirect, Route, Switch} from 'react-router-dom'
import {
    NavbarMenu,
    MainPage,
    ContactsPage,
    FooterComponent,
    PageContainer,
    GridView,
} from './components'

import {categoriesData} from './data'
import {gql, useQuery} from "@apollo/client";


const ProductCategoryPage = ({category}) => {
    return (
        <div>
            <h3 style={{textAlign: "center"}}>{category.name}</h3>
            <GridView cardItems={category.subcategories}/>
        </div>
    )
}

const ProductSubcategoryPage = ({subcategory}) => {
    const ProductsQuery = gql`
        query ProductsQuery($categoryName: String!) {
             categoryProducts(categoryName: $categoryName) {
                description
                id
                name
                images {
                  url           
                }
            }
        }
    `
    const {loading, error, data} = useQuery(ProductsQuery, {
        variables: {categoryName: subcategory.name},
    })

    if (loading) return <p>Loading...</p>
    if (error) return <p>Error</p>
    return (
        <div>
            <h3 style={{"textAlign": "center"}}>{subcategory.name}</h3>
            <GridView apiPatterns cardItems={data.categoryProducts}/>
        </div>
    )
}

export const useRoutes = () => {
    return (
        <div>
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
                        <Redirect to="/"/>
                    </Switch>
                </PageContainer>
            <FooterComponent/>
        </div>
    )
}
