import React from "react"
import { Col, Select } from "react-materialize"
import { useTranslation } from "react-i18next"

const ProductOptionSelect = ({ onChange, options, label, filter }) => {
    const { t } = useTranslation()
    return <Col xl={3} l={6} m={6} s={12}>
        <Select
            label={label}
            onChange={onChange}
        >
            {options.map((option, index) => <option
                key={index}
                value={option.value}
                data-icon={option.link}
            >
                {t(option.label) || t(option.value)}
            </option>)}
        </Select>
    </Col>
}

export default ProductOptionSelect
