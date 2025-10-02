import React from "react";
import Image from "next/image";
import article from "/public/myArticle.svg";
import comment from "/public/myComment.svg";
import letter from "/public/myLetter.svg";
import { Menu, MenuItem } from "./styles";
import { useRouter } from "next/navigation";

const ActivityMenu: React.FC = () => {
    const router = useRouter();

    return (
        <Menu>
            <MenuItem onClick={() => router.push("/mypage/activity/letters")}>
                <Image src={letter} alt="letter" />
                편지
            </MenuItem>
            <MenuItem onClick={() => router.push("/mypage/activity/posts")}>
                <Image src={article} alt="article" />
                내 게시글
            </MenuItem>
            <MenuItem isLast onClick={() => router.push("/mypage/activity/comments")}>
                <Image src={comment} alt="comment" />
                내 댓글
            </MenuItem>
        </Menu>
    );
};

export default ActivityMenu;
