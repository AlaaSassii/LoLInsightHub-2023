import { links } from "../enums/routes/links";
import q from '../assets/images/wallpaper/qiyana-4096x2303-16939.jpg';
import akaliJinx from '../assets/images/wallpaper/akalijinx.jpg';
import akaliysas from '../assets/images/wallpaper/akaliyass.jpg';
import mf from '../assets/images/wallpaper/mf.jpg'
import w4 from '../assets/images/wallpaper/w4.webp'
export const gamesCars = [
    {
        title: 'card game',
        description: 'Test your memory with hidden champions! Uncover pairs, master abilities, and become the ultimate Summoner in this fast-paced memory game set in the world of League of Legends.',
        image: akaliJinx,
        link: links.CARDCHAMPIONSGAME,
    },
    {
        title: 'Guess Item',
        description: 'Hone your item-naming expertise with this engaging game. Test your ability to identify a wide range of items and become a name-finding pro!',
        image: akaliysas,
        link: links.GUESSITEM,
    },
    {
        title: 'Quiz Game',
        description: 'Test your gaming knowledge with questions and challenges. Are you a true gaming expert? Show what you know!',
        image: mf,
        link: links.QUIZGAME,
    },
    {
        title: 'Guess Champion',
        description: 'Challenge your League of Legends knowledge by guessing champion names. Can you name them all and become a champion expert? Test your skills now!',
        image: w4,
        link: links.GUESSCHAMPION,
    },
]