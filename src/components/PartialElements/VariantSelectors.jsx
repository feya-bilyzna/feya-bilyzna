import React, {Fragment} from 'react'
import {Button, Divider, Row} from "react-materialize"
import cx from "classnames"

const VariantSelectors = ({selectorsData, updateSelector}) => {
    return (
        Object.entries(selectorsData).map(
            ([selectorType, selectors]) =>
                <Fragment key={selectorType}>
                    <Row
                        style={{marginBottom: 10, marginLeft: 0}}
                    >
                        {selectorType === "color"?     <h6>Выберите цвет:</h6>: <></>}
                        {selectorType === "cupSize"?   <h6>Выберите чашку:</h6>: <></>}
                        {selectorType === "bandSize"?  <h6>Выберите обхват:</h6>: <></>}
                        {selectorType === "size"?      <h6>Выберите размер:</h6>: <></>}
                        {selectors.map(selector =>
                            <Button key={selector.value}
                                    floating
                                    style={{margin: 3}}
                                    disabled={selector.disabled}
                                    className={cx(
                                        selectorType === "color" ? selector.value : "pink accent-4",
                                        {pulse: selector.selected})
                                    }
                                    onClick={() => updateSelector(selectorType, selector.value)}
                            >{selectorType === "color" ? "" : selector.value}</Button>
                        )}
                    </Row>
                    <Divider/>
                </Fragment>
        )
    )
}

export default VariantSelectors
