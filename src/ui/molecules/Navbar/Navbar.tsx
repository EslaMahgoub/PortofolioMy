import './Navbar.scss';
import { useMenu } from 'hooks/useMenu';
import { history } from 'libs/http/history';


export const Navbar = (): React.ReactElement => {
  const menu = useMenu();

  const goToPage = (route: string): void => {
    history.push(route);
  } 
  return (
    <>
      <div className="navbar">
        <div className="navbar__title">Me</div>

        <div className="navbar__socials">Social Link</div>

      </div>
      <div className="menu"
      >
        {menu.map((item) =><span 
        className={`menu__item${item.active?"--active": ""}`} key={item.route}
        onClick={() =>goToPage(item.route)}
        >
          {item.label}
          
          </span> 
        )}
      </div>
    </>
  )
}

