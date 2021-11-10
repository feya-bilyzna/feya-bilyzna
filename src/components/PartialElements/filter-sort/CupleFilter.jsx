import { Select } from "react-materialize"
import React from "react"
import { filterSortData } from "../../../data"

const CupleFilter = () => {
    return <Select
        label="Фильтр по чашке"
        id="cupleSizes"
    >
        <option
            value=""
        >
            Все чашки
        </option>
        {filterSortData.filters.cupleSizes.map((cuple, index) => <option
            key={index}
            value={index}
        >
            {cuple}
        </option>)}
    </Select>
}

export default CupleFilter
