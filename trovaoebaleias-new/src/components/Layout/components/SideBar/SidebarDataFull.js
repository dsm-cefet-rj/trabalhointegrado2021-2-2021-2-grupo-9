import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';

export const SidebarData = [
    {
    title:'Editar Perfil',
    path:"/editar",
    icon:<FaIcons.FaPencilAlt/>,
    cName:'nav-text'
    },
    {
    title:'Home',
    path:"/homeafter",
    icon:<AiIcons.AiFillHome/>,
    cName: 'nav-text'
    },
    {
        title:'Planos',
        path:"/planosafter",
        icon:<AiIcons.AiTwotoneMoneyCollect/>,
        cName: 'nav-text'
    },
    {
        title:'Histórico de Livros',
        path:"/historico",
        icon:<AiIcons.AiOutlineMoneyCollect/>,
        cName: 'nav-text'
    },
]

export default SidebarData;
