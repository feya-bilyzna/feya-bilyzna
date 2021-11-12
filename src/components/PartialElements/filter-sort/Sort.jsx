import React from "react"
import { Col, Select } from "react-materialize"
import { filterSortData } from "../../../data"

const Sort = ({ onChange, options, label }) => {
    return <Col xl={3} l={3} m={6} s={12}>
        <Select
            id="sorts"
            label={label}
            value="0"
            onChange={onChange}
        >
            {options.map((option, index) => <option
                key={index}
                value={option.value}
            >
                {option.label}
            </option>)}
        </Select>
    </Col>
}

export default Sort
