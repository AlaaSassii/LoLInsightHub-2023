import { links as linksEnum } from "../../enums/routes/links";
import { linksType } from "../../types/navbarType";

export const navLinks: linksType = [
    { name: 'home', path: linksEnum.HOME },
    { name: 'Champion & Match Hub', path: linksEnum.SEARCH },
    { name: 'Games Hub', path: linksEnum.GAMES },
    { name: 'contact us', path: linksEnum.CONTACT },

]