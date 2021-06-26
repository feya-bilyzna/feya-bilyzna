import { ProductListItem } from "./ProductListItem";
import {
    useQuery,
    gql
} from "@apollo/client";


const ALL_PRODUCTS = gql`
    query getAllProducts {
        allProducts {
            id
            name
            description
            images {
                url
            }
        }
    }
`

export const ProductList = () => {

    const { loading, error, data } = useQuery(ALL_PRODUCTS)

    if (loading) return <p>Loading...</p>
    if (error) return <p>Error</p>
  
    return data.allProducts.map((product) => (
        <ProductListItem key={product.id} product={product} />
    ))
}
