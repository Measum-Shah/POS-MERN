import React, { useState , useEffect} from 'react';
import { Link ,useNavigate} from 'react-router-dom';
import { useSelector } from 'react-redux';
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UnorderedListOutlined,
  UserOutlined,
  CopyOutlined,
  LogoutOutlined ,
  HomeOutlined ,
  ShoppingCartOutlined
} from '@ant-design/icons';
import { Button, Layout, Menu, theme } from 'antd';
import '../styles/DLayout.css'
const { Header, Sider, Content } = Layout;
const DefaultLayout = ({children}) => {

  const {cartItems} = useSelector(state=> state.rootReducer)
  const navigate = useNavigate();
  
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  // to get local storGE DATA
  useEffect(()=>{
    localStorage.setItem('cartItems',JSON.stringify(cartItems))
  },[cartItems])
  return (
    
    <Layout >
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="demo-logo-vertical logo " >
          <h1 className='text-center font-weight-bold text-light pt-4'>POS</h1>
          </div>
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={['1']}

        >
          <Menu.Item key="/" icon={<HomeOutlined />} className='text-secondary '>
          <Link to="/" className=' text-decoration-none'>Home</Link>
          </Menu.Item>
          <Menu.Item key="/bills" icon={<CopyOutlined />} className='text-secondary '>
          <Link to="/bills" className=' text-decoration-none'>Bills</Link>
          </Menu.Item>
          <Menu.Item key="/items" icon={<UnorderedListOutlined />} className='text-secondary '>
          <Link to="/items" className=' text-decoration-none'>Items</Link>
          </Menu.Item>
          <Menu.Item key="/customers" icon={<UserOutlined />} className='text-secondary '>
          <Link to="/customers" className=' text-decoration-none'>Customers</Link>
          </Menu.Item>
          <Menu.Item key="/logout" icon={<LogoutOutlined />} className='text-secondary '>
            Logout
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout>
        <Header
          style={{
            padding: 0,
            background: colorBgContainer,
          }}
        >
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
          <div className="cart-item" onClick={()=>navigate('/cart')}>
            <ShoppingCartOutlined/>
            <p>{cartItems.length}</p>
          </div>
        </Header>
        <Content
          style={{
            margin: '24px 16px',
            padding: 24,
            minHeight: 280,
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
          }}
        >
         {children}
        </Content>
      </Layout>
    </Layout>
  );
};
export default DefaultLayout;