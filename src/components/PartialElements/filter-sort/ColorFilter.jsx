import { Select } from "react-materialize"
import React from "react"
import { filterSortData } from "../../../data"
import styles from "../../../css.module/colorFilter.module.css"

const ColorFilter = () => {
    return <Select
        label="Фильтр по цвету"
        id="colors"
    >
            <option
                value=""
            >
                Все цвета
            </option>
            {filterSortData.filters.colors.map((data, index) => <option
                key={index}
                value={index}
                data-icon={data.link}
            >
                {data.color}
            </option>)}
    
    </Select>
}

export default ColorFilter
