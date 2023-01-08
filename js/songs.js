const songs = [
    {
        song : "Ditto",
        artist : "New Jeans(뉴진스)",
    },
    {
        song : "막내",
        artist : "백예린 (Yerin Back)",
    },
    {
        song : "애련",
        artist : "컨츄리꼬꼬",
    },
    {
        song : "애태우나요",
        artist : "규현(KYUHYUN)",
    },
    {
        song : "Remember",
        artist : "Sam Ock",
    },
    {
        song : "stars",
        artist : "Arash Buana",
    },
    {
        song : "Love For A Child",
        artist : "Jason Mraz",
    },
    {
        song : "free love (dream edit)",
        artist : "HONNE",
    },
    {
        song : "그 자리에 그 시간에",
        artist : "성시경",
    },
    {
        song : "일종의 고백(Male Ver)",
        artist : "곽진언",
    },
];

const song = document.querySelector("#song span:first-child");
const artist = document.querySelector("#song span:last-child");

const todaysSong = songs[Math.floor(Math.random() * songs.length)];

song.innerText = todaysSong.song;
artist.innerText = todaysSong.artist;