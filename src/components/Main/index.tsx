import React from 'react';

import ProfilePage from '../ProfilePage'

import { Container, Header, BackIcon, BellIcon, ProfileInfo, BottomMenu, HomeIcon, EmailIcon, SearchIcon,  } from './styles';

function index() {
  return (
      <Container>
          <Header>
              <button>
                  <BackIcon />
              </button>

              <ProfileInfo>
                  <strong>Brandon</strong>
                  <span>500 Tweets</span>
              </ProfileInfo>
          </Header>
          <ProfilePage /> 
           <BottomMenu>
              <HomeIcon className="active" />
              <SearchIcon />
              <BellIcon />
              <EmailIcon />
          </BottomMenu> 
      </Container>
  )
}

export default index;
