import { useRef, useState } from "react";

function Navbar(props) {
  const [navActive, set_navActive] = useState({
    home: true,
    trending: false,
    library: false,
    search: false,
  });
  const [search, set_search] = useState("");
  // for search activity
  const search_bar = useRef(undefined);
  const search_btn = useRef(undefined);
  const search_mobile_btn = useRef(undefined);

  document.addEventListener("click", (e) => {
    if (
      !search_btn.current.contains(e.target) &&
      !search_mobile_btn.current.contains(e.target) &&
      !search_bar.current.contains(e.target)
    ) {
      set_navActive((prevState) => {
        return { ...prevState, search: false };
      });
    }
    e.stopImmediatePropagation();
  });
  return (
    <>
      <div className="navbar flex flex-jc-sb flex-ai-c">
        <div className="name flex flex-ai-c">
          <div className="logo" />
          <h1 className="hide-for-mobile">Yt download</h1>
        </div>
        {/* navlist for mobile svg */}
        <div
          className={
            navActive.search
              ? "display-none"
              : "nav-mobile hide-for-desktop flex flex-ai-c flex-jc-sb"
          }
        >
          <svg
          className={navActive.home ? "navActive" : "navDeActive"}
          onClick={() => {
            set_navActive({
              home: true,
              trending: false,
              library: false,
              search: false,
            });
          }}
          fill="currentColor"
            aria-hidden="true"
            focusable="false"
            data-prefix="fas"
            data-icon="headphones-alt"
            // className="svg-inline--fa fa-headphones-alt fa-w-16"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
            width="24px"
            height="24px"
          >
            <path
              // fill="currentColor"
              d="M160 288h-16c-35.35 0-64 28.7-64 64.12v63.76c0 35.41 28.65 64.12 64 64.12h16c17.67 0 32-14.36 32-32.06V320.06c0-17.71-14.33-32.06-32-32.06zm208 0h-16c-17.67 0-32 14.35-32 32.06v127.88c0 17.7 14.33 32.06 32 32.06h16c35.35 0 64-28.71 64-64.12v-63.76c0-35.41-28.65-64.12-64-64.12zM256 32C112.91 32 4.57 151.13 0 288v112c0 8.84 7.16 16 16 16h16c8.84 0 16-7.16 16-16V288c0-114.67 93.33-207.8 208-207.82 114.67.02 208 93.15 208 207.82v112c0 8.84 7.16 16 16 16h16c8.84 0 16-7.16 16-16V288C507.43 151.13 399.09 32 256 32z"
            ></path>
          </svg>

          {/* <svg
            className={navActive.home ? "navActive" : "navDeActive"}
            onClick={() => {
              set_navActive({
                home: true,
                trending: false,
                library: false,
                search: false,
              });
            }}
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="24px"
            height="24px"
          >
            <path d="M12 2.1L1 12 4 12 4 21 10 21 10 14 14 14 14 21 20 21 20 12 23 12z" />
          </svg> */}
          <svg
            className={navActive.trending ? "navActive" : "navDeActive"}
            onClick={() => {
              set_navActive({
                home: false,
                trending: true,
                library: false,
                search: false,
              });
              props.get_trend_videos();
            }}
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 611.999 611.999"
            width="30px"
            height="24px"
          >
            <path
              d="M216.02,611.195c5.978,3.178,12.284-3.704,8.624-9.4c-19.866-30.919-38.678-82.947-8.706-149.952
		c49.982-111.737,80.396-169.609,80.396-169.609s16.177,67.536,60.029,127.585c42.205,57.793,65.306,130.478,28.064,191.029
		c-3.495,5.683,2.668,12.388,8.607,9.349c46.1-23.582,97.806-70.885,103.64-165.017c2.151-28.764-1.075-69.034-17.206-119.851
		c-20.741-64.406-46.239-94.459-60.992-107.365c-4.413-3.861-11.276-0.439-10.914,5.413c4.299,69.494-21.845,87.129-36.726,47.386
		c-5.943-15.874-9.409-43.33-9.409-76.766c0-55.665-16.15-112.967-51.755-159.531c-9.259-12.109-20.093-23.424-32.523-33.073
		c-4.5-3.494-11.023,0.018-10.611,5.7c2.734,37.736,0.257,145.885-94.624,275.089c-86.029,119.851-52.693,211.896-40.864,236.826
		C153.666,566.767,185.212,594.814,216.02,611.195z"
            />
          </svg>
          {/* <svg
            className={navActive.library ? "navActive" : "navDeActive"}
            onClick={() => {
              set_navActive({
                home: false,
                trending: false,
                library: true,
                search: false,
              });
            }}
            width="24px"
            height="24px"
            vertical-align="middle"
            fill="currentColor"
            overflow="hidden"
            viewBox="0 0 1024 1024"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M810.666667 128H213.333333c-46.933333 0-85.333333 38.4-85.333333 85.333333v597.333334c0 46.933333 38.4 85.333333 85.333333 85.333333h597.333334c46.933333 0 85.333333-38.4 85.333333-85.333333V213.333333c0-46.933333-38.4-85.333333-85.333333-85.333333z m-132.266667 482.133333l-149.333333 149.333334c-8.533333 8.533333-21.333333 8.533333-29.866667 0l-149.333333-149.333334c-8.533333-8.533333-8.533333-21.333333 0-29.866666l8.533333-8.533334c4.266667-4.266667 8.533333-4.266667 17.066667-4.266666H426.666667V405.333333c0-12.8 8.533333-21.333333 21.333333-21.333333h128c12.8 0 21.333333 8.533333 21.333333 21.333333v162.133334h55.466667c4.266667 0 12.8 0 17.066667 4.266666l8.533333 8.533334c8.533333 8.533333 8.533333 21.333333 0 29.866666zM810.666667 298.666667H213.333333V213.333333h597.333334v85.333334z" />
          </svg> */}
          <svg
            // id="search_mobile_btn"
            ref={search_mobile_btn}
            className="navDeActive"
            onClick={() => {
              set_navActive((prevState) => {
                return { ...prevState, search: true };
              });
            }}
            aria-hidden="true"
            focusable="false"
            data-prefix="fas"
            width="22px"
            height="22px"
            data-icon="search"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
            fill="currentColor"
          >
            <path d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"></path>
          </svg>
        </div>
        {/* navlist for desktop */}
        <div
          className={
            navActive.search
              ? "nav display-none hide-for-mobile"
              : "nav flex flex-jc-sb flex-ai-c hide-for-mobile"
          }
        >
          <a
            href="#"
            className={navActive.home ? "navActive" : "navDeActive"}
            onClick={() => {
              set_navActive({
                home: true,
                trending: false,
                library: false,
                search: false,
              });
              props.get_music();
            }}
          >
            Music
          </a>
          <a
            className={navActive.trending ? "navActive" : "navDeActive"}
            onClick={() => {
              set_navActive({
                home: false,
                trending: true,
                library: false,
                search: false,
              });
              props.get_trend_videos();
            }}
          >
            Trending
          </a>
          {/* <a
            className={navActive.library ? "navActive" : "navDeActive"}
            onClick={() => {
              set_navActive({
                home: false,
                trending: false,
                library: true,
                search: false,
              });
            }}
          >
            Library
          </a> */}
          <a
            // id="search_btn"
            ref={search_btn}
            className="search_icon flex flex-jc-sb flex-ai-c navDeActive"
            onClick={() => {
              set_navActive((prevState) => {
                return { ...prevState, search: true };
              });
            }}
          >
            {" "}
            <svg
              aria-hidden="true"
              focusable="false"
              data-prefix="fas"
              data-icon="search"
              className="svg-inline--fa fa-search fa-w-16"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <path
                fill="currentColor"
                d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"
              ></path>
            </svg>
            ㅤSearch
          </a>
        </div>
        {/* search bar */}
        <div
          id="search_bar"
          ref={search_bar}
          className={
            navActive.search
              ? "search_bar flex flex-ai-c"
              : "search_bar display-none"
          }
        >
          <div
            className="arrow_left"
            onClick={() => {
              set_navActive((prevState) => {
                return { ...prevState, search: false };
              });
            }}
          />
          <div>
            <form
              onSubmit={(e) => {
                props.sendData(search);
                e.preventDefault();
              }}
            >
              <input
                type="text"
                placeholder="Search"
                value={search}
                onChange={(e) => {
                  set_search(e.target.value);
                }}
              />
            </form>
          </div>
        </div>
        {/* kam baki hai abhi  */}
        <div className="profile "></div>
      </div>
    </>
  );
}

export default Navbar;
