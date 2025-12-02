import { ProfileRow, ProfileImg, ProfileName, SelectButton } from "./styled";
import Image from "next/image";
import defaultProfile from "/public/default_animal.svg";
import down from "/public/chevron_down.svg";

export default function ProfileSelector() {
    return (
        <ProfileRow>
            <ProfileImg src={defaultProfile} alt="profile" />
            <ProfileName>콩이 자리
                <SelectButton><Image src={down} alt="" width={24} height={24} /></SelectButton>
            </ProfileName>
        </ProfileRow>
    );
}
