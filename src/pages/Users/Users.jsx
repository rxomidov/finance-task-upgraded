import React, { useState, useEffect } from "react";
import { Button, Input, Select, Space } from "antd";
import { useHistory, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { FileAddOutlined, ReloadOutlined } from "@ant-design/icons/lib";
import { motion } from "framer-motion";

import PageHeader from "../../components/PageHeader/PageHeader";
import { PageWrapper } from "../../containers/StyledContainers";
import { variants } from "../../utils/motions";
import AntDLIstUsers from "./Components/AntDLIstUsers";
import { setUserListFilter } from "../../services/actions/userListActions";
import { getUserListStartAct } from "./../../services/actions/userListActions";

const { Search } = Input;
const { Option } = Select;

const Users = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const location = useLocation();

    let userListFilter = useSelector((state) => state.userList.filterData);

    let userListPagination = useSelector((state) => state.userList.paginationData);

    let userListFromApi = useSelector((state) => state.userList.userListSuccessData);

    let listUsers = userListFromApi?.rows;
    let count = userListFromApi?.total || 10;

    // const [filterType, setFilterType] = useState(userListFilter.filterType);
    const [filterType, setFilterType] = useState(null);
    // const [filterValue, setFilterValue] = useState(userListFilter[`${filterType}`]);
    const [filterValue, setFilterValue] = useState(null);

    function handleChange(value) {
        setFilterType(value);
    }

    const onSearchChange = (event) => {
        setFilterValue(event.target.value)
    }

    const onSearch = (Search) => {
        console.log({ [filterType]: Search });
        userListFilter[`${filterType}`] = Search;
        userListFilter.filterType = filterType;
        dispatch(setUserListFilter(userListFilter));
        dispatch(getUserListStartAct({
            PageNumber: 1,
            PageLimit: 10,
            [filterType]: Search
        }));
    };

    function handleClearParams() {
        setFilterType(null);
        setFilterValue('');
    };

    return (
        <PageWrapper>
            <div className="page-header">
                <PageHeader
                    header="Users list"
                    subheader="Sorting & pagination"
                />
                <div className="page-buttons">
                    <div className="d-flex">
                        <div className="d-none d-sm-flex">
                            <Space>
                                <Button
                                    onClick={handleClearParams}
                                    type="primary"
                                    className="me-2"
                                    icon={<ReloadOutlined />}
                                >
                                    Reset
                                </Button>
                                <Select
                                    value={filterType}
                                    placeholder="Filter type"
                                    className="me-2"
                                    style={{ width: "120px" }}
                                    onChange={handleChange}
                                >
                                    <Option value="Id">ID</Option>
                                    <Option value="UserName">UserName</Option>
                                    <Option value="FIO">FIO</Option>
                                    <Option value="OrganizationName">Organization Name</Option>
                                    <Option value="OrganizationId">Organization Id</Option>
                                    <Option value="INN">INN</Option>
                                </Select>
                                <Search
                                    onSearch={onSearch}
                                    onChange={onSearchChange}
                                    placeholder="Search user..."
                                    loading={false}
                                    enterButton
                                    className=""
                                    value={filterValue}
                                />
                                <Button
                                    onClick={() => history.push("user/add")}
                                    type="primary"
                                    htmlType="submit"
                                    loading={false}
                                    className="text-uppercase"
                                    icon={<FileAddOutlined />}
                                >
                                    Add new
                                </Button>
                            </Space>
                        </div>
                    </div>
                </div>
            </div>

            <motion.div
                animate={"visible"}
                variants={variants}
                initial="hidden"
            >
                <AntDLIstUsers listUsers={listUsers} count={count} />
            </motion.div>
        </PageWrapper>
    );
};

export default React.memo(Users);
