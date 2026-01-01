interface HyperLink{
    name: string;
    url: string;
}

export interface ContentData{
    id: string;
    title: string;
    date: string;
    thumbnail: string;
    media: string[],
    description: string,
    links?: HyperLink[];
}