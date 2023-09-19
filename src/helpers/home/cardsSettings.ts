import ChampionService from '../../assets/images/wallpaper/champions_service.webp';
import MatchHistpry from '../../assets/images/wallpaper/match_history_service.webp';
import GameService from '../../assets/images/wallpaper/game_service.png'
import { links } from '../../enums/routes/links';
import { cardServiceSectionType } from '../../types/card';

type cardsServiceSection = cardServiceSectionType[]

export const cards: cardsServiceSection = [
    {
        title: 'Champion Insights',
        image: ChampionService,
        text: "Warning: Champion Insights May Cause You to Attempt the 'Flashy' Plays!",
        navigateLink: links.HOME
    },
    {
        title: 'Match History Insights',
        image: MatchHistpry,
        text: 'Track Your Wins, Losses, and the Number of Times You Blamed Your Team!',
        navigateLink: links.SEARCH
    },
    {
        title: 'Game On!',
        image: GameService,
        text: 'Game On! Because Every Noob Has a Hidden Pro Inside (Somewhere)!',
        navigateLink: links.GAMES
    },
]