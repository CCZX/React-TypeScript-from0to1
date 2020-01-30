import React, { ReactElement, useState, useCallback, useEffect } from 'react';
import { Layout, Menu, Form, Input, Button, message } from 'antd';
import { Link, withRouter, RouteComponentProps } from 'react-router-dom';
import { User, UserAddResponse } from '../typings/api';
import request, { AxiosResponse } from '../api/request';
type Props = RouteComponentProps;
function UserAdd(props: Props) {
    let [user, setUser] = useState<User>({} as User);
    const handleSubmit = useCallback((event: React.FormEvent) => {
        event.preventDefault();
        request.post<UserAddResponse>('/api/users', user).then((response: AxiosResponse<UserAddResponse>) => {
            let { data, code } = response.data;
            if (code == 0) {
                props.history.push('/user/list');
            } else {
                message.error('添加用户失败');
            }
        });
    }, [user])
    const handleNameChange = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
        setUser({
            ...user,
            username: event.target.value
        });
        console.log('old user', user);
    }, [user])
    useEffect(() => {
        console.log('new user', user);
    }, [user]);
    return (
        <Form onSubmit={handleSubmit}>
            <Form.Item>
                <Input
                    placeholder="用户名"
                    style={{ width: 120 }}
                    value={user.username}
                    onChange={handleNameChange}
                />
            </Form.Item>
            <Form.Item>
                <Button type="primary" htmlType="submit">添加</Button>
            </Form.Item>
        </Form>
    )
}


export default UserAdd;