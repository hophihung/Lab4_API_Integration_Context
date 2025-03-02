import { Button, Form, Input, message, Modal } from "antd";
import { Link, useNavigate } from "react-router-dom";
import { authApi } from "../../../api/authApi";
import { useContext, useState } from "react";
import { userContext } from "../../../App";
function FormLogin() {
    const { token } = useContext(userContext);
    const navigate = useNavigate();
    const [errorLogin, setErrorLogin] = useState('');
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [messageApi, contextHolder] = message.useMessage();
    const handleOk = () => {
        setIsModalOpen(false);
    }
    const handleCancel = () => {
        setIsModalOpen(false);
    }
    const onFinish = async (values) => {
        try {
            const result = await authApi.loginAuth(values);
            token(result.token);
            if (result) {
                messageApi.open({
                    type: 'success',
                    content: 'Login successfull!',
                });
            }
            setTimeout(() => {
                navigate('/user-profile')
            }, 1500)
        } catch (error) {
            console.log(error.response.data.message);
            setErrorLogin(error.response.data.message);
            setIsModalOpen(true);
        }
    }
    return (
        <>
            <Modal title="Thông báo" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
                <span className="text-red-500">{errorLogin}</span>
            </Modal>
            {contextHolder}
            <div className="">
                <Form
                    labelCol={{
                        span: 24,
                    }}
                    wrapperCol={{
                        span: 24,
                    }}
                    onFinish={onFinish}
                >
                    <Form.Item
                        label='Username'
                        name={'username'}
                        rules={[
                            {
                                required: true,
                                message: 'Username is required!'
                            },
                        ]}

                    >
                        <Input placeholder="Username" className="w-full" />
                    </Form.Item>
                    <Form.Item
                        label='Password'
                        name={'password'}
                        rules={[
                            {
                                required: true,
                                message: 'Password is required!'
                            },
                            {
                                pattern: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
                                message: 'Password phải 8 ký tự trở lên và bao gồm chữ cái, số,...'
                            }
                        ]}

                    >
                        <Input type="password" placeholder="Username" />
                    </Form.Item>
                    <Form.Item>
                        <Button type="primary" htmlType="submit" className="w-full" danger>Login</Button>
                    </Form.Item>
                    <Form.Item>
                        <div className="text-center">
                            <span>Not Registered Yet? <Link to='/register' className="text-red-600">Register</Link></span>
                        </div>
                    </Form.Item>
                </Form>
            </div>
        </>
    )
}
export default FormLogin;