import React from 'react';
import { ProductList } from "../Product-Views/ProductList";
import GridTest from "./Test/GridTest";
import {Button} from "react-materialize";
import M from "materialize-css"

export const MainPage = () => {

    const showToast = () => (M.toast({
        html: '<h2>Here you go!</h2>'
    }))

    return(
        <>
            <div >
                <h1>Группы товаров:</h1>
                <GridTest/>
            </div>
            <div style={{display: 'flex', flexDirection: 'row', flexWrap: 'wrap'}}>
                <ProductList />
            </div>
            <Button onClick={showToast} >Show toast</Button>
        </>
    )
}
