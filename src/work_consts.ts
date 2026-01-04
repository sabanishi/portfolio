import { ContentData } from './types';

export const CONTENTS: ContentData[] = [
    {
        id: "prometary",
        title: "Prometary",
        date: "2024/11/3",
        thumbnail: "prometary_0.webp",
        media: ["prometary_1.webp","prometary_2.webp","prometary_3.webp","prometary_4.webp"],
        description:"LLMを活用してオリジナルのキャラクターを生成し、キャラクター同士の交流を楽しむゲーム。\n" +
            "株式会社CoilSiteにて制作に携わっています。\n" +
            "Unityエンジニアとしての業務を中心に、ユーザーデータを管理するためのFirebaseの運用や、自動ビルド機能の整備なども担当しています。",
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
        thumbnail: "screen_0.webp",
        media: ["screen_0.webp"],
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
        thumbnail: "arp_0.webp",
        media: ["arp_0.webp", "arp_1.webp", "arp_2.webp", "https://www.youtube.com/watch?v=5yICzq60zt0"],
        description:"2023年にサークル内ハッカソンにて製作した２人協力非対称型パズルゲーム。\n" +
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
        thumbnail: "portfolio_0.webp",
        media: ["portfolio_0.webp"],
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
        thumbnail: "tami_0.webp",
        media: ["tami_0.gif", "tami_1.webp"],
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
        thumbnail: "kiritan_0.webp",
        media: ["kiritan_0.webp", "kiritan_1.webp", "kiritan_2.webp"],
        description:"東北応援キャラクターの一人「東北きりたん」の二次創作ゲーム。\n" +
            "2週間ほどで製作しました。\n" +
            "ゲーム完成後にニコニコ動画に動画を投稿してみました。",
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
    {
        id: "box",
        title: "ハコぶちゃん",
        date: "2022/8/1",
        thumbnail: "box_0.webp",
        media: ["box_0.webp", "box_1.webp", "box_2.webp", "box_3.webp", "https://www.youtube.com/watch?v=5yICzq60zt0"],
        description:"箱を運ぶパズルゲーム。\n" +
            "マリオメーカーのようなパズル製作機能を実装し、ユーザーが作ったパズルを共有できる機能を実装しました。\n" +
            "また、このゲームは第15回Game^3に出展しました。",
        links: [
            {
                name: "GitHubリポジトリ",
                url: "https://github.com/sabanishi/BoxChan",
            },
            {
                name: "ゲームリンク",
                url: "https://sabanishi.github.io/BoxChanShow/",
            },
            {
                name: "第15回Game^3 HP",
                url: "https://game3.trap.jp/15th/"
            },
        ]
    },
    {
        id: "dear",
        title: "Dear for Dead",
        date: "2022/6/20",
        thumbnail: "dear_0.webp",
        media: ["dear_0.webp", "dear_1.webp", "dear_2.webp"],
        description:"2023年にサークル内ハッカソンにて製作したゲーム。\n" +
            "死体を漁って手に入れたアイテムを合成して価値の高いアイテムを生成、売却し、最終的な売却金額を競います。\n" +
            "全体マネジメントとアイテム合成画面・シーン遷移機構などの実装を担当しました。\n" +
            "操作方法\n" +
            "WASD: 移動\n" +
            "F: 死体漁り、施設に入る",
        links: [
            {
                name: "ゲームリンク",
                url: "http://main.game.hackathon23spring_18.trap.show/",
            },
        ]
    },
    {
        id: "ichigo",
        title: "百鬼夜行記",
        date: "2022/6/20",
        thumbnail: "ichigo_0.webp",
        media: ["ichigo_0.webp", "ichigo_1.webp", "ichigo_2.webp", "ichigo_3.webp"],
        description:"2022年に製作した弾幕シューティングゲーム。\n" +
            "全てのプログラムの実装と弾幕パターンの設計を担当しました。",
        links: [
            {
                name: "GitHubリポジトリ",
                url: "https://github.com/sabanishi/Ichigojam2022spring"
            },
            {
                name: "ゲームリンク",
                url: "https://sabanishi.github.io/Ichigojam2022spring/",
            },
        ]
    },
    {
        id: "sound",
        title: "Unityサウンドマネージャー",
        date: "2022/2/20",
        thumbnail: "sound_0.webp",
        media: ["sound_0.webp"],
        description:"音声を管理、再生するためのUnityライブラリ。\n" +
            "いくつかUnityでゲームを制作した際に共通して使用するSoundManagerをパッケージ化しました。\n" +
            "列挙型による音声指定と、列挙型の自動生成が特徴です。",
        links: [
            {
                name: "GitHubリポジトリ",
                url: "https://github.com/sabanishi/SoundManager"
            },
        ]
    },
    {
        id: "fishing",
        title: "サカナクラウド",
        date: "2024/1/1",
        thumbnail: "fishing_0.webp",
        media: ["fishing_0.webp", "fishing_1.webp", "fishing_2.webp", "fishing_3.webp"],
        description:"AR空間上で魚釣りを行い、釣ったサカナをアクアリウムに入れて鑑賞するゲーム。\n" +
            "株式会社CoilSiteにて制作に携わっていました。\n" +
            "多言語対応、Firebaseを用いたユーザーデータの管理、アクアリウム画面でのインテリアの配置、魚の思考ロジックの実装などを担当しました。",
        links: [
            {
                name: "App Store",
                url: "https://apps.apple.com/jp/app/id6478481049",
            },
            {
                name: "Google Play Store",
                url: "https://play.google.com/store/apps/details?id=com.CoilSite.FishcloudApp&hl=ja",
            }
        ]
    },
];
