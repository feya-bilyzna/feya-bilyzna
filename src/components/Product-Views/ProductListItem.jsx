export const ProductListItem = ({product}) => {
    return (
        <div style={{maxWidth: 200, margin: 10}}>
            <h5>{product.name}</h5>
            <img src={product.images[0]?.url} style={{width: '100%'}}></img>
            <h6>{product.description}</h6>
        </div>
    )
}
