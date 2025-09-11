import React from "react";
import Image from "next/image";
import article from "/public/myArticle.svg";
import comment from "/public/myComment.svg";
import letter from "/public/myLetter.svg";
import { Menu, MenuItem } from "./styles";

const ActivityMenu: React.FC = () => {
    return (
        <Menu>
            <MenuItem>
                <Image src={letter} alt="letter" />
                편지
            </MenuItem>
            <MenuItem>
                <Image src={article} alt="article" />
                내 게시글
            </MenuItem>
            <MenuItem isLast>
                <Image src={comment} alt="comment" />
                내 댓글
            </MenuItem>
        </Menu>
    );
};

export default ActivityMenu;
