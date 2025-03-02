import { Button, Form, Input, message, Modal } from "antd";
import { Link, useNavigate } from "react-router-dom";
import { authApi } from "../../../api/authApi";
import { useState } from "react";

function FormRegister() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [messageApi, contextHolder] = message.useMessage();
    const [errorRegister, setErrorRegister] = useState('')
    const navigate = useNavigate();
    const handleOk = () => {
        setIsModalOpen(false);
    }
    const handleCancel = () => {
        setIsModalOpen(false);
    }
    const onFinish = async (values) => {
        try {
            const result = await authApi.registerAuth(values);
            if (result) {
                messageApi.open({
                    type: 'success',
                    content: 'Đã đăng ký thành công',
                });
                setTimeout(() => {
                    navigate('/login');
                }, 1500)
            }
        } catch (error) {
            console.log(error.response.data.message);
            setErrorRegister(error.response.data.message)
            setIsModalOpen(true);
        }
    }
    return (
        <>
            <Modal title='Thông báo' open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
               <span className="text-red-500">{errorRegister}!</span>
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
                        label='Fullname'
                        name={'fullName'}
                        rules={[
                            {
                                required: true,
                                message: 'Fullname is required!'
                            },
                        ]}

                    >
                        <Input placeholder="Fullname" />
                    </Form.Item>
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
                        <Input placeholder="Username" />
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
                        <Button type="primary" htmlType="submit" className="w-full" danger>Register</Button>
                    </Form.Item>
                    <Form.Item>
                        <div className="text-center">
                            <span>Already have an account? <Link to='/login' className="text-red-600">Log in</Link></span>
                        </div>
                    </Form.Item>
                </Form>
            </div>
        </>
    )
}
export default FormRegister;