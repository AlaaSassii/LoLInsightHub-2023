import { links } from "../../enums/routes/links";
import { cardServiceSection } from "../../types/card";
import ChampionsInsightImage from '../../assets/images/wallpaper/championsSerivepage.webp'
import MatchHistoryInsightsImage from '../../assets/images/wallpaper/matchHistoryServicePage.webp'

export const cards: cardServiceSection[] = [
    {
        title: 'Champion Insights',
        image: ChampionsInsightImage,
        text: "Champion Insights: Dive deep into the strengths, weaknesses, and secrets of every League of Legends champion. ",
        navigateLink: links.CHAMPIONS
    },
    {
        title: 'Match History Insights',
        image: MatchHistoryInsightsImage,
        text: 'Where your victories are celebrated like championship wins, and your defeats are... just opportunities for epic comebacks. ',
        navigateLink: links.MATCHHISTORY
    },

]