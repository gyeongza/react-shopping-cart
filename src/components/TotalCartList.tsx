import { styled } from 'styled-components';
import { StyledText } from './common/Text';
import { Button as OrderButton } from './common/Button';
import { useRecoilValue } from 'recoil';
import { checkedProductPrice } from '../atoms/CartState';

export const TotalCartList = () => {
  const totalPrice = useRecoilValue(checkedProductPrice);
  const deliveryFee = 3000;

  return (
    <TotalCartListContainer>
      <TitleWrapper>
        <TotalCartTitle size="24px">결제예상금액</TotalCartTitle>
      </TitleWrapper>
      <TotalPriceWrapper>
        <SelectedProductPrice>
          <span>총 선택상품금액</span>
          <span>{totalPrice.toLocaleString('ko-KR')} 원</span>
        </SelectedProductPrice>
        <SelectedProductPrice>
          <span>배송비</span>

          <span>{totalPrice && deliveryFee.toLocaleString('ko-KR')} 원</span>
        </SelectedProductPrice>
        <Hypen></Hypen>
        <SelectedProductPrice>
          <span>예상 주문금액</span>
          <span>
            {totalPrice && (deliveryFee + totalPrice).toLocaleString('ko-KR')}원
          </span>
        </SelectedProductPrice>
        <Hypen></Hypen>
      </TotalPriceWrapper>
      <OrderButtonWrapper>
        <OrderButton height="58px" backgroundColor="var(--label-color)">
          주문하기
        </OrderButton>
      </OrderButtonWrapper>
    </TotalCartListContainer>
  );
};

const TotalCartListContainer = styled.div`
  position: sticky;
  top: 20px;
  width: 400px;
  height: 360px;
  border: 1px solid #dddddd;
  margin: 60px 0 0 30px;
`;

const TotalCartTitle = styled(StyledText)`
  margin: 20px auto 20px 20px;
`;

const TitleWrapper = styled.div`
  border-bottom: 3px solid #dddddd;
`;

const TotalPriceWrapper = styled.div`
  padding: 28px 20px 0;

  & > :nth-child(2) {
    margin-top: 16px;
  }

  span {
    font-size: 20px;
    font-weight: 700;
  }
`;

const SelectedProductPrice = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Hypen = styled.div`
  border-bottom: 1px solid #dddddd;
  margin: 24px 0;
`;

const OrderButtonWrapper = styled.div`
  font-size: 24px;
  padding: 0px 16px 28px;
  & > button {
    color: var(--white-color);
  }
`;
