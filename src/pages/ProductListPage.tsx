import { PageTitle } from '../components/PageTitle';
import { ProductItem } from '../components/ProductItem';
import { useFetch } from '../components/hooks/useFetch';
import styled from 'styled-components';
import { Product } from '../types';
import { useEffect } from 'react';

// export const getMockData = mockData;

export const ProductListPage = () => {
  const { data, getAPI } = useFetch<Product[]>();

  useEffect(() => {
    getAPI('/products');
  }, []);

  return (
    <PageContainer>
      <PageTitle>상품 리스트</PageTitle>
      <ProductListPageWrapper>
        {data?.map((item) => (
          <ProductItem key={item.id} product={item} />
        ))}
      </ProductListPageWrapper>
    </PageContainer>
  );
};

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 1200px;
  margin: 58px auto 0;
  padding: 20px 30px;
`;

const ProductListPageWrapper = styled.div`
  margin: 60px auto;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  justify-items: center;
  align-items: center;
  gap: 30px;
  justify-content: space-between;
`;
