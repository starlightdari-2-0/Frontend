import styled from "styled-components";
import Image from "next/image";

export const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  padding-top: 16px;
  padding-bottom: 16px;
  justify-content: space-between;
`;

export const UserImage = styled(Image)`
  width: 80px;
  height: 80px;
  border-radius: 999px;
  background: #fff;
`;

export const Info = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 16px;
`;

export const Nickname = styled.div`
  font-size: 16px;
  font-weight: bold;
  color: #FFFFFF;
`;

export const ChangeBtn = styled.button`
  border: none;
  cursor: pointer;
  width: 74px;
    height: 40px;
    opacity: 1;
    padding-top: 8px;
    padding-right: 16px;
    padding-bottom: 8px;
    padding-left: 16px;
    border-radius: 37px;
    background: #AFCBFB;
    color: #101014;
    font-family: Pretendard;
    font-weight: 600;
    font-size: 12px;
    line-height: 150%;
    text-align: center;
    white-space: nowrap;
`;

// 새 디자인에 맞춰 변경 필요
export const SkeletonUI = styled.div`
  width: 990px;
  height: 120px;
  border-radius: 18px;
  background: #d9d9d929;
  background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
  animation: pulse 1.7s infinite ease-in-out;
  @keyframes pulse {
    0% {
      background: rgba(200, 200, 200, 0.9);
    }
    50% {
      background: rgba(200, 200, 200, 0.5);
    }
    100% {
      background: rgba(200, 200, 200, 0.9);
    }
  }
`;
