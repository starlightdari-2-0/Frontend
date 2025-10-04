import styled, { css } from "styled-components"
import { ReactNode } from "react"

interface Props {
    isActive: boolean
    children: ReactNode
    direction?: "left" | "right" // ← 방향 옵션 추가
}

export const TransitionWrapper = ({ isActive, children, direction = "left" }: Props) => {
    return (
        <Wrapper isActive={isActive} direction={direction}>
            {children}
        </Wrapper>
    )
}

const Wrapper = styled.div<{ isActive: boolean; direction: "left" | "right" }>`
  position: absolute;
  width: fit-content;
  height: 100%;
  top: 0;
  left: 16px;
  opacity: ${({ isActive }) => (isActive ? 1 : 0)};
  transform: ${({ isActive, direction }) =>
        isActive
            ? "translateX(0)"
            : direction === "left"
                ? "translateX(100%)"
                : "translateX(-100%)"};
  transition: all 0.45s cubic-bezier(0.4, 0, 0.2, 1);

  ${({ isActive }) =>
        !isActive &&
        css`
      pointer-events: none;
      position: absolute;
    `}
`
