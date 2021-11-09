import { Select } from "react-materialize"
import React from "react"
import { filterSortData } from "../../../data"

const BandSizeFilter = () => {
    return <Select
        label="Фильтр по обхвату"
        id="bandSizes"
        multiple
    >
        <option
            disabled
            value=""
        >
            Все обхваты
        </option>
        {filterSortData.filters.bandSizes.map((bandSize, index) => <option
            key={index}
            value={index}
        >
            {bandSize}
        </option>)}
    </Select>
}

export default BandSizeFilter
