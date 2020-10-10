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
        <Header>Feedback system</Header>

        <Divider horizontal>Description area</Divider>

        <p>This is a very simple product that would allow clients to see what their
          customers are speaking about in their feedback and what emotions they express. It simply
          displays product review as well as emotions that their customers express
          when speaking about aspects.</p>
        <List>
          <List.Item>
            <List.Icon name='thumbs down outline' color='red' />
            <List.Content>Negative sentiment</List.Content>
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
