import React from 'react';
import {useHistory} from "react-router-dom";
import {Button} from "antd";

const NotFound = () => {

    const history = useHistory();

    return (
        <div>
            <h1>Not Found</h1>
            <Button
                type="default"
                className="text-uppercase"
                onClick={()=> {history.push("/dashboard")}}
            >
                go back
            </Button>
        </div>
    );
};

export default NotFound;