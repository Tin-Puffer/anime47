import React, { ChangeEvent, useEffect, useState } from 'react';
import { Col, Row } from 'antd';
import { useAppDispatch, useAppSelector } from '../../../app/hooks';
import Skeleton from '../../../components/Skeleton/Skeleton';
import { useNavigate } from 'react-router-dom';
import openNotification from '../../../components/Notyfication/notyfication';
import { authState } from '../authSlipe';
import './loginStyle.scss';

export default function DetailAcount() {
    const navigate = useNavigate();
    const user: authState | undefined = useAppSelector((state) => state.auth);
    const [avata, setAvata] = useState<string>();
    const [confirm, setConfirm] = useState<boolean>(false);
    const setSelectedFile = (e: ChangeEvent<HTMLInputElement>) => {
        const file: File = (e.target.files as FileList)[0];
        const imageLink:string = URL.createObjectURL(file);
        setAvata(imageLink);
    };
    const handleConfirm = () => {
        setConfirm(true);
        setTimeout(() => {
            navigate('/');
            return openNotification('success', 'CHANGED PASSWORD');
        }, 2000);
    };
    useEffect(() => {
        return () => {
            avata && URL.revokeObjectURL(avata);
        };
    }, [avata]);

    useEffect(() => {
        if (!localStorage.getItem('user')) {
            navigate('/');
        }
    }, [user]);

    // const handleRegister = () => {
    //     dispatch(
    //         authAction.login({
    //             userName: '',
    //             password: '',
    //         }),
    //     );
    // };
    return (
        <div className="login-main">
            <h1></h1>
            <div className="logi-main-content">
                {/* <h3 className="message"></h3> */}
                <div className="form-login">
                    <div className="form-horizontal">
                        <Row className="form-group">
                            <Col xs={24} md={5} lg={5} className="form-group-lable lable-right ">
                                Quyền hạn :
                            </Col>
                            <Col xs={24} md={12} lg={13} className="form-group-lable lable-left">
                                Member - Thành viên
                            </Col>
                        </Row>
                        <Row className="form-group">
                            <Col xs={24} md={5} lg={5} className="form-group-lable lable-right">
                                #ID:
                            </Col>
                            <Col xs={24} md={12} lg={13} className="form-group-lable lable-left">
                                {user.currentUser?.id}
                            </Col>
                        </Row>
                        <Row className="form-group">
                            <Col xs={4} md={5} lg={5} className="form-group-lable lable-right">
                                Tài khoản
                            </Col>
                            <Col xs={24} md={16} lg={13}>
                                <input type="text" className="name" value={user.currentUser?.name} disabled />
                            </Col>
                        </Row>
                        <Row className="form-group">
                            <Col xs={6} md={5} lg={5} className="form-group-lable lable-right">
                                Email
                            </Col>
                            <Col xs={24} md={16} lg={13}>
                                <input type="text" className="name" value={user.currentUser?.email} disabled />
                            </Col>
                        </Row>
                        <Row className="form-group">
                            <Col xs={4} md={5} lg={5} className="form-group-lable lable-right">
                                Avatar
                            </Col>
                            <Col xs={24} md={16} lg={13}>
                                {/* */}
                                {
                                    avata ? (
                                        <div
                                            className="avata-detail"
                                            style={{ backgroundImage: `url(${avata})` }}
                                        ></div>
                                    ) : (
                                        <div
                                            className="avata-detail"
                                            style={{ backgroundImage: `url(${user.currentUser?.img})` }}
                                        ></div>
                                    )
                                    // <img src={avata} className='avata-detail'></img>
                                }
                            </Col>
                        </Row>
                        <Row className="form-group">
                            <Col xs={6} md={5} lg={5} className="form-group-lable lable-right">
                                Đổi Avatar
                            </Col>
                            <Col xs={24} md={13} lg={13} style={{ marginRight: '5px' }}>
                                <input
                                    type="file"
                                    className="name"
                                    style={{ marginBottom: '10px' }}
                                    onChange={setSelectedFile}
                                />
                            </Col>
                            <Col xs={10} md={3} lg={3}>
                                <button
                                    placeholder="Nhập mã xác nhận"
                                    className="name btn "
                                    onClick={() => openNotification('Wanning', 'KHÔNG CÓ API UP THẾ NÀO ĐƯỢC')}
                                >
                                    Upload
                                </button>
                            </Col>
                        </Row>
                        <h1 className="header-list-index">
                            <span className="title-list-index">BẠN CÓ THỂ ĐỔI MẬT KHẨU LẠI Ở BÊN DƯỚI</span>
                        </h1>
                        <div style={{ paddingBottom: '30px' }}></div>
                        <Row className="form-group">
                            <Col xs={24} md={5} lg={5} className="form-group-lable lable-right">
                                Mật khẩu hiện tại:
                            </Col>
                            <Col xs={24} md={16} lg={13}>
                                <input type="password" className="name" />
                            </Col>
                        </Row>
                        <Row className="form-group">
                            <Col xs={24} md={5} lg={5} className="form-group-lable lable-right">
                                Mật khẩu mới:
                            </Col>
                            <Col xs={24} md={16} lg={13}>
                                <input type="password" className="name" />
                            </Col>
                        </Row>
                        <Row className="form-group">
                            <Col xs={24} md={5} lg={5} className="form-group-lable lable-right">
                                Xác Nhận :
                            </Col>
                            <Col xs={24} md={16} lg={13}>
                                <input type="password" className="name" />
                            </Col>
                        </Row>
                        <Row className="form-group">
                            <Col
                                sm={{ order: 5, offset: 0 }}
                                md={{ order: 10, offset: 5 }}
                                lg={{ order: 5, offset: 5 }}
                                className="form-group-lable lable-right"
                            >
                                {!confirm ? (
                                    <button className="btn btn-green" onClick={handleConfirm}>
                                        XÁC NHẬN
                                    </button>
                                ) : (
                                    <button className="btn btn-green" style={{ width: '100%' }}>
                                        <Skeleton
                                            props={{
                                                height: '100%',
                                                width: '100%',
                                                position: 'absolute',
                                                top: 0,
                                                left: 0,
                                                right: 0,
                                            }}
                                        ></Skeleton>
                                        CONFIRM...
                                    </button>
                                )}
                            </Col>
                        </Row>
                    </div>
                </div>
            </div>
        </div>
    );
}
