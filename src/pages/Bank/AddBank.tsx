import React, {useEffect, useState} from 'react';
import PageHeader from "../../components/PageHeader/PageHeader";
import {Button, Input, Select} from "antd";
import {DoubleLeftOutlined, SaveOutlined} from "@ant-design/icons/lib";
import {Controller, useForm} from "react-hook-form";
import {PageWrapper} from "../../containers/StyledContainers";
import {useDispatch} from "react-redux";
import {useHistory} from "react-router";
import {yupResolver} from "@hookform/resolvers/yup";
import * as yup from "yup";
import axios from "axios";
import URL from "../../services/api/config";
import {ShowNotification} from "../../containers/ShowNotification";
import {getBankListStartAct} from "../../services/actions/bankListActions";
import {finished} from "stream";

const {Option} = Select;

const schema = yup.object().shape({
    code: yup.string().required().default("This field is required!"),
    bankname: yup.string().required().default("This field is required!"),
    stateid: yup.string().required().default("This field is required!"),
});

interface IStateList {
    id: number,
    name: string,
}

const AddBank: React.FC = () => {

    const dispatch = useDispatch();
    const history = useHistory();

    const methods = useForm({
        resolver: yupResolver(schema),
    });

    const {handleSubmit, control, formState: {errors}, reset} = methods;

    const [updateLoading, setUpdateLoading] = useState(false);

    const onSubmit = (data: object) => {
        console.log(data);
        setUpdateLoading(true);
        // dispatch(updateBankInfo({id, ...data}));
        axios.post(`${URL}Bank/Update`, {id: 0, ...data}, {
            headers: {
                Authorization: "Bearer " + token,
            }
        })
            .then(response => {
                console.log(response);
                setUpdateLoading(false);
                ShowNotification(
                    "success",
                    `${response.statusText}`,
                    `Successfully added`
                );
                dispatch(getBankListStartAct({
                    PageNumber: 1,
                    PageLimit: 10,
                }));
                history.goBack();
                resetForm();
            }).catch(error => {
            console.log(error);
            setUpdateLoading(false);
            ShowNotification(
                "error",
                `${error.response.statusText}`,
                `${error.response.data.error}`
            );
        });
    };

    const resetForm = () => {
        reset({
            code: null,
            bankname: null,
            stateid: null,
        });
    };

    const [stateList, setStateList] = useState([]);
    let token = localStorage.getItem("token");

    useEffect(() => {
        axios.get(`${URL}Helper/GetStateList`, {
            headers: {
                Authorization: "Bearer " + token,
            }
        })
            .then(response => {
                setStateList(response.data);
            }).catch(error => {
            console.log(error)
        })
    }, []);

    return (
        <PageWrapper>
            <div className="page-header">
                <PageHeader
                    header={`Add new bank`}
                    subheader="Sorting & pagination remote datasource"
                />
                <div className="page-buttons">
                    <div className="d-flex">
                        <div className="d-none d-sm-flex">
                            <Button
                                onClick={history.goBack}
                                type="default" htmlType="submit" loading={false}
                                className="text-uppercase me-2" icon={<DoubleLeftOutlined/>}
                            >
                                Go back
                            </Button>
                            <Button
                                form="updateInfo"
                                type="primary" htmlType="submit" loading={updateLoading}
                                className="text-uppercase" icon={<SaveOutlined/>}
                            >
                                Create
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
            <form className="p-4" id="updateInfo" onSubmit={handleSubmit(onSubmit)}>
                <div className="row">
                    <div className="col-lg-2 offset-lg-2">
                        <label className="my-3">Bank Code</label>
                    </div>
                    <div className="col-lg-6">
                        <div className="my-3">
                            <Controller
                                name="code"
                                rules={{required: true}}
                                render={({
                                             field: {onChange, onBlur, value}
                                         }) => (
                                    <Input
                                        onChange={onChange} onBlur={onBlur} value={value}
                                        placeholder="Enter bank code here" style={{width: "100%"}}
                                    />
                                )}
                                control={control}
                                defaultValue=""
                            />
                            {errors!.code &&
                            <div className="text-danger float-end">bank code is required</div>}
                        </div>
                    </div>
                </div>
                <div>
                    <div className="row">
                        <div className="col-lg-2 offset-lg-2">
                            <label className="my-3">Bank Name</label>
                        </div>
                        <div className="col-lg-6">
                            <div className="my-3">
                                <Controller
                                    name="bankname"
                                    rules={{required: true}}
                                    render={({
                                                 field: {onChange, onBlur, value}
                                             }) => (
                                        <Input
                                            onChange={onChange} onBlur={onBlur} value={value}
                                            placeholder="Enter bank name here" style={{width: "100%"}}
                                        />
                                    )}
                                    control={control}
                                    defaultValue=""
                                />
                                {errors!.bankname &&
                                <div className="text-danger float-end">bank name is required</div>}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mt-2">
                    <div className="row">
                        <div className="col-lg-2 offset-lg-2">
                            <label className="my-3">Status</label>
                        </div>
                        <div className="col-lg-6">
                            <div className="my-3">
                                <Controller
                                    name="stateid"
                                    rules={{required: true}}
                                    render={({
                                                 field: {onChange, onBlur, value,},
                                             }) => (
                                        <Select
                                            onChange={onChange} onBlur={onBlur} value={value}
                                            placeholder="Select faculty" style={{width: "100%"}}
                                        >
                                            {stateList?.map((state: IStateList) => {
                                                return (
                                                    <Option key={state.id}
                                                            value={state.id}>{state.name}</Option>
                                                )
                                            })}
                                        </Select>
                                    )}
                                    control={control}
                                    defaultValue=""
                                />
                                {errors!.stateid &&
                                <div className="text-danger float-end">status is required</div>}
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </PageWrapper>
    );
};

export default React.memo(AddBank);