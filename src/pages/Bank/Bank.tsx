import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {motion} from "framer-motion";
import {useHistory} from 'react-router-dom';
import {Button, Input, Pagination} from 'antd';

import PageHeader from "../../components/PageHeader/PageHeader";
import {variants} from "../../utils/motions";
import {PageWrapper} from "../../containers/StyledContainers";
import ListBanks from "./Components/ListBanks";
import {getBankListStartAct, setFilterParams} from "../../services/actions/bankListActions";
import {DoubleLeftOutlined, FileAddOutlined} from "@ant-design/icons/lib";
import {AppDispatch, RootState} from "../../services/store";
import AntDListBanks from "./Components/AntDLIstBanks";

const {Search} = Input;

const Bank = () => {

    const dispatch = useDispatch<AppDispatch>();
    const history = useHistory();

    let bankListParams = useSelector((state: RootState) => state.bankList.paramsData);
    let bankListFromApi = useSelector((state: RootState) => state.bankList.bankListSuccessData);

    let listBanks = bankListFromApi?.rows;
    let count: number = bankListFromApi?.total || 10;

    // useEffect(() => {
    //     dispatch(getBankListStartAct(bankListParams));
    // }, [dispatch, bankListParams]);

    const onSearch = (Search: string) => {
        // console.log(value)
        dispatch(setFilterParams({
            Search: Search,
        }))
    };

    const handlePagination = (page: number, pageSize: number) => {
        // console.log(page, pageSize)
        dispatch(setFilterParams({
            PageNumber: page,
            PageLimit: pageSize,
        }))
    };

    return (
        <PageWrapper>
            <div className="page-header">
                <PageHeader
                    header="Banks list"
                    subheader="Sorting & pagination remote datasource"
                />
                <div className="page-buttons">
                    <div className="d-flex">
                        <div className="d-none d-sm-flex">
                            <Search
                                onSearch={onSearch}
                                placeholder="Search bank..."
                                loading={false}
                                enterButton
                                className="me-2"
                                defaultValue={bankListParams?.Search}
                            />
                            <Button
                                onClick={() => history.push("bank/add")}
                                type="primary" htmlType="submit" loading={false}
                                className="text-uppercase" icon={<FileAddOutlined/>}
                            >
                                Add new
                            </Button>
                        </div>
                    </div>
                </div>
            </div>

            <motion.div
                animate={"visible"}
                variants={variants}
                initial="hidden"
            >
                {/*<ListBanks listBanks={listBanks} count={count}/>*/}
                <AntDListBanks listBanks={listBanks} count={count}/>
            </motion.div>

            {/*<Pagination*/}
            {/*    total={count}*/}
            {/*    showTotal={(total, range) => `${range[0]}-${range[1]} of ${total} items`}*/}
            {/*    defaultPageSize={10}*/}
            {/*    defaultCurrent={1}*/}
            {/*    onChange={(page, pageSize) => handlePagination(page, pageSize)}*/}
            {/*/>*/}

        </PageWrapper>
    );
};

export default React.memo(Bank);