import React, { useEffect, useState } from "react";
import { useHistory, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Button, Popconfirm, Table, Tag } from "antd";
import axios from "axios";

import { ListWrapper } from "../../../containers/StyledContainers";
import { AppDispatch, RootState } from "../../../services/store";
import { EditIcon, TrashIcon } from "../../../utils/svgIcons";
import {
    getBankListStartAct,
    setFilterParams,
} from "../../../services/actions/bankListActions";
import URL from "../../../services/api/config";
import { ShowNotification } from "../../../containers/ShowNotification";

interface ListBanks {
    listBanks: {
        id: number;
        code: string;
        bankname: string;
        status: string;
    }[];
    count: number;
}

const AntDListBanks: React.FC<ListBanks> = ({ listBanks, count }) => {
    const history = useHistory();
    const dispatch = useDispatch<AppDispatch>();

    const loading = useSelector(
        (state: RootState) => state.bankList?.bankListBegin
    );
    let fail = useSelector((state: RootState) => state.bankList.bankListFail);
    const bankListFailData = useSelector(
        (state: RootState) => state.bankList?.bankListFailData
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
            pathname: `/bank/${id}`,
            state: "Bank information",
        });
    };
    const columns: any = [
        {
            title: "ID",
            dataIndex: "ID",
            sorter: {
                compare: (a: any, b: any) => a.id - b.id,
                multiple: 3,
            },
        },
        {
            title: "Code",
            dataIndex: "Code",
            sorter: {
                compare: (a: any, b: any) => a.code - b.code,
                multiple: 3,
            },
        },
        {
            title: "Name",
            dataIndex: "Name",
            sorter: {
                compare: (a: any, b: any) => a.bankname - b.bankname,
                multiple: 2,
            },
        },
        {
            title: "Actions",
            dataIndex: "actions",
            render: (_: any, record: { id: number }) => {
                return (
                    <div className="d-flex">
                        <Button
                            className="me-2"
                            icon={<EditIcon fill={"dodgerblue"} />}
                            onClick={() => toggleInfo(record.id)}
                        />
                        <Popconfirm
                            title="Sure to delete?"
                            onConfirm={() => handleDelete(record.id)}
                        >
                            <Button
                                className="danger"
                                icon={<TrashIcon fill={"rgba(255,0,0,0.6)"} />}
                            />
                        </Popconfirm>
                    </div>
                );
            },
        },
    ];

    const handlePagination = (page: number, pageSize: number) => {
        // console.log(page, pageSize)
        dispatch(
            setFilterParams({
                PageNumber: page,
                PageLimit: pageSize,
            })
        );
    };

    const handleDelete = (id: any) => {
        // setDeleteLoading(true);
        let token = localStorage.getItem("token");

        axios
            .delete(`${URL}Bank/Delete?id=${id}`, {
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
                        showTotal: (total, range) =>
                            `${range[0]}-${range[1]} of ${total} items`,
                        onChange: (page, pageSize) =>
                            handlePagination(page, pageSize),
                    }}
                    columns={columns}
                    dataSource={listBanks}
                    loading={loading}
                    onChange={onChange}
                />
            </div>
        </ListWrapper>
    );
};

export default React.memo(AntDListBanks);
