import React from 'react';
import Link from 'next/link';
import Head from 'next/head';
import styled from 'styled-components';

interface IProps {
  title?: string,
}

const MainLayout: React.FC<IProps> = ({ children, title = 'Next App' }) => {
  return (
    <>
      <Head>
        <title>{title} | Next Study</title>
      </Head>
      <header className="header">
        <ul className="nav main-nav">
          <MainNavItem className="nav-item me-auto">
            <Link href={'#'}>
              <a className="nav-link">User Pages</a>
            </Link>
          </MainNavItem>
          <MainNavItem className="nav-item">
            <Link href={'#'}>
              <a className="nav-link">Bell</a>
            </Link>
          </MainNavItem>
          <MainNavItem className="nav-item">
            <Link href={'#'}>
              <a className="nav-link">Profile</a>
            </Link>
          </MainNavItem>
        </ul>
        <ul className="nav sub-nav">
          <SubNavItem className="nav-item">
            <Link href={'/'}>
              <a className="nav-link">Todo</a>
            </Link>
          </SubNavItem>
          <SubNavItem className="nav-item">
            <Link href={'/map'}>
              <a className="nav-link">Map</a>
            </Link>
          </SubNavItem>
          <SubNavItem className="nav-item me-auto">
            <Link href={'/time'}>
              <a className="nav-link">Time</a>
            </Link>
          </SubNavItem>
          <SubNavItem className="nav-item ms-auto">
            <Link href={'#'}>
              <a className="nav-link">Notes</a>
            </Link>
          </SubNavItem>
          <SubNavItem className="nav-item">
            <Link href={'#'}>
              <a className="nav-link">Friends</a>
            </Link>
          </SubNavItem>
          <SubNavItem className="nav-item">
            <Link href={'#'}>
              <a className="nav-link">Photos</a>
            </Link>
          </SubNavItem>
          <SubNavItem className="nav-item dropdown mr-0 ml-auto">
            <Link href={'#'}>
            <a
              className="nav-link dropdown-toggle"
              data-bs-toggle="dropdown"
              role="button"
              aria-expanded="false"
            >
              Dropdown
            </a>
            </Link>
          </SubNavItem>
        </ul>
      </header>
      <main>
        { children }
      </main>
      <style jsx>{`
        header {
          box-shadow: 0px 0px 16px rgba(0, 0, 0, 0.1);
        }
        
        main-nav, sub-nav {
          background-color: #FFFFFF;
        }
        
        main-nav {
          border-bottom: 1px solid #DDE0E6;
        }
        
        main-nav {
          font-weight: 400;
          font-size: 16px;
          line-height: 24px;
          color: #2D2F33;
        }
     `}</style>
    </>
  );
};

export default MainLayout;

const MainNavItem = styled.li`
  .nav-link {
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    color: #2D2F33;
  }
`;

const SubNavItem = styled.li`
  .nav-link {
    font-size: 14px;
    font-weight: 500;
    line-height: 20px;
    letter-spacing: 0.015em;
    color: #6E7178;
  }
`;
