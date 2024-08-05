import { MdHome } from "react-icons/md";
import { PiTelevisionFill } from "react-icons/pi";
import { BiSolidMoviePlay } from "react-icons/bi";

export const navigation = [
    {
        label: "Tv Shows",
        href: "tv",
        icon:<PiTelevisionFill/>
    },
    {
        label: "Movies",
        href: "movie",
        icon:<BiSolidMoviePlay/>
    }
]

export const MobileNavigation=[
    {
        label: "Home",
        href:"/",
        icon:<MdHome/>,

    },
    ...navigation
];
