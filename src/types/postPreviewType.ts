
export interface PostPreviewType {
    id: number;
    author: string;
    title: string;
    content: string;
    imageUrl?: string;
    likes: {
        like1: number;
        like2: number;
        like3: number;
    };
    comments: number;
}