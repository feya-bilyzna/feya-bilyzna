import React from "react"
import { Col, Collapsible, CollapsibleItem, Icon, Row } from "react-materialize"
import { Sort, CupleFilter, BandSizeFilter, ColorFilter } from "../.."

const FilterSortWraper = () => {
    return <Collapsible style={{ margin: "0 3px 0 3px" }} accordion>
        <CollapsibleItem
            className={"flow-text"}
            expanded={false}
            header="Фильтрация и сортировка"
            icon={<Icon>keyboard_arrow_down</Icon>}
            node="div"
        >
            <Row>
                <Col
                    xl={3} l={3} m={6} s={12}>
                    <Sort />
                </Col>
                <Col
                    xl={3} l={3} m={6} s={12}>
                    <CupleFilter />
                </Col>
                <Col
                    xl={3} l={3} m={6} s={12}>
                    <BandSizeFilter />
                </Col>
                <Col
                    xl={3} l={3} m={6} s={12}>
                    <ColorFilter />
                </Col>
            </Row>
        </CollapsibleItem>
    </Collapsible>
}

export default FilterSortWraper
