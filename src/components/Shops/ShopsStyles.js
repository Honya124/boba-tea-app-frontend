import styled from "styled-components";

export const ShopsSection = styled.div`
  height: 100vh;
  padding-top: clamp(70px, 25vh, 220px);
  /* background: #ffcbc3; */
  /* box-shadow: inset 0 0 0 1000px rgba(0, 0, 0, 0.1); */
`;

export const ShopsTextWrapper = styled.div`
  position: relative;
  margin-bottom: 1rem;
  padding: 0 0 20px;
`;
export const ShopsTitle = styled.h2`
  text-align: center;
  font-size: clamp(1.3rem, 13vw, 3.1rem);
  color: #AE7175;
  letter-spacing: 0.2rem;
  line-height: 1.06;
  margin: auto;
`;
export const ShopsWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  column-gap: 6rem;
  margin: 3rem 0;
  @media screen and (max-width: 760px) {
    column-gap: 3rem;
  }
`;

export const ShopsColumn = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  row-gap: 1rem;
  cursor: pointer;
  outline: none;
  white-space: nowrap;
  border: none;
  background: transparent;
  /* color: #AE7175; */

  color: ${({inverse}) => (inverse ? inverse:"#b77076"  )};
 

  @media screen and (max-width: 760px) {
    width: 100%;
  }
`;
export const ShopsIconText = styled.p`
  text-transform: uppercase;
  //color: #AE7175;
  font-size: clamp(0.7rem, 1.3vw, 1.2rem);
`;
export const ShopIconWrapper = styled.div``;

export const ShopsPaginateWrapper = styled.div`
  position: relative;

  width: 100%;
  .pagination {
    list-style: none;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 5rem;
    font-size: 1.2rem;
    gap: 5px;
  }

  .page-num {
    cursor: pointer;
    padding: 8px 15px;
    border-radius: 3px;
    font-weight: 400;
    &:hover {
      background: #AE7175;
      color: #fff;
    }
  }
  .active {
    background: #AE7175;
  }
`;
