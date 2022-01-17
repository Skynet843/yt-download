import axios from "axios";
// import react from "react";
import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import SongCard from "./components/SongCard";
import LandscapeCard from "./components/LandscapeCard";

function App() {
const [trend_videos,set_trend_videos]=useState({});
const [music,set_music]=useState({});
const [search_videos,set_search_videos]=useState({});
// for reso
// const [linksActive, set_linksActive]=useState(false);
// const downloadBtn=useRef(null);



// let data={
//     "contents": [
//         {
//             "video": {
//                 "channelId": "UCNApqoVYJbYSrni4YsbXzyQ",
//                 "channelName": "Aditya Music",
//                 "lengthText": "3:49",
//                 "publishedTimeText": "3 days ago",
//                 "thumbnails": [
//                     {
//                         "height": 118,
//                         "url": "https://i.ytimg.com/vi/u_wB6byrl5k/hqdefault.jpg?sqp=-oaymwEiCNIBEHZIWvKriqkDFQgBFQAAAAAYASUAAMhCPQCAokN4AQ==&rs=AOn4CLASw-ehCd88wR6GfHtCWxkJLObtWw",
//                         "width": 210
//                     },
//                     {
//                         "height": 138,
//                         "url": "https://i.ytimg.com/vi/u_wB6byrl5k/hqdefault.jpg?sqp=-oaymwEjCPYBEIoBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLCyrHtbSnufX7Zahzexhrw-flGUNw",
//                         "width": 246
//                     },
//                     {
//                         "height": 188,
//                         "url": "https://i.ytimg.com/vi/u_wB6byrl5k/hqdefault.jpg?sqp=-oaymwEjCNACELwBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLDmA660rL4RwNvthIbONxfAaLTySQ",
//                         "width": 336
//                     }
//                 ],
//                 "title": "Oo Antava..Oo Oo Antava Full Video Song | Pushpa Songs |Allu Arjun, Rashmika |DSP |Sukumar |Samantha",
//                 "videoId": "u_wB6byrl5k",
//                 "viewCountText": "27,917,665 views"
//             }
//         },
//         {
//             "video": {
//                 "channelId": "UCq-Fj5jknLsUf-MWSy4_brA",
//                 "channelName": "T-Series",
//                 "lengthText": "5:51",
//                 "publishedTimeText": "6 days ago",
//                 "thumbnails": [
//                     {
//                         "height": 118,
//                         "url": "https://i.ytimg.com/vi/hcMzwMrr1tE/hqdefault.jpg?sqp=-oaymwEiCNIBEHZIWvKriqkDFQgBFQAAAAAYASUAAMhCPQCAokN4AQ==&rs=AOn4CLC_n9Gq-nnHSv3OByM-poEJcamPsA",
//                         "width": 210
//                     },
//                     {
//                         "height": 138,
//                         "url": "https://i.ytimg.com/vi/hcMzwMrr1tE/hqdefault.jpg?sqp=-oaymwEjCPYBEIoBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLADKFHd25QhAn9RkAdQytWo1FFCXQ",
//                         "width": 246
//                     },
//                     {
//                         "height": 188,
//                         "url": "https://i.ytimg.com/vi/hcMzwMrr1tE/hqdefault.jpg?sqp=-oaymwEjCNACELwBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLCxdR2aL0u22K8vbpxkYS_-ZklA8w",
//                         "width": 336
//                     }
//                 ],
//                 "title": "Srivalli (Video) | Pushpa | Allu Arjun, Rashmika Mandanna | Javed Ali | DSP | Sukumar",
//                 "videoId": "hcMzwMrr1tE",
//                 "viewCountText": "21,367,324 views"
//             }
//         },
//         {
//             "video": {
//                 "channelId": "UCNApqoVYJbYSrni4YsbXzyQ",
//                 "channelName": "Aditya Music",
//                 "lengthText": "3:14",
//                 "publishedTimeText": "4 days ago",
//                 "thumbnails": [
//                     {
//                         "height": 118,
//                         "url": "https://i.ytimg.com/vi/-ZAnN6groJw/hqdefault.jpg?sqp=-oaymwEiCNIBEHZIWvKriqkDFQgBFQAAAAAYASUAAMhCPQCAokN4AQ==&rs=AOn4CLBttiP8lEITi6YTy_BfRWaHeTAV5A",
//                         "width": 210
//                     },
//                     {
//                         "height": 138,
//                         "url": "https://i.ytimg.com/vi/-ZAnN6groJw/hqdefault.jpg?sqp=-oaymwEjCPYBEIoBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLBsw7-o5lNU68VUBGCU-wTW6asddg",
//                         "width": 246
//                     },
//                     {
//                         "height": 188,
//                         "url": "https://i.ytimg.com/vi/-ZAnN6groJw/hqdefault.jpg?sqp=-oaymwEjCNACELwBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLByWTHrG5qpj_743L8Og4c8xtlYUQ",
//                         "width": 336
//                     }
//                 ],
//                 "title": "Saami Saami (Telugu)Full Video Song |Pushpa Songs |Allu Arjun, Rashmika |DSP |Mounika Yadav |Sukumar",
//                 "videoId": "-ZAnN6groJw",
//                 "viewCountText": "10,860,900 views"
//             }
//         },
//         {
//             "video": {
//                 "channelId": "UCq-Fj5jknLsUf-MWSy4_brA",
//                 "channelName": "T-Series",
//                 "lengthText": "3:49",
//                 "publishedTimeText": "3 days ago",
//                 "thumbnails": [
//                     {
//                         "height": 118,
//                         "url": "https://i.ytimg.com/vi/sqmNziU3OxQ/hqdefault.jpg?sqp=-oaymwEiCNIBEHZIWvKriqkDFQgBFQAAAAAYASUAAMhCPQCAokN4AQ==&rs=AOn4CLCBdmuOyLdicExb63ehPWMCQjk4sg",
//                         "width": 210
//                     },
//                     {
//                         "height": 138,
//                         "url": "https://i.ytimg.com/vi/sqmNziU3OxQ/hqdefault.jpg?sqp=-oaymwEjCPYBEIoBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLAdey1E547Wf3HCixIUhiGPwU16IQ",
//                         "width": 246
//                     },
//                     {
//                         "height": 188,
//                         "url": "https://i.ytimg.com/vi/sqmNziU3OxQ/hqdefault.jpg?sqp=-oaymwEjCNACELwBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLDBAlh5aWUF-ZevVT3is2QYPsn4YQ",
//                         "width": 336
//                     }
//                 ],
//                 "title": "Oo Bolega ya Oo Oo Bolega Ft Samantha ( Full Video) Pushpa | Allu A, Rashmika|Kanika K, DSP, Sukumar",
//                 "videoId": "sqmNziU3OxQ",
//                 "viewCountText": "11,869,781 views"
//             }
//         },
//         {
//             "video": {
//                 "channelId": "UC0J8BQahplvTY6LjlnLf_NQ",
//                 "channelName": "Saregama Hum Bhojpuri",
//                 "lengthText": "3:40",
//                 "publishedTimeText": "7 days ago",
//                 "thumbnails": [
//                     {
//                         "height": 118,
//                         "url": "https://i.ytimg.com/vi/BXtoNjRFJ8c/hqdefault.jpg?sqp=-oaymwEiCNIBEHZIWvKriqkDFQgBFQAAAAAYASUAAMhCPQCAokN4AQ==&rs=AOn4CLCTBXVX5TcrXNggcVssJqcVJSkQQw",
//                         "width": 210
//                     },
//                     {
//                         "height": 138,
//                         "url": "https://i.ytimg.com/vi/BXtoNjRFJ8c/hqdefault.jpg?sqp=-oaymwEjCPYBEIoBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLACE-GPXm5TSgevzGk-q9i3s22SRA",
//                         "width": 246
//                     },
//                     {
//                         "height": 188,
//                         "url": "https://i.ytimg.com/vi/BXtoNjRFJ8c/hqdefault.jpg?sqp=-oaymwEjCNACELwBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLBG70yeyGS-t4HgLuAFbEEunQ5EFw",
//                         "width": 336
//                     }
//                 ],
//                 "title": "Khesari Lal | दो घूँट (भोजपुरी) | Do Ghoont (Bhojpuri) | Shilpi Raj | Namrita Malla | Bhojpuri Gana",
//                 "videoId": "BXtoNjRFJ8c",
//                 "viewCountText": "14,969,830 views"
//             }
//         },
//         {
//             "video": {
//                 "channelId": "UCNApqoVYJbYSrni4YsbXzyQ",
//                 "channelName": "Aditya Music",
//                 "lengthText": "4:06",
//                 "publishedTimeText": "7 days ago",
//                 "thumbnails": [
//                     {
//                         "height": 118,
//                         "url": "https://i.ytimg.com/vi/Kn42r5UUhqE/hqdefault.jpg?sqp=-oaymwEiCNIBEHZIWvKriqkDFQgBFQAAAAAYASUAAMhCPQCAokN4AQ==&rs=AOn4CLBIqhxadYVekzP1N-sQmUs8EVNeNw",
//                         "width": 210
//                     },
//                     {
//                         "height": 138,
//                         "url": "https://i.ytimg.com/vi/Kn42r5UUhqE/hqdefault.jpg?sqp=-oaymwEjCPYBEIoBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLDtckESil7casZWcxSwG5sGQrPSSg",
//                         "width": 246
//                     },
//                     {
//                         "height": 188,
//                         "url": "https://i.ytimg.com/vi/Kn42r5UUhqE/hqdefault.jpg?sqp=-oaymwEjCNACELwBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLARUGG0Hrc-w28Is8Y9Kq4tJ9zcuw",
//                         "width": 336
//                     }
//                 ],
//                 "title": "#Acharya​ -Saana Kastam Lyrical | Chiranjeevi, Regina Cassandra | Koratala Siva | Mani Sharma",
//                 "videoId": "Kn42r5UUhqE",
//                 "viewCountText": "14,475,895 views"
//             }
//         },
//         {
//             "video": {
//                 "channelId": "UCq-Fj5jknLsUf-MWSy4_brA",
//                 "channelName": "T-Series",
//                 "lengthText": "3:43",
//                 "publishedTimeText": "3 weeks ago",
//                 "thumbnails": [
//                     {
//                         "height": 118,
//                         "url": "https://i.ytimg.com/vi/G-XMiVMlLRI/hqdefault.jpg?sqp=-oaymwEiCNIBEHZIWvKriqkDFQgBFQAAAAAYASUAAMhCPQCAokN4AQ==&rs=AOn4CLDgzNq96fuJYnqrJi4gT5Cgdng5tQ",
//                         "width": 210
//                     },
//                     {
//                         "height": 138,
//                         "url": "https://i.ytimg.com/vi/G-XMiVMlLRI/hqdefault.jpg?sqp=-oaymwEjCPYBEIoBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLB0PZKS-d9CqFjn9XHdI8it1SaEIg",
//                         "width": 246
//                     },
//                     {
//                         "height": 188,
//                         "url": "https://i.ytimg.com/vi/G-XMiVMlLRI/hqdefault.jpg?sqp=-oaymwEjCNACELwBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLDRVD4v9cfE9gPl-Iw4Bg1NQ_A-3A",
//                         "width": 336
//                     }
//                 ],
//                 "title": "DANCE MERI RANI: Guru Randhawa Ft Nora Fatehi | Tanishk, Zahrah | Rashmi Virag, Bosco | Bhushan K",
//                 "videoId": "G-XMiVMlLRI",
//                 "viewCountText": "85,879,467 views"
//             }
//         },
//         {
//             "video": {
//                 "channelId": "UCn4rEMqKtwBQ6-oEwbd4PcA",
//                 "channelName": "Sony Music South",
//                 "lengthText": "4:03",
//                 "publishedTimeText": "7 days ago",
//                 "thumbnails": [
//                     {
//                         "height": 118,
//                         "url": "https://i.ytimg.com/vi/r9lR5hLgEnI/hqdefault.jpg?sqp=-oaymwEiCNIBEHZIWvKriqkDFQgBFQAAAAAYASUAAMhCPQCAokN4AQ==&rs=AOn4CLARODq2-wzHLSF0vXp5A8_K4BWPjg",
//                         "width": 210
//                     },
//                     {
//                         "height": 138,
//                         "url": "https://i.ytimg.com/vi/r9lR5hLgEnI/hqdefault.jpg?sqp=-oaymwEjCPYBEIoBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLCGXXpcZTYytXjHzZ55YjntnjxpBg",
//                         "width": 246
//                     },
//                     {
//                         "height": 188,
//                         "url": "https://i.ytimg.com/vi/r9lR5hLgEnI/hqdefault.jpg?sqp=-oaymwEjCNACELwBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLBf1nf6SvKT8rafiwmoIiTcHYejrA",
//                         "width": 336
//                     }
//                 ],
//                 "title": "Kaathuvaakula Rendu Kaadhal - Naan Pizhai Lyric| VijaySethupathi, Nayanthara, Anirudh, VigneshShivan",
//                 "videoId": "r9lR5hLgEnI",
//                 "viewCountText": "7,561,581 views"
//             }
//         },
//         {
//             "video": {
//                 "channelId": "UCq-Fj5jknLsUf-MWSy4_brA",
//                 "channelName": "T-Series",
//                 "lengthText": "4:36",
//                 "publishedTimeText": "2 weeks ago",
//                 "thumbnails": [
//                     {
//                         "height": 118,
//                         "url": "https://i.ytimg.com/vi/Kz5uJlucE5Q/hqdefault.jpg?sqp=-oaymwEiCNIBEHZIWvKriqkDFQgBFQAAAAAYASUAAMhCPQCAokN4AQ==&rs=AOn4CLApbX_6Qm8SbCEfnLd6IPeLgKA5Lg",
//                         "width": 210
//                     },
//                     {
//                         "height": 138,
//                         "url": "https://i.ytimg.com/vi/Kz5uJlucE5Q/hqdefault.jpg?sqp=-oaymwEjCPYBEIoBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLD38kAMamJalIgcslRsGSwv2Pdi3w",
//                         "width": 246
//                     },
//                     {
//                         "height": 188,
//                         "url": "https://i.ytimg.com/vi/Kz5uJlucE5Q/hqdefault.jpg?sqp=-oaymwEjCNACELwBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLD5dwIJD1F7Jad7YZI1shho-fuLHw",
//                         "width": 336
//                     }
//                 ],
//                 "title": "Atrangi Re: Chaka Chak Full Video |@A. R. Rahman| Akshay K, Sara A K, Dhanush, Shreya G, Bhushan K",
//                 "videoId": "Kz5uJlucE5Q",
//                 "viewCountText": "19,504,335 views"
//             }
//         },
//         {
//             "video": {
//                 "channelId": "UC3fryLB2yC_5ImR9mEl1v-A",
//                 "channelName": "R Nait",
//                 "lengthText": "4:11",
//                 "publishedTimeText": "1 day ago",
//                 "thumbnails": [
//                     {
//                         "height": 118,
//                         "url": "https://i.ytimg.com/vi/m9P4uEicG7U/hqdefault.jpg?sqp=-oaymwEiCNIBEHZIWvKriqkDFQgBFQAAAAAYASUAAMhCPQCAokN4AQ==&rs=AOn4CLCOTeIgTHRd52u2or80X8U_6Vj8Pw",
//                         "width": 210
//                     },
//                     {
//                         "height": 138,
//                         "url": "https://i.ytimg.com/vi/m9P4uEicG7U/hqdefault.jpg?sqp=-oaymwEjCPYBEIoBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLB7VZCUQAtOzF0axXuQCWK-FLvkxg",
//                         "width": 246
//                     },
//                     {
//                         "height": 188,
//                         "url": "https://i.ytimg.com/vi/m9P4uEicG7U/hqdefault.jpg?sqp=-oaymwEjCNACELwBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLDh_NZPV25w9ZuVsoZrLXb3tIMwjA",
//                         "width": 336
//                     }
//                 ],
//                 "title": "Don't Care (Official Video) R Nait | Korala Maan | MixSingh | Latest Punjabi Song 2022",
//                 "videoId": "m9P4uEicG7U",
//                 "viewCountText": "4,043,329 views"
//             }
//         },
//         {
//             "video": {
//                 "channelId": "UCwmWD8bYWZ53SWavYj1kdRA",
//                 "channelName": "Chandan Shetty",
//                 "lengthText": "4:23",
//                 "publishedTimeText": "13 days ago",
//                 "thumbnails": [
//                     {
//                         "height": 118,
//                         "url": "https://i.ytimg.com/vi/5fzIXhP5oI0/hqdefault.jpg?sqp=-oaymwEiCNIBEHZIWvKriqkDFQgBFQAAAAAYASUAAMhCPQCAokN4AQ==&rs=AOn4CLBVf6gvdjTXW69YOKdyN0v8Vt9k3g",
//                         "width": 210
//                     },
//                     {
//                         "height": 138,
//                         "url": "https://i.ytimg.com/vi/5fzIXhP5oI0/hqdefault.jpg?sqp=-oaymwEjCPYBEIoBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLCi_0_9S6hdo12n86gU5qBzJ7Vccg",
//                         "width": 246
//                     },
//                     {
//                         "height": 188,
//                         "url": "https://i.ytimg.com/vi/5fzIXhP5oI0/hqdefault.jpg?sqp=-oaymwEjCNACELwBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLCONElsfJJ0cBFGTVcyeZrCTAFIQw",
//                         "width": 336
//                     }
//                 ],
//                 "title": "Laka Laka Lambargini | Chandan Shetty | Rachita Ram | Nanda Kishore | R Keshav",
//                 "videoId": "5fzIXhP5oI0",
//                 "viewCountText": "5,217,289 views"
//             }
//         },
//         {
//             "video": {
//                 "channelId": "UCq-Fj5jknLsUf-MWSy4_brA",
//                 "channelName": "T-Series",
//                 "lengthText": "8:00",
//                 "publishedTimeText": "4 days ago",
//                 "thumbnails": [
//                     {
//                         "height": 118,
//                         "url": "https://i.ytimg.com/vi/_FTHYBUGfB8/hqdefault.jpg?sqp=-oaymwEiCNIBEHZIWvKriqkDFQgBFQAAAAAYASUAAMhCPQCAokN4AQ==&rs=AOn4CLDPMhsOi3qUkqn_sbsFRPKgN4fHgQ",
//                         "width": 210
//                     },
//                     {
//                         "height": 138,
//                         "url": "https://i.ytimg.com/vi/_FTHYBUGfB8/hqdefault.jpg?sqp=-oaymwEjCPYBEIoBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLAM0CI5l9LUGPqVQJco7saT0vx_EQ",
//                         "width": 246
//                     },
//                     {
//                         "height": 188,
//                         "url": "https://i.ytimg.com/vi/_FTHYBUGfB8/hqdefault.jpg?sqp=-oaymwEjCNACELwBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLBZIH-NHjVM9OLmoF8ExyNEM_bJ6A",
//                         "width": 336
//                     }
//                 ],
//                 "title": "Kabira 2 (कबीर दोहे): Jubin Nautiyal | Kabir Das | Shakti A | Raaj Aashoo | Lovesh N | Bhushan Kumar",
//                 "videoId": "_FTHYBUGfB8",
//                 "viewCountText": "4,151,474 views"
//             }
//         },
//         {
//             "video": {
//                 "channelId": "UCq-Fj5jknLsUf-MWSy4_brA",
//                 "channelName": "T-Series",
//                 "lengthText": "5:05",
//                 "publishedTimeText": "2 weeks ago",
//                 "thumbnails": [
//                     {
//                         "height": 118,
//                         "url": "https://i.ytimg.com/vi/aOliIfyH6vI/hqdefault.jpg?sqp=-oaymwEiCNIBEHZIWvKriqkDFQgBFQAAAAAYASUAAMhCPQCAokN4AQ==&rs=AOn4CLCiDPf6U0uEvByozMsonnul-O240Q",
//                         "width": 210
//                     },
//                     {
//                         "height": 138,
//                         "url": "https://i.ytimg.com/vi/aOliIfyH6vI/hqdefault.jpg?sqp=-oaymwEjCPYBEIoBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLBEjMBKzmAmCGNbTYQKyKh2NfXlsg",
//                         "width": 246
//                     },
//                     {
//                         "height": 188,
//                         "url": "https://i.ytimg.com/vi/aOliIfyH6vI/hqdefault.jpg?sqp=-oaymwEjCNACELwBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLA9d5lLab360AsqR3oLMr0TQYh-cw",
//                         "width": 336
//                     }
//                 ],
//                 "title": "Atrangi Re: Rait Zara Si Full Video |@A. R. Rahman|Akshay, Dhanush,Sara,Arijit, Shashaa | Bhushan K",
//                 "videoId": "aOliIfyH6vI",
//                 "viewCountText": "9,270,630 views"
//             }
//         },
//         {
//             "video": {
//                 "channelId": "UCRLmEkBUd79YjTZTWLPBrYQ",
//                 "channelName": "VATS RECORDS",
//                 "lengthText": "3:24",
//                 "publishedTimeText": "6 days ago",
//                 "thumbnails": [
//                     {
//                         "height": 118,
//                         "url": "https://i.ytimg.com/vi/DKxtVXWCJ0Y/hqdefault.jpg?sqp=-oaymwEiCNIBEHZIWvKriqkDFQgBFQAAAAAYASUAAMhCPQCAokN4AQ==&rs=AOn4CLD0_uEuE0vFZLQwOjG2hixiVU4pKQ",
//                         "width": 210
//                     },
//                     {
//                         "height": 138,
//                         "url": "https://i.ytimg.com/vi/DKxtVXWCJ0Y/hqdefault.jpg?sqp=-oaymwEjCPYBEIoBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLCrKIqiSbd45_hF21R73zK91ZTOmg",
//                         "width": 246
//                     },
//                     {
//                         "height": 188,
//                         "url": "https://i.ytimg.com/vi/DKxtVXWCJ0Y/hqdefault.jpg?sqp=-oaymwEjCNACELwBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLBeptkN7_5Zxc_6DfbaBYFZfIwaLg",
//                         "width": 336
//                     }
//                 ],
//                 "title": "Piliye Me Pistol पीलिये में पिस्तौल (Full Video) Sapna Choudhary | New Haryanvi Songs Haryanavi 2022",
//                 "videoId": "DKxtVXWCJ0Y",
//                 "viewCountText": "3,529,750 views"
//             }
//         },
//         {
//             "video": {
//                 "channelId": "UC54FS_YP3B6bJkQ9gwF0lBg",
//                 "channelName": "Ekta Sound",
//                 "lengthText": "6:23",
//                 "publishedTimeText": "3 days ago",
//                 "thumbnails": [
//                     {
//                         "height": 118,
//                         "url": "https://i.ytimg.com/vi/eo8KuL-G5ho/hqdefault.jpg?sqp=-oaymwEiCNIBEHZIWvKriqkDFQgBFQAAAAAYASUAAMhCPQCAokN4AQ==&rs=AOn4CLDXHqhVC6XJohG6vRdAF5C0EjCKzg",
//                         "width": 210
//                     },
//                     {
//                         "height": 138,
//                         "url": "https://i.ytimg.com/vi/eo8KuL-G5ho/hqdefault.jpg?sqp=-oaymwEjCPYBEIoBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLBng9RE8GJqvb2ejV2ODGVnfsgpmA",
//                         "width": 246
//                     },
//                     {
//                         "height": 188,
//                         "url": "https://i.ytimg.com/vi/eo8KuL-G5ho/hqdefault.jpg?sqp=-oaymwEjCNACELwBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLAtg5VQoCc5NTtsAOL-s4xYGIAKDw",
//                         "width": 336
//                     }
//                 ],
//                 "title": "Mara Jevo Prem Tane Chyoy Nai Made || Jignesh Barot || Gujarati Bewafa Song || 4k || @Ekta Sound",
//                 "videoId": "eo8KuL-G5ho",
//                 "viewCountText": "831,000 views"
//             }
//         },
//         {
//             "video": {
//                 "channelId": "UCLsSLka8jODBozvi5VTQeaQ",
//                 "channelName": "Zee Music South",
//                 "lengthText": "3:00",
//                 "publishedTimeText": "2 days ago",
//                 "thumbnails": [
//                     {
//                         "height": 118,
//                         "url": "https://i.ytimg.com/vi/We_pnjhgIG0/hqdefault.jpg?sqp=-oaymwEiCNIBEHZIWvKriqkDFQgBFQAAAAAYASUAAMhCPQCAokN4AQ==&rs=AOn4CLBy2WxKTjuBRif4oE4e7oNVHmwrqA",
//                         "width": 210
//                     },
//                     {
//                         "height": 138,
//                         "url": "https://i.ytimg.com/vi/We_pnjhgIG0/hqdefault.jpg?sqp=-oaymwEjCPYBEIoBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLBOb3slcapY7lCG76SP1Hd6SYvlTA",
//                         "width": 246
//                     },
//                     {
//                         "height": 188,
//                         "url": "https://i.ytimg.com/vi/We_pnjhgIG0/hqdefault.jpg?sqp=-oaymwEjCNACELwBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLDJEAorz1jDPvHNrUuGKsMg6SHYlQ",
//                         "width": 336
//                     }
//                 ],
//                 "title": "Bangaara - Lyrical | Bangarraju | Akkineni Nagarjuna | Naga Chaitanya | Krithi Shetty | Anup Rubens",
//                 "videoId": "We_pnjhgIG0",
//                 "viewCountText": "2,030,391 views"
//             }
//         },
//         {
//             "video": {
//                 "channelId": "UCOsyDsO5tIt-VZ1iwjdQmew",
//                 "channelName": "Speed Records",
//                 "lengthText": "3:08",
//                 "publishedTimeText": "4 days ago",
//                 "thumbnails": [
//                     {
//                         "height": 118,
//                         "url": "https://i.ytimg.com/vi/T2cemdx6ErI/hqdefault.jpg?sqp=-oaymwEiCNIBEHZIWvKriqkDFQgBFQAAAAAYASUAAMhCPQCAokN4AQ==&rs=AOn4CLC_v1tgsp3JCOg7sLmjUYPsoJY8zg",
//                         "width": 210
//                     },
//                     {
//                         "height": 138,
//                         "url": "https://i.ytimg.com/vi/T2cemdx6ErI/hqdefault.jpg?sqp=-oaymwEjCPYBEIoBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLB1h7ZPHP1C4fsRu7dgfh3juGnIHw",
//                         "width": 246
//                     },
//                     {
//                         "height": 188,
//                         "url": "https://i.ytimg.com/vi/T2cemdx6ErI/hqdefault.jpg?sqp=-oaymwEjCNACELwBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLDsG71yywv-XjxVGIgvv-sX3oF7MA",
//                         "width": 336
//                     }
//                 ],
//                 "title": "Black Effect (Official Video) Jordan Sandhu Ft Meharvaani | Latest Punjabi Song 2021 | New Song 2022",
//                 "videoId": "T2cemdx6ErI",
//                 "viewCountText": "6,860,885 views"
//             }
//         },
//         {
//             "video": {
//                 "channelId": "UCNApqoVYJbYSrni4YsbXzyQ",
//                 "channelName": "Aditya Music",
//                 "lengthText": "3:54",
//                 "publishedTimeText": "8 days ago",
//                 "thumbnails": [
//                     {
//                         "height": 118,
//                         "url": "https://i.ytimg.com/vi/o4GkSgCISDE/hqdefault.jpg?sqp=-oaymwEiCNIBEHZIWvKriqkDFQgBFQAAAAAYASUAAMhCPQCAokN4AQ==&rs=AOn4CLBTZ40chb87NxS6AjrE7Uoi4P9FFA",
//                         "width": 210
//                     },
//                     {
//                         "height": 138,
//                         "url": "https://i.ytimg.com/vi/o4GkSgCISDE/hqdefault.jpg?sqp=-oaymwEjCPYBEIoBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLDy2G2tCl1tsGTiIxT_TzZonNGhXQ",
//                         "width": 246
//                     },
//                     {
//                         "height": 188,
//                         "url": "https://i.ytimg.com/vi/o4GkSgCISDE/hqdefault.jpg?sqp=-oaymwEjCNACELwBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLB0SPwDO9c9CR42rWLfuFljS39B-w",
//                         "width": 336
//                     }
//                 ],
//                 "title": "#Brindavanam Lyrical | RowdyBoys Songs |Ashish, Anupama | DSP | Harsha Konuganti | Dil Raju",
//                 "videoId": "o4GkSgCISDE",
//                 "viewCountText": "3,808,996 views"
//             }
//         },
//         {
//             "video": {
//                 "channelId": "UCLbdVvreihwZRL6kwuEUYsA",
//                 "channelName": "Think Music India",
//                 "lengthText": "2:39",
//                 "publishedTimeText": "3 days ago",
//                 "thumbnails": [
//                     {
//                         "height": 118,
//                         "url": "https://i.ytimg.com/vi/gJB3l7uc4RA/hqdefault.jpg?sqp=-oaymwEiCNIBEHZIWvKriqkDFQgBFQAAAAAYASUAAMhCPQCAokN4AQ==&rs=AOn4CLDFbmmjX-sB5KViv5q1yJeFs-sWUA",
//                         "width": 210
//                     },
//                     {
//                         "height": 138,
//                         "url": "https://i.ytimg.com/vi/gJB3l7uc4RA/hqdefault.jpg?sqp=-oaymwEjCPYBEIoBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLB9B24bOSYalP5ZRVTrvwaz3-CTRA",
//                         "width": 246
//                     },
//                     {
//                         "height": 188,
//                         "url": "https://i.ytimg.com/vi/gJB3l7uc4RA/hqdefault.jpg?sqp=-oaymwEjCNACELwBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLASerVeXkO2VTmnOdjyW5tTlT62tg",
//                         "width": 336
//                     }
//                 ],
//                 "title": "Thathaka Theithare Video Song | Hridayam | Pranav | Vineeth | Prithviraj | Hesham |Visakh |Merryland",
//                 "videoId": "gJB3l7uc4RA",
//                 "viewCountText": "1,426,603 views"
//             }
//         },
//         {
//             "video": {
//                 "channelId": "UCpXLDGcGtqkC7MIF5sKYU0w",
//                 "channelName": "Babbu Maan",
//                 "lengthText": "7:12",
//                 "publishedTimeText": "7 days ago",
//                 "thumbnails": [
//                     {
//                         "height": 118,
//                         "url": "https://i.ytimg.com/vi/JF3QSO9AniU/hqdefault.jpg?sqp=-oaymwEiCNIBEHZIWvKriqkDFQgBFQAAAAAYASUAAMhCPQCAokN4AQ==&rs=AOn4CLAv3piT6NJ-2HYZ0jFUU7B5B3Ixqg",
//                         "width": 210
//                     },
//                     {
//                         "height": 138,
//                         "url": "https://i.ytimg.com/vi/JF3QSO9AniU/hqdefault.jpg?sqp=-oaymwEjCPYBEIoBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLBhMBdjthC45JFm6zYMg-b3Rsww5w",
//                         "width": 246
//                     },
//                     {
//                         "height": 188,
//                         "url": "https://i.ytimg.com/vi/JF3QSO9AniU/hqdefault.jpg?sqp=-oaymwEjCNACELwBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLAWRKvF4z9GA8nyBq40XgMYnKcJAQ",
//                         "width": 336
//                     }
//                 ],
//                 "title": "Pagal Shayar (Full Song) Babbu Maan | New Punjabi Songs 2022",
//                 "videoId": "JF3QSO9AniU",
//                 "viewCountText": "1,241,911 views"
//             }
//         },
//         {
//             "video": {
//                 "channelId": "UCNApqoVYJbYSrni4YsbXzyQ",
//                 "channelName": "Aditya Music",
//                 "lengthText": "0:31",
//                 "publishedTimeText": "7 days ago",
//                 "thumbnails": [
//                     {
//                         "height": 90,
//                         "url": "https://i.ytimg.com/vi/AVaArcOvjRM/2.jpg",
//                         "width": 120
//                     },
//                     {
//                         "height": 360,
//                         "url": "https://i.ytimg.com/vi/AVaArcOvjRM/hq2.jpg",
//                         "width": 480
//                     },
//                     {
//                         "height": 480,
//                         "url": "https://i.ytimg.com/vi/AVaArcOvjRM/sd2.jpg",
//                         "width": 640
//                     },
//                     {
//                         "height": 1080,
//                         "url": "https://i.ytimg.com/vi/AVaArcOvjRM/maxres2.jpg",
//                         "width": 1920
//                     }
//                 ],
//                 "title": "#SaanaKastam Lyrical Song | #Acharya | #Chiranjeevi | #ReginaCassandra | #KoratalaSiva | #Shorts",
//                 "videoId": "AVaArcOvjRM",
//                 "viewCountText": "1,352,444 views"
//             }
//         },
//         {
//             "video": {
//                 "channelId": "UCNApqoVYJbYSrni4YsbXzyQ",
//                 "channelName": "Aditya Music",
//                 "lengthText": "3:06",
//                 "publishedTimeText": "11 days ago",
//                 "thumbnails": [
//                     {
//                         "height": 118,
//                         "url": "https://i.ytimg.com/vi/SPoE3UWVDlI/hqdefault.jpg?sqp=-oaymwEiCNIBEHZIWvKriqkDFQgBFQAAAAAYASUAAMhCPQCAokN4AQ==&rs=AOn4CLBrKq_BpRQTHQ3b4N2DSh5sJKtGIQ",
//                         "width": 210
//                     },
//                     {
//                         "height": 138,
//                         "url": "https://i.ytimg.com/vi/SPoE3UWVDlI/hqdefault.jpg?sqp=-oaymwEjCPYBEIoBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLDExJsF1L14ZiFYqdDUcI0AWOHjkw",
//                         "width": 246
//                     },
//                     {
//                         "height": 188,
//                         "url": "https://i.ytimg.com/vi/SPoE3UWVDlI/hqdefault.jpg?sqp=-oaymwEjCNACELwBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLCphjkv9BwbYT4CHYc28QWCIqQgog",
//                         "width": 336
//                     }
//                 ],
//                 "title": "#Attasudake Lyrical | Khiladi​ Songs | Ravi Teja, Meenakshi Chaudhary | Ramesh Varma | DSP",
//                 "videoId": "SPoE3UWVDlI",
//                 "viewCountText": "5,435,540 views"
//             }
//         },
//         {
//             "video": {
//                 "channelId": "UC68nKdrLbLL0Vj7ilVkLmmg",
//                 "channelName": "Saregama Telugu",
//                 "lengthText": "4:09",
//                 "publishedTimeText": "10 days ago",
//                 "thumbnails": [
//                     {
//                         "height": 118,
//                         "url": "https://i.ytimg.com/vi/60P5xR4GxvE/hqdefault.jpg?sqp=-oaymwEiCNIBEHZIWvKriqkDFQgBFQAAAAAYASUAAMhCPQCAokN4AQ==&rs=AOn4CLDoyXlD1UWuj_UEURpnQBG0S7m6bg",
//                         "width": 210
//                     },
//                     {
//                         "height": 138,
//                         "url": "https://i.ytimg.com/vi/60P5xR4GxvE/hqdefault.jpg?sqp=-oaymwEjCPYBEIoBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLBKS6Jna5EJDQDmdmlphH1VCL-HhQ",
//                         "width": 246
//                     },
//                     {
//                         "height": 188,
//                         "url": "https://i.ytimg.com/vi/60P5xR4GxvE/hqdefault.jpg?sqp=-oaymwEjCNACELwBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLBOTZYSlG5kBT-h7LJMBojxrwdlaQ",
//                         "width": 336
//                     }
//                 ],
//                 "title": "Rise of Shyam - Video Song | Shyam Singha Roy | Nani, Sai Pallavi, Krithi Shetty | Mickey J Meyer",
//                 "videoId": "60P5xR4GxvE",
//                 "viewCountText": "1,906,646 views"
//             }
//         },
//         {
//             "video": {
//                 "channelId": "UCOsyDsO5tIt-VZ1iwjdQmew",
//                 "channelName": "Speed Records",
//                 "lengthText": "5:26",
//                 "publishedTimeText": "3 weeks ago",
//                 "thumbnails": [
//                     {
//                         "height": 118,
//                         "url": "https://i.ytimg.com/vi/2sk55w4zdxw/hqdefault.jpg?sqp=-oaymwEiCNIBEHZIWvKriqkDFQgBFQAAAAAYASUAAMhCPQCAokN4AQ==&rs=AOn4CLDEPjsU33aQXDdlZ33rS7EOlq1Aug",
//                         "width": 210
//                     },
//                     {
//                         "height": 138,
//                         "url": "https://i.ytimg.com/vi/2sk55w4zdxw/hqdefault.jpg?sqp=-oaymwEjCPYBEIoBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLBQ7vJDAtVqI8o1Q2Srv1aXqkh2iw",
//                         "width": 246
//                     },
//                     {
//                         "height": 188,
//                         "url": "https://i.ytimg.com/vi/2sk55w4zdxw/hqdefault.jpg?sqp=-oaymwEjCNACELwBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLAGbsLbXfAbz_Evqq7fsHOVNc_Rbg",
//                         "width": 336
//                     }
//                 ],
//                 "title": "Teri Life Meri Life (Official Video) | R Nait Ft Kaur B | Desi Crew | Latest Punjabi Songs 2021",
//                 "videoId": "2sk55w4zdxw",
//                 "viewCountText": "23,458,710 views"
//             }
//         },
//         {
//             "video": {
//                 "channelId": "UCNApqoVYJbYSrni4YsbXzyQ",
//                 "channelName": "Aditya Music",
//                 "lengthText": "0:33",
//                 "publishedTimeText": "7 days ago",
//                 "thumbnails": [
//                     {
//                         "height": 90,
//                         "url": "https://i.ytimg.com/vi/_00Psk3hBu0/2.jpg",
//                         "width": 120
//                     },
//                     {
//                         "height": 360,
//                         "url": "https://i.ytimg.com/vi/_00Psk3hBu0/hq2.jpg",
//                         "width": 480
//                     },
//                     {
//                         "height": 480,
//                         "url": "https://i.ytimg.com/vi/_00Psk3hBu0/sd2.jpg",
//                         "width": 640
//                     },
//                     {
//                         "height": 1080,
//                         "url": "https://i.ytimg.com/vi/_00Psk3hBu0/maxres2.jpg",
//                         "width": 1920
//                     }
//                 ],
//                 "title": "#Brindavanam Lyrical Song | #RowdyBoys |#Ashish | #Anupama | #DSP | #DilRaju | #Shorts",
//                 "videoId": "_00Psk3hBu0",
//                 "viewCountText": "1,237,440 views"
//             }
//         },
//         {
//             "video": {
//                 "channelId": "UCNApqoVYJbYSrni4YsbXzyQ",
//                 "channelName": "Aditya Music",
//                 "lengthText": "3:37",
//                 "publishedTimeText": "10 days ago",
//                 "thumbnails": [
//                     {
//                         "height": 118,
//                         "url": "https://i.ytimg.com/vi/nxiULEXnjZ4/hqdefault.jpg?sqp=-oaymwEiCNIBEHZIWvKriqkDFQgBFQAAAAAYASUAAMhCPQCAokN4AQ==&rs=AOn4CLDCfHkf7b4UTPdvVHkRgvyrFBo_JA",
//                         "width": 210
//                     },
//                     {
//                         "height": 138,
//                         "url": "https://i.ytimg.com/vi/nxiULEXnjZ4/hqdefault.jpg?sqp=-oaymwEjCPYBEIoBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLAmN7Smc0WeCUV7RXwETX4rRVOISA",
//                         "width": 246
//                     },
//                     {
//                         "height": 188,
//                         "url": "https://i.ytimg.com/vi/nxiULEXnjZ4/hqdefault.jpg?sqp=-oaymwEjCNACELwBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLDfZnzXI6OaOtcQhHHGgX8NB0-AzQ",
//                         "width": 336
//                     }
//                 ],
//                 "title": "#LalaBheemla DJ Version | #BheemlaNayak | Pawan Kalyan, Rana | Trivikram | SaagarKChandra | ThamanS",
//                 "videoId": "nxiULEXnjZ4",
//                 "viewCountText": "4,610,023 views"
//             }
//         },
//         {
//             "video": {
//                 "channelId": "UC22nIfOTM7KLIQuFGMKzQbg",
//                 "channelName": "Wave Music",
//                 "lengthText": "4:16",
//                 "publishedTimeText": "13 days ago",
//                 "thumbnails": [
//                     {
//                         "height": 118,
//                         "url": "https://i.ytimg.com/vi/tGfd2PFdidg/hqdefault.jpg?sqp=-oaymwEiCNIBEHZIWvKriqkDFQgBFQAAAAAYASUAAMhCPQCAokN4AQ==&rs=AOn4CLCePr6jmybqEwEvs7Z6fCB_gGSGqA",
//                         "width": 210
//                     },
//                     {
//                         "height": 138,
//                         "url": "https://i.ytimg.com/vi/tGfd2PFdidg/hqdefault.jpg?sqp=-oaymwEjCPYBEIoBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLA6J9VUgl8uA_xcurpjiScRdwQdFQ",
//                         "width": 246
//                     },
//                     {
//                         "height": 188,
//                         "url": "https://i.ytimg.com/vi/tGfd2PFdidg/hqdefault.jpg?sqp=-oaymwEjCNACELwBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLCDJwEi8bk_rvdfxnd0cgBK3H0t5g",
//                         "width": 336
//                     }
//                 ],
//                 "title": "#Funny Video - काचा बदाम लेला | #Rakesh Mishra Viral Song | Kacha Badam Lela | Bhojpuri Song 2022",
//                 "videoId": "tGfd2PFdidg",
//                 "viewCountText": "6,749,878 views"
//             }
//         },
//         {
//             "video": {
//                 "channelId": "UCnJjcn5FrgrOEp5_N45ZLEQ",
//                 "channelName": "T-Series Telugu",
//                 "lengthText": "4:16",
//                 "publishedTimeText": "18 hours ago",
//                 "thumbnails": [
//                     {
//                         "height": 118,
//                         "url": "https://i.ytimg.com/vi/HgWgOii3SmQ/hqdefault.jpg?sqp=-oaymwEiCNIBEHZIWvKriqkDFQgBFQAAAAAYASUAAMhCPQCAokN4AQ==&rs=AOn4CLAPuo2EOssAl94rCp898WAg-J0aog",
//                         "width": 210
//                     },
//                     {
//                         "height": 138,
//                         "url": "https://i.ytimg.com/vi/HgWgOii3SmQ/hqdefault.jpg?sqp=-oaymwEjCPYBEIoBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLBc2QWee5hJBw6XGqB2aAxJSjy1DA",
//                         "width": 246
//                     },
//                     {
//                         "height": 188,
//                         "url": "https://i.ytimg.com/vi/HgWgOii3SmQ/hqdefault.jpg?sqp=-oaymwEjCNACELwBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLBz_aeP6ax1_xCewhQ7kcMU4lKXFQ",
//                         "width": 336
//                     }
//                 ],
//                 "title": "Full Video: Jai Balayya Song [4K] | Akhanda | Nandamuri Balakrishna | Boyapati Sreenu | Thaman S",
//                 "videoId": "HgWgOii3SmQ",
//                 "viewCountText": "443,726 views"
//             }
//         },
//         {
//             "video": {
//                 "channelId": "UCNApqoVYJbYSrni4YsbXzyQ",
//                 "channelName": "Aditya Music",
//                 "lengthText": "3:07",
//                 "publishedTimeText": "4 days ago",
//                 "thumbnails": [
//                     {
//                         "height": 118,
//                         "url": "https://i.ytimg.com/vi/I8c0-NEBqL0/hqdefault.jpg?sqp=-oaymwEiCNIBEHZIWvKriqkDFQgBFQAAAAAYASUAAMhCPQCAokN4AQ==&rs=AOn4CLBXfrH_F2XRR4YzlI0HRGguzMJd2g",
//                         "width": 210
//                     },
//                     {
//                         "height": 138,
//                         "url": "https://i.ytimg.com/vi/I8c0-NEBqL0/hqdefault.jpg?sqp=-oaymwEjCPYBEIoBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLCM5xysZpKPT04_DB0U9dqt2F3g1Q",
//                         "width": 246
//                     },
//                     {
//                         "height": 188,
//                         "url": "https://i.ytimg.com/vi/I8c0-NEBqL0/hqdefault.jpg?sqp=-oaymwEjCNACELwBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLB8XkLNIr_wwU3k3hOOwrWyhTb2gQ",
//                         "width": 336
//                     }
//                 ],
//                 "title": "Tillu Anna DJ Pedithe Lyrical | DJ Tillu Songs | Siddhu, Neha Shetty |Vimal Krishna |Ram Miriyala",
//                 "videoId": "I8c0-NEBqL0",
//                 "viewCountText": "1,561,077 views"
//             }
//         },
//         {
//             "video": {
//                 "channelId": "UC0J8BQahplvTY6LjlnLf_NQ",
//                 "channelName": "Saregama Hum Bhojpuri",
//                 "lengthText": "3:30",
//                 "publishedTimeText": "11 days ago",
//                 "thumbnails": [
//                     {
//                         "height": 118,
//                         "url": "https://i.ytimg.com/vi/1YQsGN99Q1o/hqdefault.jpg?sqp=-oaymwEiCNIBEHZIWvKriqkDFQgBFQAAAAAYASUAAMhCPQCAokN4AQ==&rs=AOn4CLDZNREoPmzKxNx4bG31BIjGIzPqsg",
//                         "width": 210
//                     },
//                     {
//                         "height": 138,
//                         "url": "https://i.ytimg.com/vi/1YQsGN99Q1o/hqdefault.jpg?sqp=-oaymwEjCPYBEIoBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLDa2JhVSjpxrSCCjYCa9mKKiVuLUg",
//                         "width": 246
//                     },
//                     {
//                         "height": 188,
//                         "url": "https://i.ytimg.com/vi/1YQsGN99Q1o/hqdefault.jpg?sqp=-oaymwEjCNACELwBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLBC_fkMGE1jLrk4PzcCjLSnDx97sw",
//                         "width": 336
//                     }
//                 ],
//                 "title": "Bhojpuri DJ Mix | Arvind Akela Kallu | नाच रे पतरकी | Neha Singh | Naach re Patarki | Shilpi Raj",
//                 "videoId": "1YQsGN99Q1o",
//                 "viewCountText": "1,601,998 views"
//             }
//         }
//     ]
// };






  const get_trend_videos=async ()=>{

    let options = {
      method: 'GET',
      url: 'https://youtube-search-and-download.p.rapidapi.com/trending',
      params: {type: 'n', hl: 'en', gl: 'IN'},
      headers: {
        'x-rapidapi-host': 'youtube-search-and-download.p.rapidapi.com',
        'x-rapidapi-key': `${process.env.REACT_APP_SECRET_API_KEY}`
        // 'x-rapidapi-key': '29709f4ab4mshef15f1767b2f641p1df7a5jsn08d7fc98458f'
      }
    };

  const response= await axios.request(options);
  set_trend_videos(response.data.contents);
  set_search_videos({});
  set_music({});
  console.log("treand ", response.data.contents)
//   set_trend_videos(data.contents);
//   set_search_videos(data.contents);
  // console.log(trend_videos);
  
  }
  const get_music=async ()=>{

    let options = {
      method: 'GET',
      url: 'https://youtube-search-and-download.p.rapidapi.com/trending',
      params: {type: 'mu', hl: 'en', gl: 'IN'},
      headers: {
        'x-rapidapi-host': 'youtube-search-and-download.p.rapidapi.com',
        'x-rapidapi-key': `${process.env.REACT_APP_SECRET_API_KEY}`
        // 'x-rapidapi-key': '29709f4ab4mshef15f1767b2f641p1df7a5jsn08d7fc98458f'
      }
    };

  const response= await axios.request(options);
  set_music(response.data.contents);
  set_trend_videos({});
  set_search_videos({});
  console.log("music ", response.data.contents)
//   set_trend_videos(data.contents);
//   set_search_videos(data.contents);
  // console.log(trend_videos);
  
  }
const get_search_videos= async (quary)=>{
  let options = {
    method: 'GET',
    url: 'https://youtube-search-and-download.p.rapidapi.com/search',
    params: {query: `${quary}`, hl: 'en', gl: 'IN', type: 'v', sort: 'r'},
    headers: {
      'x-rapidapi-host': 'youtube-search-and-download.p.rapidapi.com',
      // 'x-rapidapi-key': '29709f4ab4mshef15f1767b2f641p1df7a5jsn08d7fc98458f'
      'x-rapidapi-key': `${process.env.REACT_APP_SECRET_API_KEY}`
    }
  };
  
  let response=await axios.request(options);
  set_search_videos(response.data.contents);
  set_trend_videos({});
  set_music({});
  console.log("searched ", response.data.contents)
//   console.log(response.data.contents);
}


useEffect(()=>{
    // get_trend_videos();
    get_music();
  //   console.log(downloadBtn)
  },[]);

// console.log(process.env);



  return (<div id="body" className="body flex flex-di-co">
  <div className="App">
    <Navbar sendData={(val)=>{
      get_search_videos(val);
      // console.log(val);
    }}
    get_trend_videos={get_trend_videos}
      get_music={get_music}
    />
    <section id="videos" className="flex flex-jc-sa flex-wrap">

      {music.length >0 && music.map((value)=>{
        return(
          <SongCard
          key={value.video.videoId}
          obj={value}
          />
        )
      })}
      {trend_videos.length >0 && trend_videos.map((value)=>{
        return(
          <LandscapeCard
          key={value.video.videoId}
          obj={value}
          />
        )
      })}

      {search_videos.length >0 && search_videos.map((value)=>{
        return(
          <LandscapeCard
          key={value.videoId}
          obj={value}
          />
        )
      })}

    </section>
  </div>
    <section id="footer" className="flex-c">
      <p>Made by Arindam Manna |  copyright 2022,  arindam</p>
    </section>
</div>
  );
}

export default App;
