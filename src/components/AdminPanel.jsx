import React from 'react';
import { Link } from 'react-router-dom';
import { isLogin, logOut } from '../localStorage';

const AdminPanel = () => {
  const [state, setState] = React.useState(false);

  React.useEffect(() => setState(isLogin()), []);

  const handleLogout = () => {
    logOut();
    setState(false);
  };

  return (
    <div className='admin-panel'>
      <div className='container'>
        <div className='nav'>
          <div className='nav__link'>
            <svg width='20' height='20' viewBox='0 0 20 20' fill='none' xmlns='http://www.w3.org/2000/svg'>
              <path
                d='M18.2143 8.21429H12.1429C11.9456 8.21429 11.7857 8.05437 11.7857 7.85714V1.78571C11.7857 0.799561 10.9862 0 10 0C9.01385 0 8.21429 0.799561 8.21429 1.78571V7.85714C8.21429 8.05437 8.05437 8.21429 7.85714 8.21429H1.78571C0.799561 8.21429 0 9.01385 0 10C0 10.9862 0.799561 11.7857 1.78571 11.7857H7.85714C8.05437 11.7857 8.21429 11.9456 8.21429 12.1429V18.2143C8.21429 19.2004 9.01385 20 10 20C10.9862 20 11.7857 19.2004 11.7857 18.2143V12.1429C11.7857 11.9456 11.9456 11.7857 12.1429 11.7857H18.2143C19.2004 11.7857 20 10.9862 20 10C20 9.01385 19.2004 8.21429 18.2143 8.21429Z'
                fill='#555555'
              />
            </svg>
            <Link to='/admin/new-post'>Add new Post</Link>
          </div>
          <div className='nav__link'>
            <svg width='20' height='20' viewBox='0 0 20 20' fill='none' xmlns='http://www.w3.org/2000/svg'>
              <path
                d='M19.1458 0.674039L19.1217 0.652083C18.6614 0.231597 18.0647 0 17.4415 0C16.7429 0 16.0721 0.295745 15.6011 0.811335L6.69544 10.5612C6.61427 10.6501 6.5527 10.7549 6.51463 10.8691L5.46746 14.0083C5.34639 14.3713 5.40715 14.7727 5.62998 15.082C5.85458 15.3937 6.21642 15.5799 6.59799 15.5799H6.59804C6.76309 15.5799 6.9244 15.5459 7.0774 15.479L10.1094 14.1526C10.2196 14.1044 10.3185 14.0336 10.3996 13.9447L19.3053 4.19489C20.2321 3.18039 20.1606 1.60106 19.1458 0.674039ZM7.47381 13.4284L8.08829 11.5863L8.14011 11.5296L9.30475 12.5933L9.25293 12.6501L7.47381 13.4284ZM18.0356 3.03501L10.4646 11.3236L9.29999 10.2599L16.8709 1.97121C17.019 1.80909 17.2216 1.71978 17.4415 1.71978C17.6345 1.71978 17.8192 1.79155 17.9622 1.92214L17.9862 1.9441C18.3006 2.23124 18.3227 2.72063 18.0356 3.03501Z'
                fill='#555555'
              />
              <path
                d='M17.4181 7.93322C16.9432 7.93322 16.5582 8.31822 16.5582 8.79311V16.0934C16.5582 17.2992 15.5772 18.2802 14.3714 18.2802H3.94956C2.74371 18.2802 1.76275 17.2992 1.76275 16.0934V5.75626C1.76275 4.55047 2.74377 3.56945 3.94956 3.56945H11.4929C11.9678 3.56945 12.3528 3.18445 12.3528 2.70956C12.3528 2.23467 11.9678 1.84967 11.4929 1.84967H3.94956C1.79542 1.84967 0.0429688 3.60218 0.0429688 5.75626V16.0933C0.0429688 18.2474 1.79548 19.9999 3.94956 19.9999H14.3713C16.5254 19.9999 18.2779 18.2474 18.2779 16.0933V8.79311C18.278 8.31822 17.893 7.93322 17.4181 7.93322Z'
                fill='#555555'
              />
            </svg>
            <Link to='/allposts'>Edit Post</Link>
          </div>
          <div className='nav__link'>
            <svg width='20' height='20' viewBox='0 0 20 20' fill='none' xmlns='http://www.w3.org/2000/svg'>
              <path
                d='M16.5625 2.5H13.125V1.875C13.125 0.841133 12.2839 0 11.25 0H8.75C7.71613 0 6.875 0.841133 6.875 1.875V2.5H3.4375C2.57594 2.5 1.875 3.20094 1.875 4.0625V6.25C1.875 6.59516 2.15484 6.875 2.5 6.875H2.84156L3.38152 18.2142C3.42922 19.2156 4.25187 20 5.25437 20H14.7456C15.7482 20 16.5708 19.2156 16.6185 18.2142L17.1584 6.875H17.5C17.8452 6.875 18.125 6.59516 18.125 6.25V4.0625C18.125 3.20094 17.4241 2.5 16.5625 2.5ZM8.125 1.875C8.125 1.53039 8.40539 1.25 8.75 1.25H11.25C11.5946 1.25 11.875 1.53039 11.875 1.875V2.5H8.125V1.875ZM3.125 4.0625C3.125 3.8902 3.2652 3.75 3.4375 3.75H16.5625C16.7348 3.75 16.875 3.8902 16.875 4.0625V5.625C16.6824 5.625 3.92316 5.625 3.125 5.625V4.0625ZM15.3699 18.1547C15.354 18.4885 15.0798 18.75 14.7456 18.75H5.25437C4.9202 18.75 4.64598 18.4885 4.63012 18.1547L4.09297 6.875H15.907L15.3699 18.1547Z'
                fill='#555555'
              />
              <path
                d='M10 17.5C10.3452 17.5 10.625 17.2202 10.625 16.875V8.75C10.625 8.40484 10.3452 8.125 10 8.125C9.65484 8.125 9.375 8.40484 9.375 8.75V16.875C9.375 17.2202 9.6548 17.5 10 17.5Z'
                fill='#555555'
              />
              <path
                d='M13.125 17.5C13.4702 17.5 13.75 17.2202 13.75 16.875V8.75C13.75 8.40484 13.4702 8.125 13.125 8.125C12.7798 8.125 12.5 8.40484 12.5 8.75V16.875C12.5 17.2202 12.7798 17.5 13.125 17.5Z'
                fill='#555555'
              />
              <path
                d='M6.875 17.5C7.22016 17.5 7.5 17.2202 7.5 16.875V8.75C7.5 8.40484 7.22016 8.125 6.875 8.125C6.52984 8.125 6.25 8.40484 6.25 8.75V16.875C6.25 17.2202 6.5298 17.5 6.875 17.5Z'
                fill='#555555'
              />
            </svg>
            <Link to='/allposts'>Delete Post</Link>
          </div>
          <div className='nav__link'>
            <svg width='20' height='20' viewBox='0 0 20 20' fill='none' xmlns='http://www.w3.org/2000/svg'>
              <g clipPath='url(#clip0)'>
                <path
                  d='M10 4.03906C6.17879 4.03906 2.71351 6.12968 0.15649 9.52541C-0.0521632 9.80361 -0.0521632 10.1923 0.15649 10.4705C2.71351 13.8703 6.17879 15.9609 10 15.9609C13.8212 15.9609 17.2865 13.8703 19.8435 10.4746C20.0522 10.1964 20.0522 9.8077 19.8435 9.5295C17.2865 6.12968 13.8212 4.03906 10 4.03906ZM10.2741 14.1976C7.73755 14.3572 5.64284 12.2665 5.80239 9.72588C5.93331 7.63117 7.63118 5.9333 9.72589 5.80238C12.2625 5.64283 14.3572 7.73345 14.1976 10.2741C14.0626 12.3647 12.3647 14.0626 10.2741 14.1976ZM10.1473 12.2584C8.78081 12.3443 7.65163 11.2192 7.74164 9.85271C7.81119 8.72353 8.72763 7.81118 9.85681 7.73754C11.2233 7.65162 12.3525 8.77671 12.2625 10.1432C12.1888 11.2765 11.2724 12.1888 10.1473 12.2584Z'
                  fill='#555555'
                />
              </g>
              <defs>
                <clipPath id='clip0'>
                  <rect width='20' height='20' fill='white' />
                </clipPath>
              </defs>
            </svg>
            <Link to='/allposts'>See all Posts</Link>
          </div>
          <div className='nav__link'>
            <svg width='20' height='20' viewBox='0 0 20 20' fill='none' xmlns='http://www.w3.org/2000/svg'>
              <g clipPath='url(#clip0)'>
                <path
                  d='M14.1406 15.3125V16.875C14.1406 18.5982 12.7388 20 11.0156 20H3.16406C1.44089 20 0.0390625 18.5982 0.0390625 16.875V3.125C0.0390625 1.40182 1.44089 0 3.16406 0H11.0156C12.7388 0 14.1406 1.40182 14.1406 3.125V4.6875C14.1406 5.11902 13.7909 5.46875 13.3594 5.46875C12.9279 5.46875 12.5781 5.11902 12.5781 4.6875V3.125C12.5781 2.26349 11.8771 1.5625 11.0156 1.5625H3.16406C2.30255 1.5625 1.60156 2.26349 1.60156 3.125V16.875C1.60156 17.7365 2.30255 18.4375 3.16406 18.4375H11.0156C11.8771 18.4375 12.5781 17.7365 12.5781 16.875V15.3125C12.5781 14.881 12.9279 14.5312 13.3594 14.5312C13.7909 14.5312 14.1406 14.881 14.1406 15.3125ZM19.467 8.65799L17.7176 6.90857C17.4124 6.60339 16.9177 6.60339 16.6127 6.90857C16.3075 7.21359 16.3075 7.70828 16.6127 8.01331L17.8571 9.25781H8.47656C8.04504 9.25781 7.69531 9.60754 7.69531 10.0391C7.69531 10.4706 8.04504 10.8203 8.47656 10.8203H17.8571L16.6127 12.0648C16.3075 12.3698 16.3075 12.8645 16.6127 13.1696C16.7653 13.3221 16.9652 13.3984 17.1651 13.3984C17.3651 13.3984 17.565 13.3221 17.7176 13.1696L19.467 11.4201C20.2286 10.6586 20.2286 9.41956 19.467 8.65799V8.65799Z'
                  fill='#555555'
                />
              </g>
              <defs>
                <clipPath id='clip0'>
                  <rect width='20' height='20' fill='white' />
                </clipPath>
              </defs>
            </svg>
            <Link onClick={() => handleLogout()} to='/'>
              Logout
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminPanel;