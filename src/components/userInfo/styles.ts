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

export const UserSkeletonImage = styled.div`
  width: 80px;
  height: 80px;
  border-radius: 999px;
  background: #fff;
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

export const UserSkeletonNickname = styled.div`
  width: 40px;
  height: 21px;
  border-radius: 10px;
  background: #fff;
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

export const SkeletonButton = styled.div`
  width: 74px;
  height: 40px;
  border-radius: 10px;
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
