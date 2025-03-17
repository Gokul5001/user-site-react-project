import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';

  export const SidebarData = [
    {
      title: 'Home',
      path: '/',
      icon: <AiIcons.AiFillHome />,
      cName: 'nav-text'
    },
    {
      title: 'Reports',
      path: '/reports',
      icon: <IoIcons.IoIosPaper />,
      cName: 'nav-text'
    },
    {
      title: 'Products',
      path: '/product',
      icon: <FaIcons.FaCartPlus />,
      cName: 'nav-text'
    },
    {
      title: 'Register Employee Details',
      path: '/register',
      icon: <IoIcons.IoMdPeople />,
      cName: 'nav-text',
      visibleOnlyWhenLoggedIn: true  
    },
    {
      title: 'Employee Details',
      path: '/employees',
      icon: <IoIcons.IoMdPeople />,
      cName: 'nav-text',
      visibleOnlyWhenLoggedIn: true 
    },
    {
      title: 'Team Master',
      path: '/team-master',
      icon: <IoIcons.IoMdPeople />,
      cName: 'nav-text',
      visibleOnlyWhenLoggedIn: true  
    },
    {
      title: 'Messages',
      path: '/messages',
      icon: <FaIcons.FaEnvelopeOpenText />,
      cName: 'nav-text'
    },
    {
      title: 'Chat Support',
      path: '/support',
      icon: <IoIcons.IoMdHelpCircle />,
      cName: 'nav-text'
    }
  ];
