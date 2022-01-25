import React from "react";

import Feed from '../Feed';

import { Container, Banner, Avatar, ProfileData, LocationIcon, CakeIcon, Followage, EditButton } from './style';

const ProfilePage: React.FC = () => {
    return(
        <Container>
            <Banner>
                <Avatar /> 
            </Banner>
            <ProfileData>
            <EditButton outlined>Editar perfil</EditButton>
              <h1>Brandon Louis</h1>
              <h2>@Loouisbrandon</h2>
              <p>
                  Developer
              </p>

              <ul>
                  <li>
                      <LocationIcon />
                      Rio de Janeiro, Brasil
                  </li>
                  <li>
                      <CakeIcon />
                      Nascido(a) em 17 de Abril de 1997
                  </li>
              </ul>
              <Followage>
                  <span>
                      seguindo <strong>1010</strong>
                  </span>
                  <span>
                      <strong>172 </strong> seguidores
                  </span>
              </Followage>
            </ProfileData>
            <Feed />
        </Container>
    );
}

export default ProfilePage; 