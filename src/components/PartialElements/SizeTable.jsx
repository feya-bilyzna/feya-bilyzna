import React from 'react'
import {sizeTableData} from "../../data";

const SizeTable = ({cayegory}) => {
    return <>
        <table>
            <tbody>
            {sizeTableData.knickers.map(
                (row, index)=><tr
                    key={index}>{row.map(
                (col, index)=><td
                    style={index===0? {fontWeight: "bold"}:{textAlign: "center"}}
                    key={index}>{col}</td>)}</tr>)}
                </tbody>
        </table>
    </>
}

export default SizeTable
