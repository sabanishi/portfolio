import { ContentData } from './types';

export const CONTENTS: ContentData[] = [
    {
        id: "prometary",
        title: "Prometary",
        date: "2024/11/3",
        thumbnail: "prometary_0.PNG",
        media: ["prometary_1.PNG","prometary_2.PNG","prometary_3.PNG","prometary_4.PNG"],
        description:"株式会社CoilSiteで制作に携わったゲーム。\nUnityエンジニアとしての業務を中心に、ユーザーデータを管理するためのFirebaseの運用や、自動ビルド機能の整備なども担当しています。",
        links: [
            {
                name: "App Store",
                url: "https://apps.apple.com/jp/app/id6698867598",
            },
            {
                name: "Google Play Store",
                url: "https://play.google.com/store/apps/details?id=com.CoilSite.AICharacterBattle&hl=ja",
            }
        ]
    },
    {
        id: "screen",
        title: "Unityシーン管理パッケージ",
        date: "2024/1/4",
        thumbnail: "screen_0.PNG",
        media: ["screen_0.PNG"],
        description:"シーン管理を支援するためのUnityライブラリ。\n" +
            "世には高性能なシーン管理機能がたくさんありますが、1)内部構造を理解したい 2)自分で実装した方が要件に応じた改善が容易 の2点から車輪の再発明をしました。\n" +
            "シーン間のデータの受け渡しが容易な点、シーンの親子関係を構築できる点が特徴です。",
        links: [
            {
                name: "GitHubリポジトリ",
                url: "https://github.com/sabanishi/ScreenSystem",
            }
        ]
    },
    {
        id: "arp",
        title: "ARP",
        date: "2023/12/17",
        thumbnail: "arp_0.PNG",
        media: ["arp_0.PNG", "arp_1.PNG", "arp_2.PNG", "https://www.youtube.com/watch?v=5yICzq60zt0"],
        description:"2023年に部内ハッカソンにて製作した２人協力非対称型パズルゲーム。\n" +
            "シェーダー以外のほぼ全てのプログラムと、レベルデザインの一部を担当しました。",
        links: [
            {
                name: "より詳しい説明資料",
                url: "https://drive.google.com/file/d/1HYvL00un8Xfyb-vljqGSM2lZd0EWeuMa/view?usp=sharing",
            },
            {
                name: "GitHubリポジトリ",
                url: "https://github.com/sabanishi/Hackathon2023Winter",
            },
            {
                name: "アプリケーションDLリンク",
                url: "https://github.com/sabanishi/Hackathon2023Winter/releases/tag/v1.0.0"
            },
        ]
    },
    {
        id: "portfolio",
        title: "ポートフォリオ",
        date: "2026/1/1",
        thumbnail: "portfolio_0.PNG",
        media: ["portfolio_0.PNG"],
        description:"本ポートフォリオサイト。\n" +
            "SolidJSとTailwindを用いて作成し、Vercelでホスティングしています。",
        links: [
            {
                name: "GitHubリポジトリ",
                url: "https://github.com/sabanishi/portfolio",
            }
        ]
    },
    {
        id: "tami",
        title: "デスクトップマスコット",
        date: "2024/6/19",
        thumbnail: "tami_0.gif",
        media: ["tami_0.gif", "tami_1.PNG"],
        description:"かわいいデスクトップマスコット。\n" +
            "マスコットとチャットできる他、任意のGitリポジトリにコミットするとマスコットが喜んでくれます。\n" +
            "チャット機能にはOpenAI APIを用いています。\n" +
            "また、マスコットは自作のイラストをLive2Dで動かしています。",
        links: [
            {
                name: "GitHubリポジトリ",
                url: "https://github.com/sabanishi/TamiChan",
            },
            {
                name: "アプリケーションDLリンク",
                url:"https://github.com/sabanishi/TamiChan/releases/tag/0.0.2",
            }
        ]
    },
    {
        id: "kiritan",
        title: "東北きりたんの二次創作ゲーム",
        date: "2022/2/13",
        thumbnail: "kiritan_0.PNG",
        media: ["kiritan_0.PNG", "kiritan_1.PNG", "kiritan_2.PNG"],
        description:"東北応援キャラクターの一人「東北きりたん」の二次創作ゲーム。\n" +
            "2週間ほどで製作しました。\n" +
            "簡易的なパズルエディタをUnityのTilemapを用いて自作し、効率的にレベルデザインを行いました。",
        links: [
            {
                name: "GitHubリポジトリ",
                url: "https://github.com/sabanishi/KiritanPazzle",
            },
            {
                name: "ゲームリンク",
                url: "https://sabanishi.github.io/KiritanPazzle",
            }
        ]
    },
];
