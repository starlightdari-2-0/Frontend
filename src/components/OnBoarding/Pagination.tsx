import styled from "styled-components";

interface Props {
    total: number;
    current: number;
}

export default function Pagination({ total, current }: Props) {
    return (
        <DotContainer>
            {Array.from({ length: total }).map((_, i) => (
                <Dot key={i} $active={i === current} />
            ))}
        </DotContainer>
    );
}

const DotContainer = styled.div`
  display: flex;
  gap: 4px;
  padding: 27px 0;
`;

const Dot = styled.div<{ $active: boolean }>`
  height: 6px;
  border-radius: 999px;
  transition: all 0.3s ease;
  background-color: ${(props) => (props.$active ? "#AFCBFB" : "#3C424B")};
  width: ${(props) => (props.$active ? "24px" : "6px")};
`;