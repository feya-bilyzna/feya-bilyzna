import { Col, Select } from "react-materialize"
import React from "react"

const ProductFilter = ({ onChange, label, filterOptions }) => {
    return <Col xl={3} l={6} m={6} s={12}>
        <Select
            label={label}
            onChange={onChange}
        >
            <option>
                Все
            </option>
            {filterOptions.map((item, index) => <option
                key={index}
                value={item.value}
                data-icon={item.link || undefined}
            >
                {item.value}
            </option>)}
        </Select>
    </Col>
}

export default ProductFilter
