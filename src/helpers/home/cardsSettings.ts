import ChampionService from '../../assets/images/wallpaper/champions_service.webp';
import MatchHistpry from '../../assets/images/wallpaper/match_history_service.webp';
import GameService from '../../assets/images/wallpaper/game_service.png'

type cardServiceSection = {
    image: string,
    title: string,
    text: string,
    navigateLink: string,
}

type cardsServiceSection = cardServiceSection[]

export const cards: cardsServiceSection = [
    {
        title: 'Champion Insights',
        image: ChampionService,
        text: "Warning: Champion Insights May Cause You to Attempt the 'Flashy' Plays!",
        navigateLink: ''
    },
    {
        title: 'Match History Insights',
        image: ChampionService,
        text: 'Track Your Wins, Losses, and the Number of Times You Blamed Your Team!',
        navigateLink: ''
    },
    {
        title: 'Game On!',
        image: ChampionService,
        text: 'Game On! Because Every Noob Has a Hidden Pro Inside (Somewhere)!',
        navigateLink: ''
    },
]