import styled from "styled-components";
import Image from "next/image";

export const Container = styled.div`
  width: 360px;
  overflow: hidden;
  color: #D9E0ED;
`;

export const ImageWrapper = styled.div`
  width: 100%;
  height: 360px;
  background: #f5f5f5;
`;

export const PetImage = styled(Image)`
  object-fit: cover;
`;

export const InfoCard = styled.div`
  display: flex;
  flex-direction: column;
  padding: 16px;
  background-color: #1F2027;
  border-top-left-radius: 24px;
  border-top-right-radius: 24px;
  margin-top: -80px;
  position: relative;
  gap: 12px;
  height: 468px;
`;

export const Header = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  height: 60px;
`;

export const Title = styled.h2`
  font-family: Pretendard;
  font-weight: 600;
  font-size: 18px;
  line-height: 150%;
`;

export const Row = styled.div`
  display: flex;
  gap: 8px;
`;

export const IconWrapper = styled.div<{ width?: string }>`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  background: #2A2F39;
  padding: 12px 10px;
  border-radius: 10px;
  width: ${({ width }) => width || "auto"};
  font-family: Pretendard;
  font-weight: 500;
  font-size: 16px;
  line-height: 150%;
`;

export const Section = styled.div`
  display: flex;
  gap: 12px;
  align-items: center;
`;

export const CommentSection = styled(Section)`
  gap: 8px;
  flex-direction: column;
  align-items: flex-start;
`;

export const Label = styled.div`
  color: #A5B4C5;
  font-family: Pretendard;
  font-weight: 600;
  font-size: 16px;
  line-height: 150%;
`;

export const Value = styled.div`
  font-family: Pretendard;
  font-weight: 400;
  font-size: 16px;
  line-height: 150%;
  letter-spacing: 0%;
`;

export const Description = styled.p`
  font-family: Pretendard;
  font-weight: 400;
  font-size: 14px;
  line-height: 150%;
  letter-spacing: 0%;
`;

export const Tag = styled(Value)`
  border-radius: 8px;
  padding: 4px 12px;
  background: #3C424B;
`