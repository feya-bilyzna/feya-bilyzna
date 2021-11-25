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
                        <h6>Выберите {{
                            "color": "цвет",
                            "cupSize": "чашку",
                            "bandSize": "обхват",
                            "size": "размер",
                        }[selectorType] || "значение"}:</h6>
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
