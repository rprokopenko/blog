import React from 'react';
import { Link } from 'react-router-dom';

import caretDownSvg from '../assets/img/caret-down.svg';

const Sidebar = () => {
  const [isShown, setIsShown] = React.useState(true);

  const toggleIsShown = () => setIsShown(!isShown);

  return (
    <div className='sidebar'>
      <div className='container'>
        <div className='sidebar__menu'>
          <ul className='menu__list'>
            <li>
              <span onClick={toggleIsShown}>Web programming</span>
              <img className={isShown ? '' : 'caret-up'} src={caretDownSvg} alt='caret-down' />
              <ul className='web-items' style={isShown ? null : { display: 'none' }}>
                <li>
                  <Link to='/web-programming/JavaScript'>JavaScript</Link>
                </li>
                <li>
                  <Link className='active' to='/web-programming/ReactJS'>
                    ReactJS
                  </Link>
                </li>
                <li>
                  <Link to='/web-programming/NodeJS'>NodeJS</Link>
                </li>
                <li>
                  <Link to='/web-programming/PHP'>PHP</Link>
                </li>
                <li>
                  <Link to='/web-programming/CSS'>CSS</Link>
                </li>
              </ul>
            </li>
            <li>
              <Link to='/Notes'>Notes</Link>
            </li>
            <li>
              <Link to='/Advice'>Advice</Link>
            </li>
            <li>
              <a href='https://github.com/rprokopenko'>About me</a>
            </li>
          </ul>
        </div>
        <div className='sidebar__social'>
          <a target='_blank' rel='noopener noreferrer' href='https://www.instagram.com/senior_script/'>
            <svg width='25' height='25' viewBox='0 0 25 25' fill='none' xmlns='http://www.w3.org/2000/svg'>
              <path
                d='M18.1006 0H6.89891C3.09485 0 0 3.095 0 6.89905V18.1008C0 21.905 3.09485 24.9998 6.89891 24.9998H18.1006C21.905 24.9998 24.9998 21.9048 24.9998 18.1008V6.89905C25 3.095 21.905 0 18.1006 0ZM22.7819 18.1008C22.7819 20.6819 20.6819 22.7817 18.1008 22.7817H6.89891C4.31792 22.7819 2.21811 20.6819 2.21811 18.1008V6.89905C2.21811 4.31806 4.31792 2.21811 6.89891 2.21811H18.1006C20.6818 2.21811 22.7817 4.31806 22.7817 6.89905V18.1008H22.7819Z'
                fill='#868686'
              />
              <path
                d='M12.4999 6.05841C8.94786 6.05841 6.05811 8.94816 6.05811 12.5002C6.05811 16.0522 8.94786 18.9418 12.4999 18.9418C16.052 18.9418 18.9418 16.0522 18.9418 12.5002C18.9418 8.94816 16.052 6.05841 12.4999 6.05841ZM12.4999 16.7235C10.1711 16.7235 8.27621 14.829 8.27621 12.5001C8.27621 10.1711 10.1709 8.27637 12.4999 8.27637C14.8289 8.27637 16.7237 10.1711 16.7237 12.5001C16.7237 14.829 14.8288 16.7235 12.4999 16.7235Z'
                fill='#868686'
              />
              <path
                d='M19.2121 4.17761C18.7847 4.17761 18.3649 4.35062 18.0631 4.65377C17.7598 4.95543 17.5854 5.37539 17.5854 5.80422C17.5854 6.23173 17.7599 6.65154 18.0631 6.95468C18.3647 7.25635 18.7847 7.43084 19.2121 7.43084C19.6409 7.43084 20.0594 7.25635 20.3625 6.95468C20.6657 6.65154 20.8387 6.23158 20.8387 5.80422C20.8387 5.37539 20.6657 4.95543 20.3625 4.65377C20.0608 4.35062 19.6409 4.17761 19.2121 4.17761Z'
                fill='#868686'
              />
            </svg>
          </a>
          <a target='_blank' rel='noopener noreferrer' href='https://www.facebook.com/seniorscript7/'>
            <svg width='25' height='25' viewBox='0 0 25 25' fill='none' xmlns='http://www.w3.org/2000/svg'>
              <path
                d='M12.0001 5.65817C12.648 5.65817 13.1733 5.1329 13.1733 4.48499C13.1733 3.30571 14.1328 2.34636 15.3119 2.34636H18.6248C19.2727 2.34636 19.798 1.82109 19.798 1.17318C19.798 0.525272 19.2727 0 18.6248 0H15.3119C12.8388 0 10.8269 2.01193 10.8269 4.48499C10.8269 5.13274 11.3522 5.65817 12.0001 5.65817Z'
                fill='#868686'
              />
              <path
                d='M18.3731 9.32709H6.37508C5.72718 9.32709 5.2019 9.85236 5.2019 10.5003C5.2019 11.1482 5.72718 11.6734 6.37508 11.6734H10.8269V23.8268C10.8269 24.4747 11.3522 25 12.0001 25C12.648 25 13.1733 24.4747 13.1733 23.8268V11.6734H18.3733C19.0212 11.6734 19.5465 11.1482 19.5465 10.5003C19.5465 9.85236 19.021 9.32709 18.3731 9.32709Z'
                fill='#868686'
              />
            </svg>
          </a>
          <a target='_blank' rel='noopener noreferrer' href='https://www.linkedin.com/in/roman-prokopenko/'>
            <svg width='25' height='25' viewBox='0 0 25 25' fill='none' xmlns='http://www.w3.org/2000/svg'>
              <path
                d='M2.37536 5.88257C1.69507 5.88257 1.14355 6.43409 1.14355 7.11437V23.7682C1.14355 24.4485 1.69507 25 2.37536 25C3.05564 25 3.60716 24.4485 3.60716 23.7682V7.11437C3.60716 6.43392 3.05564 5.88257 2.37536 5.88257Z'
                fill='#868686'
              />
              <path
                d='M11.1703 18.8965C10.49 18.8965 9.93848 19.448 9.93848 20.1283V23.7682C9.93848 24.4485 10.49 25 11.1703 25C11.8506 25 12.4021 24.4485 12.4021 23.7682V20.1283C12.4021 19.448 11.8506 18.8965 11.1703 18.8965Z'
                fill='#868686'
              />
              <path
                d='M16.898 7.20848C15.1851 7.20848 13.616 7.83161 12.4021 8.86156V7.11437C12.4021 6.43409 11.8506 5.88257 11.1703 5.88257C10.49 5.88257 9.93848 6.43409 9.93848 7.11437V14.1664C9.93848 14.1665 9.93848 14.1667 9.93848 14.1668C9.93848 14.1672 9.93848 14.1673 9.93848 14.1678C9.93848 14.8481 10.49 15.3996 11.1703 15.3996C11.8506 15.3996 12.4021 14.8481 12.4021 14.1678C12.4021 11.6888 14.419 9.67208 16.898 9.67208C19.3769 9.67208 21.3936 11.6888 21.3936 14.1678V23.7682C21.3936 24.4485 21.9451 25 22.6254 25C23.3058 25 23.8572 24.4485 23.8572 23.7682V14.1678C23.8572 10.3304 20.7355 7.20848 16.898 7.20848Z'
                fill='#868686'
              />
              <path
                d='M2.37487 2.4636C2.69842 2.4636 3.01705 2.33221 3.24698 2.10392C3.47528 1.87398 3.60667 1.557 3.60667 1.23344C3.60667 0.908249 3.47528 0.591265 3.24698 0.361329C3.01705 0.133035 2.69842 0 2.37487 0C2.05132 0 1.73433 0.133035 1.5044 0.361329C1.27446 0.591265 1.14307 0.908249 1.14307 1.23344C1.14307 1.557 1.27446 1.87398 1.5044 2.10392C1.73433 2.33221 2.05132 2.4636 2.37487 2.4636Z'
                fill='#868686'
              />
            </svg>
          </a>
          <a target='_blank' rel='noopener noreferrer' href='https://t.me/senior_script'>
            <svg width='25' height='25' viewBox='0 0 25 25' fill='none' xmlns='http://www.w3.org/2000/svg'>
              <path
                d='M20.1257 23.6809C19.9304 23.6809 19.7365 23.6231 19.5701 23.5103L13.2841 19.2464L9.91265 21.6723C9.64823 21.8625 9.30742 21.9104 9.00038 21.8006C8.69374 21.6905 8.46086 21.4366 8.37773 21.1216L6.68488 14.7062L0.636129 12.3933C0.255336 12.2476 0.00279387 11.8833 2.30254e-05 11.4756C-0.00274782 11.0679 0.244781 10.7002 0.623727 10.5494L23.6233 1.39768C23.7277 1.35335 23.8381 1.32775 23.9495 1.32089C23.9893 1.31851 24.0293 1.31851 24.069 1.32076C24.2997 1.33448 24.5262 1.42843 24.703 1.6018C24.7214 1.61975 24.7388 1.63809 24.7553 1.65722C24.9017 1.82452 24.9822 2.02851 24.9974 2.23632C25.0011 2.28857 25.0008 2.34148 24.9962 2.39439C24.993 2.43213 24.9876 2.46973 24.98 2.50707L21.0977 22.8766C21.0353 23.2038 20.8126 23.4777 20.5049 23.6053C20.3829 23.656 20.254 23.6809 20.1257 23.6809ZM13.836 17.2292L19.4354 21.0273L22.4561 5.17751L11.546 15.6758L13.8096 17.2114C13.8187 17.2171 13.8275 17.2232 13.836 17.2292ZM9.17481 16.3846L9.92452 19.2254L11.5398 18.0631L9.42472 16.6283C9.32642 16.5618 9.24224 16.479 9.17481 16.3846ZM3.71242 11.4504L7.86579 13.0384C8.16332 13.1521 8.38789 13.4023 8.46917 13.7103L8.9959 15.7064C9.02004 15.4762 9.12441 15.2596 9.29396 15.0963L19.6898 5.09306L3.71242 11.4504Z'
                fill='#868686'
              />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
