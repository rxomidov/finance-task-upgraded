import React, { useState } from 'react'
import { Button, Col, Input, Modal, Row, Table, Tag } from "antd";
import { ArrowLeftOutlined, ArrowRightOutlined, CarryOutTwoTone } from '@ant-design/icons';
import axios from 'axios';

import URL from '../../../../services/api/config';

const { Search } = Input;

function RoleModal({ id }) {

    const roleModalColumns = [
        {
            title: 'ID',
            dataIndex: 'ID',
        },
        {
            title: 'Name',
            dataIndex: 'Name',
        },
    ];

    const [isModalVisible, setIsModalVisible] = useState(false);

    const showModal = () => {
        setIsModalVisible(true);
    };

    const [deleteLoading, setDeleteLoading] = useState(false);
    let token = localStorage.getItem("token");

    const [userRoleLoading, setUserRoleLoading] = useState(false);
    const [userRole, setUserRole] = useState({});
    const [userRolesModel, setUserRolesModel] = useState([]);
    const [userRolesModelFilter, setUserRolesModelFilter] = useState([]);
    const [userRolesModel1, setUserRolesModel1] = useState([]);
    const [userRolesModel1Filter, setUserRolesModel1Filter] = useState([]);

    const getUserRole = (id) => {
        setUserRoleLoading(true);
        axios.get(`${URL}User/GetRole?id=${id}`, {
            headers: {
                Authorization: "Bearer " + token,
            }
        })
            .then(response => {
                setUserRoleLoading(false);
                setUserRole(response.data);
                setUserRolesModel(response.data.RolesModel);
                setUserRolesModelFilter(response.data.RolesModel);
                setUserRolesModel1(response.data.RolesModel1);
                setUserRolesModel1Filter(response.data.RolesModel1);
            }).catch(error => {
                setUserRoleLoading(false);
                console.log(error);
            });
    }
    // console.log(userRole);
    // console.log(userRoleSModel);

    const handleOk = () => {
        setDeleteLoading(true);
        console.log("Role modal")
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };

    const onSearchLeft = (event) => {
        const filteredModels = userRolesModelFilter.filter(model => model.Name.toLowerCase().includes(event.target.value.toLowerCase()));
        setUserRolesModel(filteredModels);
    };
    const onSearchRight = (event) => {
        const filteredModels = userRolesModel1Filter.filter(model => model.Name.toLowerCase().includes(event.target.value.toLowerCase()));
        setUserRolesModel1(filteredModels);
    };

    const [selectedButtonLeft, setSelectedButtonLeft] = useState(true);
    const [selectedModelsLeft, setSelectedModelsLeft] = useState([]);
    const [selectedRowKeysLeft, setRowKeysLeft] = useState([]);

    const [selectedButtonRight, setSelectedButtonRight] = useState(true);
    const [selectedModelsRight, setSelectedModelsRight] = useState([]);
    const [selectedRowKeysRight, setRowKeysRight] = useState([]);

    const resetTableLeft = () => {
        setRowKeysLeft([]);
    };

    const resetTableRight = () => {
        setRowKeysRight([]);
    };

    const rowSelectionLeft = {
        selectedRowKeys: selectedRowKeysLeft,
        onChange: (selectedRowKeys, selectedRows) => {
            // console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
            setSelectedModelsLeft(selectedRows);
            setRowKeysLeft(selectedRowKeys);
            if (selectedRows.length > 0) {
                setSelectedButtonLeft(false);
            } else {
                setSelectedButtonLeft(true);
            }
        },
        getCheckboxProps: (record) => ({
            name: record.Name,
        }),
    };

    const rowSelectionRight = {
        selectedRowKeys: selectedRowKeysRight,
        onChange: (selectedRowKeys, selectedRows) => {
            // console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
            setSelectedModelsRight(selectedRows);
            setRowKeysRight(selectedRowKeys);
            if (selectedRows.length > 0) {
                setSelectedButtonRight(false);
            } else {
                setSelectedButtonRight(true);
            }
        },
        getCheckboxProps: (record) => ({
            name: record.Name,
        }),
    };

    const handleSubmitSelectedRowsLeft = () => {
        console.log("sending selected", selectedModelsLeft);
        userRolesModel.map((roleModels) => {
            // console.log(roleModels);
            return (
                selectedModelsLeft.map((selectedModels) => {
                    // console.log(selectedModels); 
                    if (selectedModels.ID === roleModels.ID) {
                        console.log("true");
                        roleModels.Check = true;
                        return null;
                    }
                })
            )
        })
        // console.log(userRolesModel);
        axios.post(`${URL}User/UpdateRole`, { ID: id, RolesModel: userRolesModel }, {
            headers: {
                Authorization: "Bearer " + token,
            }
        })
            .then(response => {
                console.log(response);
                getUserRole(id);
                setSelectedButtonLeft(true);
            }).catch(error => {
                console.log(error);
            });
    }

    const handleSubmitSelectedRowsRight = () => {
        console.log("sending selected", selectedModelsRight);
        userRolesModel1.map((roleModels) => {
            // console.log(roleModels);
            return (
                selectedModelsRight.map((selectedModels) => {
                    // console.log(selectedModels); 
                    if (selectedModels.ID === roleModels.ID) {
                        console.log("true");
                        return roleModels.Check = true;
                    }
                })
            )
        })
        console.log(userRolesModel1);
        axios.post(`${URL}User/UpdateRole1`, { ID: id, RolesModel1: userRolesModel1 }, {
            headers: {
                Authorization: "Bearer " + token,
            }
        })
            .then(response => {
                console.log(response);
                getUserRole(id);
                setSelectedButtonRight(true);
            }).catch(error => {
                console.log(error);
            });
    }

    return (
        <div>
            <Button
                className="me-2"
                onClick={() => { showModal(); getUserRole(id) }}
                icon={<CarryOutTwoTone />}
            />
            <Modal
                width={1000}
                title={`${userRole.ID}`} visible={isModalVisible}
                onOk={handleOk} onCancel={handleCancel}
                footer={[
                    <Button key="back" onClick={handleCancel}>
                        Cancel
                    </Button>,
                    // <Button key="submit" type="primary" loading={deleteLoading} onClick={handleOk}>
                    //     Save
                    // </Button>,
                ]}
            >
                <Row>
                    <Col span={11}>
                        <Search
                            onChange={onSearchLeft}
                            placeholder="Search..."
                            loading={false}
                            enterButton
                            className="me-2"
                        />
                        <Table
                            className="mt-4"
                            rowSelection={{
                                type: "checkbox",
                                ...rowSelectionLeft,
                            }}
                            columns={roleModalColumns}
                            dataSource={userRolesModel}
                            loading={userRoleLoading}
                            scroll={{ y: "50vh" }}
                            rowKey={record => record.ID}
                        />
                    </Col>
                    <Col span={2} style={{ display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column" }}>
                        <Button
                            style={{ margin: "8px" }} disabled={selectedButtonLeft}
                            type="primary" icon={<ArrowRightOutlined />}
                            onClick={() => {
                                handleSubmitSelectedRowsLeft();
                                resetTableLeft();
                            }}
                        />
                        <Button
                            style={{ margin: "8px" }} disabled={selectedButtonRight}
                            type="primary" icon={<ArrowLeftOutlined />}
                            onClick={() => {
                                handleSubmitSelectedRowsRight();
                                resetTableRight();
                            }}
                        />
                    </Col>
                    <Col span={11}>
                        <Search
                            onChange={onSearchRight}
                            placeholder="Search..."
                            loading={false}
                            enterButton
                            className="me-2"
                        />
                        <Table
                            className="mt-4"
                            rowSelection={{
                                type: "checkbox",
                                ...rowSelectionRight,
                            }}
                            columns={roleModalColumns}
                            dataSource={userRolesModel1}
                            loading={userRoleLoading}
                            scroll={{ y: "50vh" }}
                            rowKey={record => record.ID}
                        />
                    </Col>
                </Row>
            </Modal>
        </div >
    )
}

export default RoleModal;