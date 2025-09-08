// import "../globals.css";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import chevron_up from "/public/chevron_up.svg";
import chevron_down from "/public/chevron_down.svg";
import { useRouter } from "next/navigation";
import LogoutButton from "../logoutButton";
import axios from "axios";
import { Wrapper, Profile, ProfilePhoto, User, UserName, MenuBar, Menu, SubMenu, PetImage, Item, PetItem, ToggleButton, AlertBadge, NoPet, Button } from "./styles"

interface NavBarProps {
  isOpen: boolean;
  navRef: React.RefObject<HTMLDivElement | null>;
}

interface UserData {
  name: string;
  profileUrl: string;
  petList: {
    pet_id: number;
    pet_img: string;
    pet_name: string;
  }[];
}

const NavBar = ({ isOpen, navRef }: NavBarProps) => {
  const server_url = process.env.NEXT_PUBLIC_SERVER_URL;

  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [userData, setUserData] = useState<UserData | null>(null);

  const [isMyPageSubMenuOpen, setIsMyPageSubMenuOpen] = useState(false);
  const [isMyStarSubMenuOpen, setIsMyStarSubMenuOpen] = useState(false);

  useEffect(() => {
    const getUserInfo = async () => {
      try {
        const response = await axios({
          method: "GET",
          url: `http://${server_url}:8080/member/nav`,
          withCredentials: true,
        });

        console.log("서버 응답:", response);

        setUserData(response.data);
        setLoading(false);
      } catch (error) {
        console.error("유저 정보 요청 중 오류 발생:", error);
        setLoading(false);
      }
    };

    getUserInfo();
  }, []);

  if (loading) {
    return (
      <Wrapper isOpen={isOpen} ref={navRef}>
        <Profile>
          <div>유저 정보를 받아오고 있어요...</div>
        </Profile>
        <MenuBar>
          <Menu onClick={() => setIsMyPageSubMenuOpen(!isMyPageSubMenuOpen)}>
            마이페이지
            <ToggleButton>
              {isMyPageSubMenuOpen ? (
                <Image src={chevron_up} alt="chevron_up" />
              ) : (
                <Image src={chevron_down} alt="chevron_down" />
              )}
            </ToggleButton>
          </Menu>
          {isMyPageSubMenuOpen && (
            <SubMenu>
              <Item onClick={() => router.push(`/mypage/myInfo`)}>내 정보</Item>
              <Item onClick={() => router.push(`/mypage/myStars`)}>
                나의 추억별
              </Item>
            </SubMenu>
          )}
          <Menu onClick={() => setIsMyStarSubMenuOpen(!isMyStarSubMenuOpen)}>
            나의 별자리
            <ToggleButton>
              {isMyStarSubMenuOpen ? (
                <Image src={chevron_up} alt="chevron_up" />
              ) : (
                <Image src={chevron_down} alt="chevron_down" />
              )}
            </ToggleButton>
          </Menu>
          {isMyStarSubMenuOpen && (
            <SubMenu>
              <div style={{ padding: "10px" }}>
                유저 정보를 받아오고 있어요...
              </div>
            </SubMenu>
          )}
          <Menu onClick={() => router.push(`/memoryAlbum`)}>
            추억앨범
            <AlertBadge />
          </Menu>
          <Menu onClick={() => router.push(`/starCommunity`)}>별빛 저장소</Menu>
        </MenuBar>
      </Wrapper>
    );
  }

  return (
    <Wrapper isOpen={isOpen} ref={navRef}>
      <Profile>
        {userData ? (
          <>
            <ProfilePhoto
              src={userData.profileUrl}
              alt="kakaotalk profile photo"
            />
            <User>
              <UserName>{userData.name}</UserName>
              <span>님</span>
            </User>
            <LogoutButton />
          </>
        ) : (
          <div style={{ paddingLeft: "10px" }}>
            유저 정보가 존재하지 않습니다.
          </div>
        )}
      </Profile>
      <MenuBar>
        <Menu onClick={() => setIsMyPageSubMenuOpen(!isMyPageSubMenuOpen)}>
          마이페이지
          <ToggleButton>
            {isMyPageSubMenuOpen ? (
              <Image src={chevron_up} alt="chevron_up" />
            ) : (
              <Image src={chevron_down} alt="chevron_down" />
            )}
          </ToggleButton>
        </Menu>
        {isMyPageSubMenuOpen && (
          <SubMenu>
            <Item onClick={() => router.push(`/mypage/myInfo`)}>내 정보</Item>
            <Item onClick={() => router.push(`/mypage/myStars`)}>
              나의 추억별
            </Item>
          </SubMenu>
        )}
        <Menu onClick={() => setIsMyStarSubMenuOpen(!isMyStarSubMenuOpen)}>
          나의 별자리
          <ToggleButton>
            {isMyStarSubMenuOpen ? (
              <Image src={chevron_up} alt="chevron_up" />
            ) : (
              <Image src={chevron_down} alt="chevron_down" />
            )}
          </ToggleButton>
        </Menu>
        {isMyStarSubMenuOpen && (
          <SubMenu>
            {userData ? (
              !userData.petList || userData?.petList.length === 0 ? (
                <NoPet>
                  <div>아직 별자리가 없어요.</div>
                  <div>새 별자리를 만들어 보세요.</div>
                  <Button onClick={() => router.push("/add_new_animal")}>
                    별자리 만들러 가기
                  </Button>
                </NoPet>
              ) : (
                userData.petList.map((item, index) => (
                  <PetItem
                    key={index}
                    onClick={() => router.push(`/main/${item.pet_id}`)}
                  >
                    <PetImage src={item.pet_img} alt="" />
                    {item.pet_name}
                  </PetItem>
                ))
              )
            ) : (
              <div style={{ padding: "10px" }}>
                유저 정보가 존재하지 않습니다.
              </div>
            )}
          </SubMenu>
        )}
        <Menu onClick={() => router.push(`/memoryAlbum`)}>
          추억앨범
          <AlertBadge />
        </Menu>
        <Menu onClick={() => router.push(`/starCommunity`)}>별빛 저장소</Menu>
      </MenuBar>
    </Wrapper>
  );
};

export default NavBar;
