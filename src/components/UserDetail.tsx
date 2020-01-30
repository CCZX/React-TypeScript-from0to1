import React, { ReactElement, useState, useEffect } from 'react';
import { Layout, Menu, Table, message } from 'antd';
import { Link, withRouter, RouteComponentProps } from 'react-router-dom';
import { User, UserListResponse } from '../typings/api';
import request, { AxiosResponse } from '../api/request';
interface Params {
    id: string
}
type Props = RouteComponentProps<Params>;

function UserDetail(prop: Props) {

    return (
        <div>
            ID :{prop.match.params.id}
        </div>
    )
}
export default UserDetail; 