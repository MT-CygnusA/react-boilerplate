import React from 'react';
import { Container, Divider, Dropdown, Header, List, Menu } from 'semantic-ui-react';

interface IAuthenticatedLayoutProps {
  onLogout: () => void;
  children: React.ReactNode;
}

const AuthenticatedLayout: React.FC<IAuthenticatedLayoutProps> = ({ onLogout, children }) => {
  return (
    <div>
      <Menu fixed="top" inverted>
        <Container>
          <Menu.Item as="a" header>
            The simplified version of product
          </Menu.Item>

          <Dropdown item simple text="Settings">
            <Dropdown.Menu>
              <Dropdown.Item onClick={onLogout}>Logout</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Container>
      </Menu>

      <Container style={{ marginTop: '7em' }}>
        <Header>Customer feedback system</Header>

        <Divider horizontal>Description area</Divider>

        <p>This is a very simple product that would allow clients to see what their
          customers are speaking about in their feedback and what emotions they express. It simply
          displays product review as well as emotions that their customers express
          when speaking about aspects.</p>
        <p>In the filters panel we can filter by theme.
          In a filter user can select one of the human-readable options from dropdown.
          When a filter is updated the feed updates accordingly.
          The feed is simply a list of product reviews. Each component in a list
          displays a comment field of a product review as well as themes with their sentiment:</p>
        <List>
          <List.Item>
            <List.Icon name='thumbs down outline' color='red' />
            <List.Content>Negative sentiment</List.Content>
          </List.Item>
          <List.Item>
            <List.Icon name='file outline' color='orange' />
            <List.Content>Neutral sentiment</List.Content>
          </List.Item>
          <List.Item>
            <List.Icon name='thumbs up outline' color='teal' />
            <List.Content>Positive sentiment</List.Content>
          </List.Item>
        </List>

        <Divider horizontal>Application area</Divider>

        {children}
      </Container>
    </div>
  );
};

export { AuthenticatedLayout };
