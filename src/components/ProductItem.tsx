import { StyledText } from './common/Text';
import { Image as ProductImage } from './common/Image';
import { AddToCartButton } from './AddToCartButton';
import { Product } from '../types';
import { useCartState } from './hooks/useCartState';
import styled from 'styled-components';

interface ProductItemProps {
  product: Product;
}

export const ProductItem = ({ product }: ProductItemProps) => {
  const { id, name, price, imageUrl } = product;

  const { addToCartState } = useCartState(product);

  return (
    <ProductItemWrapper key={id}>
      <ProductImage
        width="260px"
        height="260px"
        source={imageUrl}
        alternative="상품 이미지"
      />
      <ProductTextWrapper>
        <div>
          <ProductTitle size="16px" weight="600">
            {name}
          </ProductTitle>
          <ProductPrice size="20px" weight="600">
            {`${price.toLocaleString('ko-KR')} 원`}
          </ProductPrice>
        </div>
        <AddToCartButton
          product={product}
          id={id}
          addToCartState={addToCartState}
        />
      </ProductTextWrapper>
    </ProductItemWrapper>
  );
};

const ProductItemWrapper = styled.div`
  width: 260px;
  margin-bottom: 20px;
`;

const ProductTextWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 10px 10px 10px;
`;

const ProductTitle = styled(StyledText)`
  margin: 0 0 10px 0;
`;
const ProductPrice = styled(StyledText)`
  margin: 0 0 6px 0;
`;
