import React, {Fragment} from 'react'
import {Button, Divider, Row} from "react-materialize"
import cx from "classnames"
import {useTranslation} from "react-i18next"

const VariantSelectors = ({selectorsData, updateSelector}) => {
    const {t} = useTranslation()
    return (
        Object.entries(selectorsData).map(
            ([selectorType, selectors]) =>
                <Fragment key={selectorType}>
                    <Row
                        style={{marginBottom: 10, marginLeft: 0}}
                    >
                        <h6> {t("Выберите")} {{
                            "color": t("цвет"),
                            "cupSize": t("чашку"),
                            "bandSize": t("обхват"),
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
