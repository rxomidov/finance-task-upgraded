import axios from "axios";
import URL from "./config";
import {ShowNotification} from "../../containers/ShowNotification";

const request = axios.create({
    baseURL: URL,
});

const subscribe = (history = null) => {
    request.interceptors.request.use((config) => {
        let token = localStorage.getItem("token");

        if (token) {
            config.headers["Authorization"] = ["Bearer", token].join(" ");
        }

        return config;
    });

    request.interceptors.response.use(
        (config) => config,
        (error) => {
            if (error?.response?.status === (400 || 401)) {
                localStorage.removeItem("token");
                history.push("/login");
                ShowNotification(
                    "error",
                    `${error.response.statusText}`,
                    `${error.response.data.error}`
                );
            }

            // if (error.response?.data) {
            //     console.log(error.response);
            // }

            // throw error;
        }
    );
};

export default {request, subscribe};
