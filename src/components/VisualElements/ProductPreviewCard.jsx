import React from 'react';
import {Card, CardTitle,  Icon} from "react-materialize";

const ProductPreviewCard = ({product}) => {
    return (
            <Card
                //Комент - Оправдания не требует
                // actions={[
                //     <a key="1" href="#">This is a Link</a>
                // ]}
                closeIcon={<Icon>close</Icon>}
                header={<CardTitle image={product.images[0]?.url}></CardTitle>}
                revealIcon={<Icon>more_vert</Icon>}
            >
                {product.description}
            </Card>
    );
};

export default ProductPreviewCard;
