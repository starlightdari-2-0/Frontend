import styled from "styled-components";
import Image from "next/image";

interface Props {
    data: { title: string; description: string; image: string };
}

export default function OnboardingContent({ data }: Props) {
    return (
        <Wrapper>
            <TextWrapper>
                <Title>{data.title}</Title>
                <Description>{data.description}</Description>
            </TextWrapper>
            <ImageWrapper>
                <Image src={data.image} alt="" width={300} height={300} />
            </ImageWrapper>
        </Wrapper>
    );
}

const Wrapper = styled.div`
  width: 328px;
  display: flex;
  flex-direction: column;
  gap: 89px;
`;

const TextWrapper = styled.div`
  width: 328px;
  padding: 16px 0;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const Title = styled.h1`
  font-family: Pretendard;
  font-weight: 600;
  font-size: 24px;
  line-height: 150%;
  white-space: pre-line;
  color: #d9e0ed;
`;

const Description = styled.p`
  font-family: Pretendard;
  font-weight: 400;
  font-size: 14px;
  line-height: 150%;
  color: #7d8799;
  white-space: pre-line;
`;

const ImageWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 300px;
`;