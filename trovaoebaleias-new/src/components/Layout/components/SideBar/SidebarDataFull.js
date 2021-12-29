import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';

export const SidebarDataFull = [
    {
        title:'Home',
        path:"/homeafter",
        icon:<AiIcons.AiFillHome/>,
        cName: 'nav-text'
    },
    {
        title:'Editar Perfil',
        path:"/editarperfil",
        icon:<FaIcons.FaPencilAlt/>,
        cName:'nav-text'
    },
    {
        title:'Livros',
        path:"/livros",
        icon:<IoIcons.IoIosBook/>,
        cName: 'nav-text'
    },
    {
        title:'Planos',
        path:"/planosafter",
        icon:<AiIcons.AiOutlineCreditCard/>,
        cName: 'nav-text'
    },
    {
        title:'Carteira',
        path:"/carteira",
        icon:<FaIcons.FaWallet/>,
        cName: 'nav-text'
    },
]
