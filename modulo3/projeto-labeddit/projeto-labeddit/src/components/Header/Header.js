import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import { goToLogin, goToFeed } from '../../routes/coordinator';
import { useHistory } from 'react-router-dom';
import { Container } from './styled';


const Header = () => {
  const history = useHistory()

  const logout = () => {
    localStorage.removeItem("token")
    goToLogin(history)
  }

  return (
    <div>
      <AppBar position="sticky">
        <Container>
          <Button size="large" onClick={() => goToFeed(history)}>
            LabEddit
          </Button>
          <Button color="inherit" onClick={logout}>Logout</Button>
        </Container>
      </AppBar>
    </div>
  );
}

export default Header