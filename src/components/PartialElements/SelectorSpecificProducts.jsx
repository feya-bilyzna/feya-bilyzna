import React from "react"
import { Col, Select } from "react-materialize"

const SelectorSpecificProducts = ({onChange, options, label, filter}) => {
    return <Col xl={3} l={6} m={6} s={12}>
        <Select
            label={label}
            onChange={onChange}
        >
            {options.map((option, index) => <option
                key={index}
                value={option.value}
                data-icon={option.link || undefined}
            >
                {option.label || option.value}
            </option>)}
        </Select>
    </Col>
}

export default SelectorSpecificProducts
