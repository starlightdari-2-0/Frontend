export interface CommentType {
    id: number;
    author: string;
    content: string;
    date: string;
    replies?: CommentType[];
}
