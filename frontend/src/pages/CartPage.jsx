import React from 'react'
import DefaultLayout from '../components/DefaultLayout'
import { useSelector } from 'react-redux'
import { rootReducer } from './../redux/rootReducer';
import { Table} from 'antd';
import {DeleteOutlined,PlusCircleOutlined,MinusCircleOutlined} from '@ant-design/icons'


const CartPage = () => {
    const {cartItems} = useSelector(state => state.rootReducer)
    const dataSource = [
        {
          key: '1',
          name: 'Mike',
          age: 32,
          address: '10 Downing Street',
        },
        {
          key: '2',
          name: 'John',
          age: 42,
          address: '10 Downing Street',
        },
      ];
      
      const columns = [
        {title: 'Name', dataIndex:'name', },
        {title: 'Image', dataIndex:'name',
             render:(image,record)=> <img src={record.image} alt={record.name} height={60} width={60}/> },
        {title: 'Price', dataIndex:'price', },
        {title: 'Quantity',dataIndex:'_id', render:(id,record)=>
        <div>
            <PlusCircleOutlined className='mx-2' style={{cursor:"pointer"}}  onClick={()=>{
                handleIncrement(render);
            }}/>
            <b>{record.quantity}</b>
            <MinusCircleOutlined className='mx-2' style={{cursor:"pointer"}}/>
        </div>
        },
        {title: 'Action', dataIndex:'_id',
            render:(id,record)=><DeleteOutlined />
        }


      ];
  return (
   <DefaultLayout>
    <Table dataSource={cartItems} columns={columns} />;
   </DefaultLayout>
  )
}

export default CartPage
