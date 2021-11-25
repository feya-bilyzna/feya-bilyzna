import React from 'react'

const SizeTable = ({ table }) => {

    return <>
        <table>
            <tbody>
                {table.map(
                    (row, index) => <tr key={index}>
                        {
                            row.map(
                                (col, index) => <td
                                    style={!index ? { fontWeight: "bold" } : { textAlign: "center" }}
                                    key={index}
                                >{col}</td>)
                        }
                    </tr>)}
            </tbody>
        </table>
    </>
}

export default SizeTable
