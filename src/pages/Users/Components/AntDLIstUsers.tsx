import React from "react";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Button, Popconfirm, Table, Tag } from "antd";
import { DeleteTwoTone, EditTwoTone } from "@ant-design/icons";
import axios from "axios";

import { ListWrapper } from "../../../containers/StyledContainers";
import { AppDispatch, RootState } from "../../../services/store";
import {
    getBankListStartAct,
    setFilterParams,
} from "../../../services/actions/bankListActions";
import URL from "../../../services/api/config";
import { ShowNotification } from "../../../containers/ShowNotification";
import RoleModal from "./RoleModal/RoleModal";
import { setUserListPagination } from "../_redux/usersSlice";
import { getUserListStartAct } from "../../../services/actions/userListActions";

interface ListUsers {
    listUsers: {
        id: number;
        code: string;
        bankname: string;
        status: string;
    }[];
    count: number;
}

const AntDListUsers: React.FC<ListUsers> = ({ listUsers, count }) => {
    const history = useHistory();
    const dispatch = useDispatch<AppDispatch>();

    const loading = useSelector(
        (state: RootState) => state.userList?.userListBegin
    );
    const paginationData = useSelector(
        (state: RootState) => state.userList?.paginationData
    );

    function onChange(pagination: any, filters: any, sorter: any, extra: any) {
        // console.log('params', pagination, filters, sorter, extra);
        const { field, order } = sorter;
        // console.log(field, order?.slice(0, -3));
        dispatch(
            setFilterParams({
                OrderType: order?.slice(0, -3),
                SortColumn: field,
            })
        );
    }

    const toggleInfo = (id: number) => {
        history.push({
            pathname: `/users/${id}`,
            state: "User information",
        });
    };

    const columns: any = [
        {
            title: "ID",
            dataIndex: "ID",
            sorter: {
                compare: (a: any, b: any) => a.ID - b.ID,
                multiple: 3,
            },
        },
        {
            title: "Name",
            dataIndex: "DisplayName",
            sorter: {
                compare: (a: any, b: any) => a.DisplayName - b.DisplayName,
                multiple: 3,
            },
        },
        {
            title: "Organization",
            dataIndex: "Organization",
            sorter: {
                compare: (a: any, b: any) => a.Organization - b.Organization,
                multiple: 2,
            },
        },
        {
            title: "INN",
            dataIndex: "INN",
            sorter: {
                compare: (a: any, b: any) => a.INN - b.INN,
                multiple: 2,
            },
        },
        {
            title: "Status",
            dataIndex: "State",
            render: (_: any, record: { State: string }) => {
                return (
                    <Tag
                        color={`${record.State === "Актив" ? "green" : "red"}`}
                    >
                        {record.State}
                    </Tag>
                );
            },
        },
        {
            title: "Actions",
            dataIndex: "actions",
            render: (_: any, record: { ID: number }) => {
                return (
                    <div className="d-flex">
                        <RoleModal id={record.ID} />
                        <Button
                            className="me-2"
                            icon={<EditTwoTone />}
                            onClick={() => toggleInfo(record.ID)}
                        />
                        <Popconfirm
                            title="Sure to delete?"
                            onConfirm={() => handleDelete(record.ID)}
                        >
                            <Button
                                className="danger"
                                icon={<DeleteTwoTone />}
                            />
                        </Popconfirm>
                    </div>
                );
            },
        },
    ];

    const handlePagination = (page: number, pageSize: number) => {
        console.log(page, pageSize);
        // paramsData.PageNumber = page;
        // paramsData.PageLimit = pageSize;
        // dispatch(
        //     setUserListPagination({
        //         PageNumber: page,
        //         PageLimit: pageSize,
        //     })
        // );
        dispatch(
            getUserListStartAct({
                PageNumber: page,
                PageLimit: pageSize,
            })
        );
    };

    const handleDelete = (id: any) => {
        // setDeleteLoading(true);
        let token = localStorage.getItem("token");

        axios
            .delete(`${URL}User/Delete?id=${id}`, {
                headers: {
                    Authorization: "Bearer " + token,
                },
            })
            .then((response) => {
                // console.log(response);
                // setDeleteLoading(false);
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
                // setDeleteLoading(false);
                ShowNotification(
                    "error",
                    `${error.response.statusText}`,
                    `${error.response.data.error}`
                );
            });
    };

    return (
        <ListWrapper>
            <div className="datatable">
                <Table
                    className="mt-4"
                    pagination={{
                        defaultPageSize: 10,
                        total: count,
                        defaultCurrent: 1,
                        showTotal: (total, range) =>
                            `${range[0]}-${range[1]} of ${total} items`,
                        onChange: (page, pageSize) =>
                            handlePagination(page, pageSize),
                    }}
                    columns={columns}
                    dataSource={listUsers}
                    loading={loading}
                    onChange={onChange}
                    // rowKey={record => record.id}
                />
            </div>
        </ListWrapper>
    );
};

export default React.memo(AntDListUsers);
