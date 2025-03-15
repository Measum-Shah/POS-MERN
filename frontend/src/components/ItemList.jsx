import React from 'react'
import { Card,Button } from 'antd';
import { useDispatch } from 'react-redux';

const ItemList = ({item}) => {
  const { Meta } = Card;
  const dispatch = useDispatch();
  const handleAddToCart = ()=>{
    dispatch({
      type: "UPDATECART",
      payload: {...item,quantity:1}
    })
  }


  return (
    <div>
      <Card
      className='card'
    style={{
      width: 240,
    }}
    cover={<img alt="example" src={item.image} style={{height:"200px" ,padding:"10px" }}/>}
  >
    <Meta title={item.name} />
    <div className="item-button">
      <Button onClick={handleAddToCart}>
        Add to Cart
      </Button>
    </div>
  </Card>
    </div>
  )
}

export default ItemList
