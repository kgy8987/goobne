import styled from 'styled-components';
import OrderProduct from './OrderProduct';
import Button from '../../../components/Button/Button';

const OrderDetail = () => {
  return (
    <OrderDetailMain>
      <OrderDetailTitleWrap>
        <h3>주문내역</h3>
        <DeleteAllBtnWrap>
          <Button size="small" color="black" content="전체삭제" />
        </DeleteAllBtnWrap>
      </OrderDetailTitleWrap>
      <OrderProductTable>
        <colgroup>
          <col width="10%" />
          <col width="40%" />
          <col width="25%" />
          <col width="20%" />
          <col width="5%" />
        </colgroup>
        <thead>
          <OrderTableHead>
            <th colSpan={2}>메뉴</th>
            <th>수량</th>
            <th colSpan={2}>금액</th>
          </OrderTableHead>
        </thead>
        <OrderProduct />
      </OrderProductTable>
      <ButtonWrap>
        <OrderBtn>
          <Button size="small" color="beige" content="+ 메뉴 추가하기" />
        </OrderBtn>
        <OrderBtnRight>
          <OrderBtn>
            <Button size="small" color="beige" content="쿠폰함" />
          </OrderBtn>
          <OrderBtn>
            <Button size="small" color="black" content="주문하기" />
          </OrderBtn>
        </OrderBtnRight>
      </ButtonWrap>
    </OrderDetailMain>
  );
};

export default OrderDetail;

const FlexBetween = `
  display: flex;
  justify-content: space-between;
`;

const OrderDetailMain = styled.div`
  width: 100%;
  padding-bottom: 80px;
`;

const OrderDetailTitleWrap = styled.div`
  ${FlexBetween};
  padding-bottom: 7px;
  border-bottom: 1px solid ${props => props.theme.grayscaleH};

  & > h3 {
    margin-right: 5px;
    font-size: 19px;
    font-weight: 700;
  }
`;

const DeleteAllBtnWrap = styled.div`
  width: 110px;
`;

const OrderProductTable = styled.table`
  display: table;
  table-layout: fixed;
  border-collapse: collapse;
  border-spacing: 0;
  width: 100%;
  font-size: 13px;
  border-bottom: 1px solid ${props => props.theme.grayscaleH};
`;

const OrderTableHead = styled.tr`
  border-bottom: 1px solid ${props => props.theme.grayscaleC};

  & > th {
    padding: 12px 0;
  }
`;

const ButtonWrap = styled.div`
  ${FlexBetween};
  margin-top: 30px;
`;

const OrderBtnRight = styled.div`
  display: flex;
  gap: 10px;
`;

const OrderBtn = styled.div`
  display: flex;
  align-items: center;
  width: 180px;
`;