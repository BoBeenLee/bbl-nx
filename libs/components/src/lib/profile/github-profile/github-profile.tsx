import _ from 'lodash';
import styled from 'styled-components';
import Avatar from '../../avatar/avatar';

/* eslint-disable-next-line */
export interface GithubProfileProps {
  avatarUrl: string;
  email: string;
  location: string;
  followerCount: number;
  followingCount: number;
  organizations: Array<GithubProfileOrganization>;
}

interface GithubProfileOrganization {
  avatarUrl: string;
  name: string;
  memberCount: number;
}

const StyledGithubProfile = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;
`;

const AvatarBox = styled.div`
  grid-column: 1/2;
  grid-row: 1/3;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ProfileBox = styled.div`
  grid-column: 2/5;
  grid-row: 1/3;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const ProfileItemBox = styled.div``;

const OrganizationBox = styled.div`
  grid-column: 1/5;
  grid-row: 3;
  /* background: green; */
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
`;

const OrganizationItemBox = styled.div``;

export function GithubProfile(props: GithubProfileProps) {
  const {
    avatarUrl,
    email,
    location,
    followerCount,
    followingCount,
    organizations,
  } = props;

  const renderOranization = (item: GithubProfileOrganization) => (
    <OrganizationItemBox>{item.name}</OrganizationItemBox>
  );

  return (
    <StyledGithubProfile>
      <AvatarBox>
        <Avatar src={avatarUrl} width="80%" />
      </AvatarBox>
      <ProfileBox>
        <ProfileItemBox>{email}</ProfileItemBox>
        <ProfileItemBox>{location}</ProfileItemBox>
        <ProfileItemBox>
          follower {followerCount} following {followingCount}
        </ProfileItemBox>
      </ProfileBox>
      <OrganizationBox>
        {_.map(organizations, renderOranization)}
      </OrganizationBox>
    </StyledGithubProfile>
  );
}

GithubProfile.defaultProps = {
  avatarUrl: 'https://avatars0.githubusercontent.com/u/1489321?v=4',
  email: 'globaldev@naver.com',
  location: 'Seoul',
  followerCount: 100,
  followingCount: 100,
  organizations: [
    {
      avatarUrl: 'https://avatars2.githubusercontent.com/u/4995702?v=4',
      name: 'Nexters',
      memberCount: 109,
    },
  ],
};

export default GithubProfile;
