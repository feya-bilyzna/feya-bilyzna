import React from "react";
import { Button } from "react-materialize";
import { useHistory } from "react-router-dom";
import { CustomIcon } from "..";

const GoBackButton = ({ styles }) => {
    let history = useHistory();
    return <Button
        className="pink accent-4"
        style={styles}
        onClick={() => history.goBack()}>
        <CustomIcon left>
            arrow_back_ios
        </CustomIcon>
        Назад
    </Button>
}

export default GoBackButton
