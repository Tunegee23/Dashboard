import { useState } from 'react';
import {
  PieChartFilled,
  CreditCardFilled,
  MenuFoldOutlined,
  ProfileFilled,
  MenuUnfoldOutlined,
  WalletFilled,
  BookFilled,
  AppstoreFilled,
  NotificationOutlined
} from '@ant-design/icons';
import Box from '../UI/Card';
import Searchbar from "../UI/Searchbox"
import img from "../../assets/avater.png"
import { Button, Card, Layout, Menu, theme } from 'antd';
const { Header, Sider, Content } = Layout;
const Nav = () => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  return (
    <Layout className='h-screen w-screen'>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="demo-logo-vertical" />
        <h1 className='text-white text-[20px] ml-[20px] font-bold p-[1rem] mt-[10px]'>V-Dashboard</h1>
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={['1']}
          items={[
            {
              key: '1',
              icon:<PieChartFilled />,
              label: 'Dashboard',
            },
            {
              key: '2',
              icon: <AppstoreFilled />,
              label: 'UI elemeny',
            },
            {
              key: '3',
              icon: <ProfileFilled/>,
              label: 'Tables',
            },
            {
                key: '4',
                icon: <ProfileFilled/>,
                label: 'Forms',
              },
              {
                key: '5',
                icon: <CreditCardFilled />,
                label: 'Card',
              },
              {
                key: '6',
                icon: <WalletFilled />,
                label: 'Modal',
              },
              {
                key: '7',
                icon: <BookFilled />,
                label: 'Blank',
              },
          ]}
        />
      </Sider>
      <Layout>
        <Header
          style={{
            padding: "10px",
            background: colorBgContainer,
            display: "flex",
            alignItems: "center",
            justifyContent:"space-between"
            
          }}
        > <div className='flex'>
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: '16px',
              width: 64,
              height: 64,
            }}
          />
          <div className='w-[300px]'>
          <Searchbar/>
          </div>
        </div>
       <div className='flex justify-center items-center '>
         <div>
          <NotificationOutlined className='p-7 w-[70px] h-[70px]' />
        </div>
          
          <div className='w-[40px] h-[40px] rounded-full '>
            <img src={img} alt=" "className= "h-full w-full object-cover overflow-aut"/>
          </div>
       </div>
          
         
        </Header>
        <Content 
          style={{
            margin: '24px 16px',
            padding: 24,
            minHeight: 280,
            background: "whitesmoke",
            borderRadius: borderRadiusLG,
          }}
        >
          <h1 className='  '>Dashboard</h1>
          <div className='flex mt-4 justify-evenly'>
          <Box numbers="8,282" text="New User"/>
          <Box numbers="200,521" text="Total Orders"/>
          <Box numbers="200,521" text="available product"/>
          
          </div>
        </Content>
      </Layout>
    </Layout>
  );
};
export default Nav;