import styled from "styled-components";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
export const FormSection = styled.div`
  /* color: #fff; */
  padding: 160px 0;
  min-height: 100vh;
  /* background: ${({ inverse }) => (inverse ? "#101522" : "#fff")}; */
  box-shadow: inset 0 0 0 1000px rgba(0, 0, 0, 0.2);
  background: linear-gradient(
    190deg,
    rgba(255, 203, 195, 1) 40%,
    rgba(173, 105, 111, 1) 100%
  );
`;

export const FormTitle = styled.h1`
  margin-bottom: 24px;
  font-size: 48px;
  line-height: 1.1;
  font-weight: 600;
`;

export const FormContainer = styled.div`
  display: flex;
`;
export const FormColumn = styled.div`
  /* margin-bottom: 15px; */
  padding: 50px;
  background: #fff;
  border: 20px;
  //padding: ${({ small }) => (small ? "0 50px" : "0 15px")};
  flex: 1;
  max-width: 60%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
  flex-direction: column;
  @media screen and (max-width: 768px) {
    max-width: 100% !important;
    flex-basis: 100%;
  }

  img {
    @media screen and (max-width: 768px) {
      display: none;
    }
  }
`;

export const FormRow = styled.div`
  display: flex;
  justify-content: center;
  margin: 0 -15px -15px -15px;
  flex-wrap: wrap;
  align-items: center;
`;

export const FormWrapper = styled.form`
  /* max-width: 540px; */
  padding-top: 0;
  width: 100%;
`;

export const FormMessage = styled(motion.div)`
  color: ${({ error }) => (error ? "red" : "green")};
  padding: 5px;
  text-align: center;
  margin-top: 1rem;
`;

export const FormLinkWrapper = styled.div`
  padding: 5px;
  text-align: center;
  margin-top: 1.1rem;
`;
export const FormLink = styled(Link)`
  margin-left: 5px;
  color: #afafaf;

  &:hover {
    color: #ad696f;
  }
`;

export const FormInputRow = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: stretch; //nashi nusit by default strech
  margin-bottom: 1.4rem;

  > p {
    font-size: 0.8rem;
    margin-top: 0.5rem;
    color: #f00e0e;
  }
`;
export const FormInput = styled.input`
  display: block;
  padding-left: 10px;
  outline: none;
  border-radius: 2px;
  height: 40px;
  width: 100%;
  border: none;
  border-bottom: 1px solid #cfcfcf;
  font-size: 1.1rem;
`;

export const FormLabel = styled.label`
  display: inline-block; // xoi inline boi bekain ba block abet inline-block halbzherin
  font-size: 0.9rem;
  margin-bottom: 0.3rem;
  color: #afafaf;
`;
export const FormImgWrapper = styled.div`
  max-width: 555px;
  display: flex;
  justify-content: ${({ start }) => (start ? "flex-start" : "flex-end")};
`;
export const FormImg = styled.img`
  padding-right: 0;
  border: 0;
  max-width: 100%;
  vertical-align: middle;
  display: inline-block;
  max-height: 500px;
`;

export const FormButton = styled.button`
  border-radius: 4px;
  background: none;
  margin-top: 1.5rem;
  white-space: nowrap;
  /* color: #fff; */
  outline: none;
  width: 100%;
  font-size: 1.4rem;
  padding: 5px 15px;
  border: 2px solid #AE7175;
  border: 2px solid #AE7175;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  color: #AE7175;
  z-index: 1;

  &:before {
    background: #AE7175;
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    z-index: -1;
    width: 100%;
    height: 0;
    transition: all 0.6s ease;
    transform: translate(-50%, -50%) rotate(45deg);
  }
  &:hover:before {
    height: 1200%;
  }
  &:hover {
    color: #fff;
  }
`;
