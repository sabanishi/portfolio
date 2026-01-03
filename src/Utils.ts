export const isYouTube = (url:string) : boolean =>{
    return url.includes("youtube.com") || url.includes("youtu.be");
}

export const getYouTubeId = (url:string) : string =>{
    if (url.includes("youtu.be/")) {
        return url.split("youtu.be/")[1].split("?")[0];
    }
    const match = url.match(/[?&]v=([^&]+)/);
    return match ? match[1] : "";
}