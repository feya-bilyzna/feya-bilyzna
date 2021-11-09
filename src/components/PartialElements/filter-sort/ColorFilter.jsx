import { Select } from "react-materialize"
import React from "react"
import { filterSortData } from "../../../data"

const ColorFilter = () => {
    return <Select
        label="Фильтр по цвету"
        id="colors"
        multiple
    >
        <option
            value=""
            disabled
        >
            Все цвета
        </option>
        {filterSortData.filters.colors.map((color, index) => <option key={index} value={index} style={{ background: { color } }}>
            {color}
        </option>)}
    </Select>
}

export default ColorFilter
