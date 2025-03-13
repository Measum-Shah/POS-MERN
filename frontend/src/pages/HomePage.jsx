import axios from "axios"
import { Col, Row } from 'antd';
import DefaultLayout from '../components/DefaultLayout'
import {React, useState, useEffect }from 'react'
import ItemList from "../components/ItemList";
const HomePage = () => {
  const [itemsData, setItemsData] = useState([])
  useEffect(() => {
    const getAllItems = async () => {
      try {
        const { data } = await axios.get('/api/v1/item/get-items');
        setItemsData(data);
        // console.log(data);
        // console.log("Measum")
      } catch (error) {
        console.log("error is", error);
      }
    };
  
    getAllItems(); 
  }, []);
  
  return (
   <DefaultLayout>
    <Row>
      {
        itemsData.map(item =>(
          <Col xs={26} lg={6} md={12} sm={18}>
          <ItemList item={item}/>
          </Col>
        ))
      }
    </Row>
   </DefaultLayout>
  )
}

export default HomePage
