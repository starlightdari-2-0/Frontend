"use client";

import "../globals.css";
import React from "react";
import Header from "../../components/header";
import PetBasicInfo from "../../components/addNewPet/PetBasicInfo";
import PetPhotoUpload from "../../components/addNewPet/PetPhotoUpload";
import PetTypeSelect from "../../components/addNewPet/PetTypeSelect";
import FinalSubmit from "../../components/addNewPet/FinalSubmit";
import { Body } from "./styles";
import { TransitionWrapper } from "../../components/TransitionWrapper";
import PetFeature from "../../components/addNewPet/PetFeature";
import PetExtraInfo from "../../components/addNewPet/PetExtraInfo";
import { usePetStore } from "../../store/petStore";

export default function Page() {
  const { step } = usePetStore()

  const steps = [
    <PetBasicInfo key="basic" />,
    <PetPhotoUpload key="photo" />,
    <PetFeature key="feature" />,
    <PetExtraInfo key="extra" />,
    <PetTypeSelect key="type" />,
    <FinalSubmit key="submit" />,
  ]

  return (
    <>
      <Header />
      <Body>
        {steps.map((Component, index) => (
          <TransitionWrapper
            key={index}
            isActive={step === index}
            // 이전 스텝보다 크면 왼쪽으로, 작으면 오른쪽으로 슬라이드
            direction={index > step ? "left" : "right"}
          >
            {Component}
          </TransitionWrapper>
        ))}
      </Body>
    </>
  );
}