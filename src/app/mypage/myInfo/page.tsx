"use client";

import React from "react";
import Header from "../../../components/myPageHeader";
import UserInfo from "../../../components/userInfo";
import ConstellationList from "../../../components/myConstellationList";
import ActivityMenu from "../../../components/myActivityMenu";
import NavBar from "../../../components/navBar";
import Image from "next/image";
import arrow from "/public/arrow_right.svg";
import { Arrow, Container, Section, SectionHeader, SectionTitle } from "./styles";


export default function Page() {
  // mock data
  const constellations = [
    {
      id: 1,
      name: "후추 자리",
      count: 5,
      imageUrl: "https://place-puppy.com/80x80",
    },
    {
      id: 2,
      name: "초코 자리",
      count: 3,
      imageUrl: "https://placekitten.com/80/80",
    },
  ];


  return (
    <Container>
      <Header />
      <UserInfo />
      <Section>
        <SectionHeader>
          <SectionTitle>나의 활동</SectionTitle>
        </SectionHeader>
        <ActivityMenu />
      </Section>

      <Section>
        <SectionHeader>
          <SectionTitle>나의 별자리</SectionTitle>
          <Arrow><Image src={arrow} alt="move to constellation page" /></Arrow>
        </SectionHeader>
        <ConstellationList constellations={constellations} />
      </Section>

      <NavBar />
    </Container>
  );
}

