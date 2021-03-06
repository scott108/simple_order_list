import React, { useEffect, useCallback } from 'react';
import { mockGet } from 'utils/mockHttp';
import { orderGroupByStatus } from 'utils/utils';
import SectionList from 'components/SectionList';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { GROUP_RULES } from 'utils/constants';

const Header = styled.div`
  display: flex;
  width: 500px;
  height: 20px;
  background: #F5F5F5;
  border: 1px solid #E5E5E5;
  align-items: center;
  padding: 20px;
`;

const DividIcon = styled.div`
  height: 0;
  width: 5px;
  padding-top: 5%;
  background: #009F49;
  margin: 0 10px 0 0;
`;

const OrderRow = styled.div`
  display: flex;
  flex-direction: row;
  width: 500px;
  min-height: 100px;
  background: #FFF;
  border: 1px solid #E5E5E5;
  align-items: center;
  padding: 20px;
`;

const Logo = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 60px;
`;

const OrderName = styled.div`
  color: #818181;
  font-size: 1.3em;
  line-height: 1.4em;
`;

function OrderListContainer() {
  const orders = useSelector(state => state.orderReducer.get('orders'));
  const dispatch = useDispatch()
  useEffect(() => {
    const getData = async () => {
      const result = await mockGet()
      const orderGroup = orderGroupByStatus(result.orders, GROUP_RULES)
      dispatch({
        type: 'LOAD_ORDERS',
        orders: orderGroup,
      });
    }
    getData()
  }, [dispatch]);
  const renderHeader = useCallback((index, title) => {
    return (
      <Header key={title}>
        <DividIcon />
        {title}
      </Header>
    )
  }, []);
  const renderRow = useCallback((index, item) => {
    const isProcessing = item.status.code <= 2
    return (
      <OrderRow key={index}>
        <Logo src={item.logo} />
        <div style={{
          display: 'flex',
          flex: 1,
          padding: 15,
          flexDirection: 'column' }}>
          <div style={{
            display: 'flex',
            flex: 1,
            justifyContent: 'space-between',
            flexDirection: 'row' }}>
            <p>{item.status.type}</p>
            {isProcessing && <p>預計出貨 : {item.date}</p>}
          </div>
          <OrderName>
            {item.name}
          </OrderName>
        </div>
        <FontAwesomeIcon icon={faChevronRight} color={'#818181'} size="lg" />
      </OrderRow>
    )
  }, []);
  return (
    <>
      <SectionList
        data={orders}
        renderHeader={renderHeader}
        renderRow={renderRow}
      />
    </>
  );
}

export default React.memo(OrderListContainer);
