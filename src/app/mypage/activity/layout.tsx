"use client";

import React from "react";
import TabMenu from "../../../components/activity/tabMenu";
import { Container } from "./styles";
import Header from "../../../components/header";

export default function MyActivityLayout({ children }: { children: React.ReactNode }) {

  return (
    <Container>
      <Header title="나의 활동" backUrl="/mypage/myInfo" />
      <TabMenu />
      <div>{children}</div>
    </Container >
  );
}