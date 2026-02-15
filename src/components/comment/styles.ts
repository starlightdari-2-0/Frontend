import styled from "styled-components";
import Image from "next/image";

export const CommentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding-top: 16px;
  padding-bottom: 16px;
  gap: 16px;
`;

export const Header = styled.div`
  display: flex;
  height: 36px;
  gap: 12px;
  align-items: center;
`;

export const Content = styled.div`
  width: 100%;
  padding-right: 12px;
  padding-left: 12px;
  font-family: Pretendard;
  font-weight: 400;
  font-size: 14px;
  line-height: 150%;
  color: #d9e0ed;
`;

export const AuthorImage = styled(Image)`
  width: 36px;
  height: 36px;
  border-radius: 999px;
`;

export const Nickname = styled.div`
  font-family: Pretendard;
  font-weight: 500;
  font-size: 14px;
  line-height: 150%;
  color: #a5b4c5;
`;

export const Date = styled.div`
  font-family: Pretendard;
  font-weight: 500;
  font-size: 12px;
  line-height: 150%;
  letter-spacing: 0%;
  color: #7d8799;
`;

export const Bottom = styled.div`
  width: 100%;
  height: 48px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Reaction = styled.div`
  display: flex;
`;

export const Item = styled.span`
  display: flex;
  gap: 4px;
  padding-right: 12px;
  padding-left: 12px;
  font-family: Pretendard;
  font-weight: 500;
  font-size: 12px;
  line-height: 150%;
  color: #7d8799;
`;

export const More = styled.button`
  border: none;
  background: none;
`;

export const Reply = styled.div`
  display: flex;
  gap: 12px;
  width: 100%;

  /* ㄴ자 아이콘 뒤에 오는 Comment 컴포넌트의 너비 조절 */
  & > div:last-child {
      flex: 1;
      /* 대댓글은 부모보다 좁아져야 하므로 들여쓰기만큼 계산 */
      width: calc(100% - 36px); 
  }
`;
