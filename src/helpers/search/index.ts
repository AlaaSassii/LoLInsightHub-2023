import { links } from "../../enums/routes/links";
import { cardServiceSection } from "../../types/card";

export const cards: cardServiceSection[] = [
    {
        title: 'Champion Insights',
        image: "ChampionService",
        text: "Champion Insights: Dive deep into the strengths, weaknesses, and secrets of every League of Legends champion. ",
        navigateLink: links.HOME
    },
    {
        title: 'Match History Insights',
        image: "MatchHistpry",
        text: 'Where your victories are celebrated like championship wins, and your defeats are... just opportunities for epic comebacks. ',
        navigateLink: links.SEARCH
    },

]