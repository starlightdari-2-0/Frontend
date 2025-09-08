import styled from "styled-components";
import Image from "next/image";

export const Wrapper = styled.div<{ isOpen: boolean }>`
  display: flex;
  flex-direction: column;
  background: #0c1322;
  color: #fff;
  border-radius: 7px 0 0 7px;
  position: fixed;
  top: 0;
  right: ${({ isOpen }) => (isOpen ? "0" : "-282px")};
  width: 250px;
  height: 100vh;
  padding: 16px;
  transition: right 0.3s ease-in-out;
  box-shadow: ${({ isOpen }) =>
        isOpen ? "-4px 0 10px rgba(0, 0, 0, 0.2)" : "none"};
  z-index: 1000;
`;

export const Profile = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  padding-bottom: 20px;
  position: relative;
`;

export const ProfilePhoto = styled(Image)`
  width: 40px;
  height: 40px;
  border-radius: 100px;
  background: gray;
`;

export const User = styled.div`
  display: flex;
  align-items: baseline;
  gap: 7px;
  font-size: 13px;
`;

export const UserName = styled.span`
  font-weight: 900;
  font-size: 17px;
`;

export const MenuBar = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Menu = styled.div`
  display: flex;
  align-items: center;
  padding: 20px 0 20px 10px;
  font-weight: 900;
  font-size: 20px;
  cursor: pointer;
  gap: 10px;
`;

export const SubMenu = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

export const PetImage = styled(Image)`
  width: 40px;
  height: 40px;
  border-radius: 100px;
`;

export const Item = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
  padding: 10px;
  cursor: pointer;
`;

export const PetItem = styled(Item)`
  background-color: #162132;
  cursor: pointer;
`;

export const ToggleButton = styled.button`
  display: flex;
  align-items: center;
  border: none;
  background: none;
  cursor: pointer;
`;

export const AlertBadge = styled.span``;

export const NoPet = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  padding: 30px 10px;
  height: 80px;
  align-items: center;
  // justify-content: center;
  position: relative;
`;

export const Button = styled.button`
  border: none;
  background: #22225e;
  cursor: pointer;
  padding: 10px 20px;
  color: #fff;
  border-radius: 5px;
  position: absolute;
  bottom: 10px;
`;
