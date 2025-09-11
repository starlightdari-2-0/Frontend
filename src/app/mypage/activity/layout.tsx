"use client";

import React from "react";
import styled from "styled-components";
import TabMenu from "../../../components/activity/tabMenu";

export default function MyActivityLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Container>
      <Header>
        <BackButton onClick={() => history.back()}>←</BackButton>
        <Title>나의 활동</Title>
      </Header>
      <TabMenu />
      <Content>{children}</Content>
    </Container>
  );
}

const Container = styled.div`
  background: #1F2027;
  color: #fff;
  min-height: 100vh;
  padding: 1rem;

  width: 360px;
  height: 780px;
  min-width: 360px;
  max-width: 767px;
  padding-right: 16px;
  padding-left: 16px;
  opacity: 1;

`;

const Header = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
`;

const BackButton = styled.button`
  background: none;
  border: none;
  color: #fff;
  font-size: 1.25rem;
  cursor: pointer;
  margin-right: 1rem;
`;

const Title = styled.h1`
  font-size: 1.25rem;
  font-weight: bold;
`;

const Content = styled.div`
`;
