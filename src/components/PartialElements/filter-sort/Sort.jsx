import React from "react"
import { Select } from "react-materialize"
import {filterSortData} from "../../../data"

const Sort = () => {
    return <Select
        id="sorts"
        label="Сортировка"
        value="0"
    >
        {filterSortData.sorts.map((sort, index) => <option
            key={index}
            value={index}>
                {sort}
        </option>)}
    </Select>
}

export default Sort
