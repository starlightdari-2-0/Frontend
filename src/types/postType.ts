import { CommentType } from "./commentType";

export interface PostType {
    id: number;
    author: string;
    title: string;
    content: string;
    imageUrl?: string;
    date: string;
    likes: {
        like1: number;
        like2: number;
        like3: number;
    };
    comments: CommentType[];
}