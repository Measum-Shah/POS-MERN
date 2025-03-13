import React from 'react'
import { Card } from 'antd';


const ItemList = ({item}) => {
  const { Meta } = Card;


  return (
    <div>
      <Card
      className='card'
    hoverable
    style={{
      width: 240,
    }}
    cover={<img alt="example" src={item.image} style={{height:"200px" ,padding:"10px" }}/>}
  >
    <Meta title={item.name} />
  </Card>
    </div>
  )
}

export default ItemList
