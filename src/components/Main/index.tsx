import React from 'react';

import { Container, Header, BackIcon, ProfileInfo, BottomMenu, HomeIcon, EmailIcon, SearchIcon,  } from './styles';

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
          {/*<ProfilePage /> */}
           <BottomMenu>
              <HomeIcon />
              <SearchIcon />
              <BellIcon />
              <EmailIcon />
          </BottomMenu> 
      </Container>
  )
}

export default index;
