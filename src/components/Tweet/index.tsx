import React from 'react';

import {
    Container,
    Retweeted,
    Body,
    Avatar,
    Content,
    Header,
    Dot,
    Description,
    ImageContent,
    Icons,
    Status,
    CommentIcon,
    RetweetIcon,
    LikeIcon
} from './styles'

const Tweet: React.FC = () => {
    return (
        <Container>
            <Retweeted>
                Você retweetou
            </Retweeted>

            <Body>
                <Avatar />

                <Content>
                    <Header>
                        <strong>Brandon Louis</strong>
                        <span>@Loouisbrandon</span>
                        <Dot />
                        <time>27 de jun</time>
                    </Header>
                    
                    <Description>Pesada sempre se encontra a fronte coroada</Description>

                    <ImageContent />

                    <Icons>
                        <Status>
                            <CommentIcon />
                            17
                        </Status>
                        <Status>
                            <RetweetIcon />
                            14
                        </Status>
                        <Status>
                            <LikeIcon />
                            13
                        </Status>
                    </Icons>
                </Content>
            </Body>
        </Container>
            
    );
}

export default Tweet;