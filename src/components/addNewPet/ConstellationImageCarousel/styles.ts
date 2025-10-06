import styled from "styled-components"
import Image from "next/image";

export const Container = styled.div`
  position: relative;
  width: 328px;
  height: 402px;
  padding: 16px 0;
  margin: 0 auto;
  gap: 10.75px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow: hidden;
`

export const SlideWrapper = styled.div`
  position: relative;
  width: 328px;
  height: 310px;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const ImageWrapper = styled.div`
  width: 232px;
  height: 310px;
  padding: 14.33px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #2A2F39;
  border-radius: 14.33px;
`

export const SlideImage = styled(Image)`
  width: 220px;
  height: 300px;
  border-radius: 12px;
  object-fit: cover;
  transition: all 0.3s ease;
`

export const ArrowButton = styled.button`
  background: none;
  border: none;
  color: white;
  cursor: pointer;
  opacity: 0.8;
  transition: opacity 0.2s ease;

    &:disabled {
        opacity: 0.3;
        cursor: default;
    }

  &:hover {
    opacity: 1;
  }
`

export const Dots = styled.div`
  display: flex;
  gap: 4px;
  position: absolute;
  bottom: 12px;
`

export const Dot = styled.div<{ active: boolean }>`
  width: ${(props) => (props.active ? "24px" : "6px")};
  height: 6px;
  background-color: ${(props) => (props.active ? "#AFCBFB" : "#3C424B")};
  border-radius: 999px;
  transition: all 0.3s ease;
`
