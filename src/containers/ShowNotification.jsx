import {notification} from "antd";

export const ShowNotification = (type, message, description) => {
    notification[type]({
        message: message,
        description: description,
    });
};