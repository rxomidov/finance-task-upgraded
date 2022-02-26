import React, {useEffect} from 'react';
import {Controller, useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import * as yup from "yup";
import {Link, useHistory} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import styled from 'styled-components';
import {Button, Input} from "antd";
import {EyeInvisibleOutlined, EyeTwoTone} from "@ant-design/icons/lib";
import bgImg from "../../assets/finance-bg.jpg"
import {loginStart} from "../../services/actions/loginActions";
import logo from "../../assets/logoMini.png";
import {AppDispatch, RootState} from "../../services/store";

const schema = yup.object().shape({
    username: yup.string().required().default("This field is required!"),
    password: yup.string().required().default("This field is required!"),
});

const Login = () => {

    const dispatch = useDispatch<AppDispatch>();
    const history = useHistory();

    const methods = useForm({
        resolver: yupResolver(schema),
    });

    const {handleSubmit, control, formState: {errors}, reset, register} = methods;

    const onSubmit = (data: object) => {
        console.log(data);
        dispatch(loginStart(data));
        resetForm();
    };

    const resetForm = () => {
        reset({
            username: null,
            password: null,
        });
    };

    let token = localStorage.getItem("token");
    const loginState = useSelector((state: RootState) => state.login.loginSuccess);
    const loading = useSelector((state: RootState) => state.login.loginBegin);

    useEffect(() => {
        if (token || loginState) {
            history.push("/");
        }
    }, [token, loginState]);

    return (
        <LoginWrapper>
            <div className="container-flui">
                <div className="row g-0">
                    <div className="col-lg-5">
                        <div className="login-form">
                            <div style={{width: 400}}>
                                <div className="text-center">
                                    <h3>Welcome</h3>
                                </div>
                                <form onSubmit={handleSubmit(onSubmit)}>
                                    <div>
                                        <label className="my-1">Username</label>
                                        <Controller
                                            name="username"
                                            rules={{required: true}}
                                            render={({
                                                         field: {onChange, onBlur, value, ref},
                                                         fieldState: {invalid, isTouched, isDirty, error},
                                                         formState,
                                                     }) => (
                                                <Input
                                                    onChange={onChange} onBlur={onBlur} value={value}
                                                    placeholder="Enter your username here"
                                                />
                                            )}
                                            control={control}
                                            defaultValue=""
                                        />
                                        {errors.username &&
                                        <div className="text-danger float-end">username is required</div>}
                                    </div>
                                    <div className="mt-2">
                                        <label className="my-1">Password</label>
                                        <Controller
                                            name="password"
                                            rules={{required: true}}
                                            render={({
                                                         field: {onChange, onBlur, value, ref},
                                                         fieldState: {invalid, isTouched, isDirty, error},
                                                         formState,
                                                     }) => (
                                                <Input.Password
                                                    onChange={onChange} onBlur={onBlur} value={value}
                                                    placeholder="Enter your password here"
                                                    iconRender={visible => (visible ? <EyeTwoTone/> :
                                                        <EyeInvisibleOutlined/>)}
                                                />
                                            )}
                                            control={control}
                                            defaultValue=""
                                        />
                                        {errors.password &&
                                        <div className="text-danger float-end">password is required</div>}
                                    </div>
                                    <div className="mt-2">
                                        <div className="d-flex justify-content-end mt-5">
                                            <Button type="primary" htmlType="submit" loading={loading} className="text-uppercase">Login</Button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-7">
                        <div className="login-right d-none d-lg-flex">
                            <div className="text-center">
                                <img src={logo} alt="logo" height={64}/>
                                <h3 className="mt-4">Login Page</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </LoginWrapper>
    );
};

export default Login;

const LoginWrapper = styled.div`
  background: linear-gradient( var(--background-color), var(--background-color) ), url(${bgImg}) center center no-repeat;
  background-size:cover;
  width: 100vw;
  height: 100vh;
  .login-right{
    color: #ffffff;
    justify-content: center;
    align-items: center;
    height: 100vh;
    h3{
      font-weight: 500;
      color: #ffffff;
      font-size: 42px;
      line-height: 30px;
      text-transform:uppercase;
    }
  }
  .login-form{
    background: #ffffff;
    padding: 2rem;
    box-shadow: 3.75215px 3.75215px 18.7607px rgba(0, 0, 0, 0.25);
    height: 100vh;
    display:flex;
    align-items: center;
    justify-content:center;
    h3{
      font-weight: 500;
      font-size: 22px;
      line-height: 30px;
      text-transform:uppercase;
    }
  }
  .sign-in{
    background: var(--text-color);
    transition: var(--main-transition);
    color: #fff;
    padding: 0.5rem 3rem;
    border: none;
    box-shadow: 3px 3px 5px rgba(0, 0, 0, 0.15);
    border-radius: 1.5px;
    :hover{
      background: #444;
    }
  }
`;