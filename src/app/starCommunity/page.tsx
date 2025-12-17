"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";
import StarPage from "../../components/starModal";
import { Body, Container, MemoryStarList } from "./styles";
import Header from "../../components/CommunityHeader";
import { CommunityTabs } from "../../components/CommunityTabs";
import { CategoryBar } from "../../components/CommunityCategories";
import { PostCard } from "../../components/PostCard";
import { PostPreviewType } from "../../types/postPreviewType";
import NavBar from "../../components/navBar";
import { WriteButton } from "../../components/NewPostButton";

interface MemoryStar {
  memory_id: number;
  name: string;
  writer_name: string;
  img_url: string;
}

const MemoryPage = () => {
  const server_url = process.env.NEXT_PUBLIC_SERVER_URL;

  const [memoryStars, setMemoryStars] = useState<MemoryStar[]>([]);
  const [selectedMemoryId, setSelectedMemoryId] = useState<number | null>(null);
  const [loading, setLoading] = useState(true);

  const openStarInfoModal = (memoryId: number) => {
    setSelectedMemoryId(memoryId);
  };

  const closeStarInfoModal = () => {
    setSelectedMemoryId(null);
  };

  useEffect(() => {
    const getStarArchiveData = async () => {
      try {
        const response = await axios({
          method: "GET",
          url: `${server_url}/memory-stars/public`,
          //   withCredentials: true,
        });

        console.log("서버 응답:", response);
        setMemoryStars(response.data);
        setLoading(false);
      } catch (error) {
        console.error("추억저장소 데이터 요청 중 오류 발생:", error);
        setLoading(false);
      }
    };
    getStarArchiveData();
  }, []);

  // if (loading) {
  //   return (
  //     <>
  //       <Header title={"커뮤니티"} onTitleClick={() => console.log("검색 버튼 클릭")} />
  //       <Body>
  //         <TitleWrapper>
  //           <Title>별빛 저장소</Title>
  //           <Subtitle>다른 별빛들의 추억들을 둘러보세요.</Subtitle>
  //         </TitleWrapper>
  //         <Container>
  //           <MemoryStarList>
  //             <SkeletonUI />
  //             <SkeletonUI />
  //             <SkeletonUI />
  //             <SkeletonUI />
  //             <SkeletonUI />
  //             <SkeletonUI />
  //             <SkeletonUI />
  //             <SkeletonUI />
  //             <SkeletonUI />
  //             <SkeletonUI />
  //             <SkeletonUI />
  //             <SkeletonUI />
  //           </MemoryStarList>
  //         </Container>
  //       </Body>
  //     </>
  //   );
  // }
  const [activeTab, setActiveTab] = useState<'memory' | 'info'>("memory");
  const [activeCategory, setActiveCategory] = useState("전체");
  const handleTabChange = (newTab: 'memory' | 'info') => {
    setActiveTab(newTab);
    setActiveCategory("전체");
  };

  const mockPostData: PostPreviewType[] = [{
    id: 123,
    author: "닉네임",
    title: "우리 콩이, 하늘나라 별이 되었어요.",
    content: "이 내용은 컨테이너를 벗어나면 말줄임표 처리됩니다. 내용을 길게 써서 확인해보세요. 내용은 길어지면 스크롤되는 그런 방식 내용이 길어지면...",
    imageUrl: "/maru.svg",
    likes: {
      like1: 3,
      like2: 4,
      like3: 0,
    },
    comments: 6,
  }, {
    id: 125,
    author: "닉네임",
    title: "우리 콩이 귀엽죠?",
    content: "이 내용은 컨테이너를 벗어나면 말줄임표 처리됩니다. 내용을 길게 써서 확인해보세요. 내용은 길어지면 스크롤되는 그런 방식 내용이 길어지면...",
    imageUrl: "/maru.svg",
    likes: {
      like1: 0,
      like2: 10,
      like3: 0,
    },
    comments: 6,
  }, {
    id: 123,
    author: "닉네임",
    title: "콩콩",
    content: "이 내용은 컨테이너를 벗어나면 말줄임표 처리됩니다. 내용을 길게 써서 확인해보세요. 내용은 길어지면 스크롤되는 그런 방식 내용이 길어지면...",
    imageUrl: "/maru.svg",
    likes: {
      like1: 13,
      like2: 4,
      like3: 0,
    },
    comments: 8,
  }];

  return (
    <>
      <Header title={"커뮤니티"} onTitleClick={() => console.log("검색 버튼 클릭")} />
      <Body>
        <CommunityTabs activeTab={activeTab} onChange={handleTabChange} />
        <CategoryBar
          activeTab={activeTab}
          activeCategory={activeCategory}
          onSelectCategory={setActiveCategory}
        />

        <Container>
          {/* {memoryStars.length !== 0 ? (
            <p style={{ position: "absolute", left: "41%", top: "50%" }}>
              아직 공개된 추억들이 없어요.
            </p>
          ) : ( */}
          <MemoryStarList>
            {mockPostData.map((postItem) => (
              <PostCard key={postItem.id}
                post={postItem} />
            ))}
            {/* {memoryStars.map((starItem) => (
                <PostCard 
                    key={starItem.memory_id} 
                    post={starItem}
                />
             ))} */}
          </MemoryStarList>
          {/* )} */}
        </Container>
        <WriteButton onClick={() => console.log("글쓰자")} />
        <NavBar />

      </Body>
    </>
  );
};

export default MemoryPage;