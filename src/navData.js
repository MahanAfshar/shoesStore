import { HiMiniHome } from "react-icons/hi2";
import { BiSolidCategory } from "react-icons/bi";
import { TbGiftFilled } from "react-icons/tb";
import { BiSupport } from "react-icons/bi";

const navData = [
    {
        name: 'Home',
        icon: HiMiniHome,
        subMenu: true,
        subLinks: [
            {
                link: 'First page'
            },
            {
                link: 'Second page'
            },
        ]
    },
    {
        name: 'Brand',
        icon: BiSolidCategory,
        subMenu: true,
        subLinks: [
            {
                link: 'All'
            },
            {
                link: 'Adidas',
            },
            {
                link: 'Nike',
            },
            {
                link: 'Puma',
            },
        ],
    },
    {
        name: 'Gifts',
        icon: TbGiftFilled,
        subMenu: false,
    },
    {
        name: 'Contact Us',
        icon: BiSupport,
        subMenu: false,
    },
];

export { navData };