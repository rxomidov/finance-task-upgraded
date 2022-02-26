import React, { useState } from "react";
import { Button, Modal } from "antd";
import { TrashIcon } from "../../../utils/svgIcons";
import { useDispatch } from "react-redux";
import axios from "axios";
import URL from "../../../services/api/config";
import { ShowNotification } from "../../../containers/ShowNotification";
import { getBankListStartAct } from "../../../services/actions/bankListActions";
import styled from "styled-components";

interface DeleteModal {
    id: number;
}

const DeleteModal: React.FC<DeleteModal> = ({ id }) => {
    const dispatch = useDispatch();

    const [isModalVisible, setIsModalVisible] = useState(false);

    const showModal = () => {
        setIsModalVisible(true);
    };

    const [deleteLoading, setDeleteLoading] = useState(false);
    let token = localStorage.getItem("token");

    const handleOk = () => {
        setDeleteLoading(true);
        axios
            .delete(`${URL}Bank/Delete?id=${id}`, {
                headers: {
                    Authorization: "Bearer " + token,
                },
            })
            .then((response) => {
                // console.log(response);
                setDeleteLoading(false);
                setIsModalVisible(false);
                ShowNotification(
                    "success",
                    `${response.statusText}`,
                    `Successfully deleted`
                );
                dispatch(
                    getBankListStartAct({
                        PageNumber: 1,
                        PageLimit: 10,
                    })
                );
            })
            .catch((error) => {
                // console.log(error);
                setDeleteLoading(false);
                ShowNotification(
                    "error",
                    `${error.response.statusText}`,
                    `${error.response.data.error}`
                );
            });
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };
    return (
        <Wrapper>
            <Button
                className="danger"
                onClick={showModal}
                icon={<TrashIcon fill={"rgba(255,0,0,0.6)"} />}
            />
            <Modal
                title="Delete Modal"
                visible={isModalVisible}
                onOk={handleOk}
                onCancel={handleCancel}
                footer={[
                    <Button key="back" onClick={handleCancel}>
                        Cancel
                    </Button>,
                    <Button
                        key="submit"
                        type="primary"
                        loading={deleteLoading}
                        onClick={handleOk}
                    >
                        Yes
                    </Button>,
                ]}
            >
                <p>Do you really want to delete this file?</p>
            </Modal>
        </Wrapper>
    );
};

export default DeleteModal;

const Wrapper = styled.div``;
