import { notification } from 'antd';
import { CheckCircleOutlined, InfoCircleOutlined, FrownOutlined } from '@ant-design/icons';
import './notyficationStyle.scss';

const openNotification = (type: string, message: string) => {
    switch (type) {
        case 'success': {
            notification.success({
                message: message,
                duration: 1,
                closeIcon: <div />,
                icon: <CheckCircleOutlined className="icon" />,
                className: 'SUCSESS',

                description: '',
            });
            break;
        }
        case 'notify': {
            notification.error({
                message: message,
                duration: 1,
                closeIcon: <div />,
                description: '',
                icon: <InfoCircleOutlined />,
                className: 'NOTIFY',
            });
            break;
        }
        case 'Wanning': {
            notification.error({
                message: message,
                duration: 1.5,
                closeIcon: <div />,
                description: '',
                icon: <FrownOutlined className="icon" />,
                className: 'Wanning',
            });
        }
    }
};
export default openNotification;
