import { useDispatch, useSelector } from 'react-redux';
// @ts-expect-error TS(2307): Cannot find module 'redux/auth' or its correspondi... Remove this comment to see the full error message
import { authSelectors, authOperations } from 'redux/auth';
import {
  UserMenuStyled,
  UserMenuSpan,
  LogOutButton,
  IconButton,
} from './UserMenu.styled';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const name = useSelector(authSelectors.getUserName);
  // @ts-expect-error TS(2802): Type '"😊🙃🤪🤓🤯😴💩👻👽🤖👾👐🖖✌️🤟🤘🤙👋🐭🦕🦖�... Remove this comment to see the full error message
  const allowedEmoji = [...'😊🙃🤪🤓🤯😴💩👻👽🤖👾👐🖖✌️🤟🤘🤙👋🐭🦕🦖🐉'];

  return (
    <UserMenuStyled>
      // @ts-expect-error TS(2746): This JSX tag's 'children' prop expects a single ch... Remove this comment to see the full error message
      // @ts-expect-error TS(2746): This JSX tag's 'children' prop expects a single ch... Remove this comment to see the full error message
      <UserMenuSpan>
        Welcome, {name}{' '}
        <span role="img" aria-label="hello">
          {[...allowedEmoji][Math.floor(Math.random() * allowedEmoji.length)]}
        </span>
      </UserMenuSpan>
      <LogOutButton
        type="button"
        onClick={() => {
          dispatch(authOperations.logout());
        }}
      >
        Log out
        <IconButton />
      </LogOutButton>
    </UserMenuStyled>
  );
};
