import { useEffect, useState } from 'react';
import { API } from '../../../config';
import { customAxios } from '../../../API/API';
import Count from '../../../components/Count/Count';
import styled from 'styled-components';

const OrderProduct = () => {
  // orderProductData(상품정보) 받아오기 위한 state
  const [orderProductData, setOrderProductData] = useState([]);
  // deliveryFee(배달비)를 받아오기 위한 state
  const [deliveryFee, setDeliveryFee] = useState(0);

  // 페이지 진입시 orderProductRequest 함수를 실행시킴
  useEffect(() => {
    orderProductRequest();
  }, []);

  // customAxios를 이용하여 CART_PRODUCT라는 json파일에 대한 데이터를 받아옴
  // 데이터를 성공적으로 받아오면 setOrderProductData 통해 orderProductData 상태를 업데이트
  // 마찬가지로 setDeliveryFee를 통해 deliveryFee를 띄움
  // 에러발생시 경고창을 띄움
  const orderProductRequest = async () => {
    const request = await customAxios //eslint-disable-line no-unused-vars
      .get(API.CART_PRODUCT)
      .then(response => {
        setOrderProductData(response.data.result.products);
        setDeliveryFee(response.data.result.deliveryFee);
      })
      .catch(error => {
        if (error) {
          alert('데이터를 받아오던 중 에러가 발생했습니다.');
        }
      });
  };

  // 여러 값을 하나로 합치는 reduce 함수를 사용
  // total: { price }들의 누적값으로, {price}가 더해질 때마다 업데이트 됨
  // { price }: 각 상품의 개별 가격
  const orderAmount = orderProductData.reduce((total, { price }) => {
    // 현재까지의 누적된 금액에 각 제품의 개별 가격을 더하여 총 상품금액을 도출함
    return total + price;
    // 누적값인 total의 초기값은 0
  }, 0);

  // 배송비를 포함한 총 금액
  const totalAmount = orderAmount + deliveryFee;

  return (
    <>
      {orderProductData.length > 0 ? (
        <>
          <tbody>
            {orderProductData.map(({ id, src, alt, name, price, count }) => (
              <OrderTableBody key={id}>
                <td colSpan={2}>
                  <OrderProductWrap>
                    <OrderProductImg>
                      <img src={src} alt={alt} />
                    </OrderProductImg>
                    <span>{name}</span>
                  </OrderProductWrap>
                </td>
                <td>
                  <OrderCountWrap>
                    <Count size="small" count={count} />
                  </OrderCountWrap>
                </td>
                <td colSpan={2}>
                  <OrderPriceWrap>
                    <span>{`${(price * count).toLocaleString('ko-KR')}`}</span>{' '}
                    원
                  </OrderPriceWrap>
                  <ProductDeleteBtnWrap>
                    <img
                      src="./public/images/ProductDeleteButton.png"
                      alt="상품이미지"
                    />
                  </ProductDeleteBtnWrap>
                </td>
              </OrderTableBody>
            ))}
          </tbody>
          <tfoot>
            <OrderTableFoot>
              <td colSpan={5}>
                <TotalPriceWrap>
                  <span>
                    주문금액&nbsp;{`${orderAmount.toLocaleString('ko-KR')} 원`}
                  </span>
                  -<span>할인금액 0원</span>+
                  <span>
                    배송비&nbsp;{`${deliveryFee.toLocaleString('ko-KR')} 원`}
                  </span>
                  =
                  <span>
                    결제 예상 금액&nbsp;
                    <TotalAmountBox>{`${totalAmount.toLocaleString(
                      'ko-KR',
                    )} 원`}</TotalAmountBox>
                  </span>
                </TotalPriceWrap>
              </td>
            </OrderTableFoot>
          </tfoot>
        </>
      ) : (
        <tbody>
          <CartEmptyBox>
            <td colSpan={5}>장바구니가 비어 있습니다.</td>
          </CartEmptyBox>
        </tbody>
      )}
    </>
  );
};

export default OrderProduct;

const FlexCenter = `
  display: flex;
  align-items: center;
`;

const OrderTableBody = styled.tr`
  border-bottom: 1px solid ${props => props.theme.grayscaleC};
  position: relative;

  &:last-child {
    border-bottom: 2px solid ${props => props.theme.grayscaleC};
  }

  & > td {
    padding: 20px 10px;
    vertical-align: middle;
  }
`;

const OrderProductWrap = styled.div`
  ${FlexCenter};
`;

const OrderProductImg = styled.div`
  width: 70px;
  margin-right: 15px;
`;

const OrderCountWrap = styled.div`
  width: 110px;
  margin: 0 auto;
`;

const OrderPriceWrap = styled.div`
  text-align: center;

  & > span {
    font-weight: 700;
  }
`;

const OrderTableFoot = styled.tr`
  background-color: #f6e6d9;
`;

const TotalPriceWrap = styled.div`
  margin: 40px 0;
  font-size: 17px;
  font-weight: 700;
  text-align: center;

  & > span {
    margin: 0 20px;

    &:last-child {
      font-size: 20px;
    }
  }
`;

const TotalAmountBox = styled.span`
  color: ${props => props.theme.primaryColor};
`;

const ProductDeleteBtnWrap = styled.div`
  width: 28px;
  top: 40%;
  right: 10px;
  position: absolute;
`;

const CartEmptyBox = styled.tr`
  text-align: center;

  & > td {
    padding: 20px 10px;
  }
`;