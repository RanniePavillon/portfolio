import Pos from '../img/portImages/pos.png';
import Retail from '../img/portImages/retail.png';
import Paymeshare from '../img/portImages/paymeshare.png';
import onlineOrdering from '../img/portImages/online_ordering.png';
import pofshop from '../img/portImages/pofshop.png';
import POFTeambond from '../img/portImages/teambond.png';

const portfolios = [
    {
        id: 1,
        category: 'PHP Laravel',
        link1: 'https://pos.dadasgroup.com/',
        icon1: 'check it now',
        image: Pos,
        title: 'POS'
    },
    {
        id: 2,
        category: 'PHP Laravel',
        link1: 'https://dadas.pofsis.com/category/market/all',
        icon1: 'Check it now',
        image: onlineOrdering,
        title: 'Online Ordering'
    },
    {
        id: 3,
        category: 'ReactJS/Python',
        link1: 'www.youtube.com',
        icon1: 'check it now',
        image: pofshop,
        title: 'POFSHOP'
    },
    {
        id: 4,
        category: 'ReactJS/Python',
        link1: 'https://dev-books-retail.pofsis.com/',
        icon1: 'check it now',
        image: Retail,
        title: 'Retail Form'
    },
    {
        id: 5,
        category: 'ReactJS/Python',
        link1: 'http://dev-paymeshare.pofsis.com/',
        icon1: 'check it now',
        image: Paymeshare,
        title: 'PayMeShare'
    },
    {
        id: 6,
        category: 'ReactJS/Python',
        link1: 'https://teambond.pofsis.com/',
        icon1: 'check it now',
        image: POFTeambond,
        title: 'POFTeambond'
    }
]

export default portfolios;