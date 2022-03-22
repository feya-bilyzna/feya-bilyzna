import React from 'react'
import { useTranslation } from "react-i18next"

const SizeTable = ({ table }) => {
    const { t } = useTranslation()
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
                                >{t(col)}</td>)
                        }
                    </tr>)}
            </tbody>
        </table>
    </>
}

export default SizeTable
