import styled from "styled-components";

interface Props {
    label: string;
    onClick: () => void;
}

export default function NavigationButton({ label, onClick }: Props) {
    return <Button onClick={onClick}>{label}</Button>;
}

const Button = styled.button`
  width: 328px;
  height: 48px;
  background-color: #afcbfb;
  color: #1f2027;
  font-family: Pretendard;
  font-weight: 500;
  font-size: 18px;
  line-height: 150%;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  position: absolute;
  bottom: 40px;
`;