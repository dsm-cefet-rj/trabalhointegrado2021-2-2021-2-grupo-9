import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';

export const SidebarData = [
    {
    title:'Cadastre-se',
    path:"/cadastro",
    icon:<FaIcons.FaIdBadge/>,
    cName: 'nav-text'
    },
    {
    title:'Home',
    path:"/",
    icon:<AiIcons.AiFillHome/>,
    cName: 'nav-text'
    },
    {
    title:'Planos',
    path:"/planos",
    icon:<FaIcons.FaMoneyCheck />,
    cName:'nav-text'
    },
    {
    title:'Contato',
    path:"/contato",
    icon:<FaIcons.FaPhoneAlt/>,
    cName:'nav-text'
    }

]

export default SidebarData;
