import { useState } from "react";
import { useRouter } from "next/navigation";
import { BackButton, CloseButton, EmptyText, IconButton, InputWrapper, Left, RecentTitle, Row, SearchBar, SearchButton, SearchInput, SearchWrapper, ToggleRow, Word } from "./styles";
import Image from "next/image";
import back from "/public/goBack.svg";
import search from "/public/searchbar_search.svg";
import X from "/public/inputbox_X.svg";

export default function Search() {
    const router = useRouter();

    const [autoSave, setAutoSave] = useState<boolean>(true);
    const [keyword, setKeyword] = useState<string>("");
    const [history, setHistory] = useState<string[]>([]);

    const onSearch = () => {
        if (!keyword.trim()) return;

        // 중복 검색어 방지
        setHistory((prev: string[]) => {
            const newHistory = prev.filter(h => h !== keyword);
            return autoSave ? [keyword, ...newHistory] : prev;
        });

        // 실제 검색 결과 페이지로 이동 등의 로직이 여기에 추가됩니다.
        alert(`검색 실행: ${keyword}`);
    };

    const deleteItem = (item: string) => {
        setHistory((prev: string[]) => prev.filter((h: string) => h !== item));
    };

    const handleBack = () => {
        router.back();
    };

    return (
        <SearchWrapper>
            <SearchBar>
                <BackButton
                    src={back}
                    alt="go back"
                    onClick={handleBack}
                />
                <InputWrapper>
                    <SearchInput
                        placeholder="검색어를 입력해주세요"
                        value={keyword}
                        onChange={(e) => setKeyword(e.target.value)}
                        onKeyDown={(e) => {
                            if (e.key === 'Enter') onSearch();
                        }}
                    />
                    <SearchButton onClick={onSearch}><Image src={search} alt="" /></SearchButton>
                </InputWrapper>
            </SearchBar>

            <RecentTitle>최근 검색</RecentTitle>

            {autoSave ? (
                history.length === 0 ?
                    <EmptyText>최근 검색어 내역이 없어요</EmptyText> :
                    (history.map((item, idx) => (
                        <Row key={idx}>
                            <Left>
                                <Image src={search} alt="" width={24} height={24} />
                                <Word>{item}</Word>
                            </Left>
                            <IconButton onClick={() => deleteItem(item)}><Image src={X} alt="" /></IconButton>
                        </Row>
                    )))
            ) : (
                <EmptyText>검색어 저장 기능이 꺼져 있어요</EmptyText>
            )}

            <ToggleRow>
                <CloseButton onClick={() => setAutoSave(!autoSave)}>
                    {autoSave ? "자동저장 끄기" : "자동저장 켜기"}
                </CloseButton>
                <CloseButton onClick={() => alert("닫기!")}>
                    닫기
                </CloseButton>
            </ToggleRow>
        </SearchWrapper>
    );
}
