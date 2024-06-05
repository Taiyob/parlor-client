import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div className="px-40">
      <nav className="flex justify-between items-center">
        <div>
          <Link to="/" className="flex items-center p-2">
            <svg
              width="128"
              height="48"
              className="text-violet-400"
              viewBox="0 0 128 48"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M51.478 23.4527L47.3903 19.6592C46.3598 18.7058 45.1577 17.9269 43.8382 17.3576C44.6342 15.7464 45.0472 13.995 45.0486 12.2225V6.96817C45.0486 6.54063 44.6751 6.194 44.2144 6.194H38.5526C36.6424 6.19506 34.7548 6.57789 33.0183 7.31655C32.4049 6.092 31.5655 4.97642 30.5382 4.02012L26.4505 0.226664C26.1247 -0.0755545 25.5967 -0.0755545 25.2709 0.226664L21.1832 4.02012C20.1559 4.97642 19.3165 6.092 18.7031 7.31655C16.9671 6.57818 15.0802 6.19525 13.1705 6.194H7.50865C7.04795 6.194 6.67443 6.54063 6.67443 6.96817V12.2225C6.67557 13.9952 7.0881 15.7468 7.88405 17.3584C6.56452 17.9277 5.36241 18.7066 4.33193 19.66L0.244245 23.4534C-0.0814149 23.7557 -0.0814149 24.2458 0.244245 24.5481L4.33193 28.3416C5.36241 29.295 6.56452 30.0739 7.88405 30.6432C7.08841 32.2542 6.67578 34.0053 6.67443 35.7775V41.0318C6.67443 41.4594 7.04795 41.806 7.50865 41.806H13.1705C15.0807 41.8049 16.9683 41.4221 18.7047 40.6834C19.3182 41.908 20.1575 43.0236 21.1849 43.9799L25.2726 47.7733C25.5983 48.0756 26.1264 48.0756 26.4522 47.7733L30.5399 43.9799C31.5672 43.0236 32.4065 41.908 33.02 40.6834C34.756 41.4219 36.6429 41.8047 38.5526 41.806H44.2144C44.6751 41.806 45.0486 41.4594 45.0486 41.0318V35.7775C45.0475 34.0048 44.635 32.2532 43.839 30.6416C45.1586 30.0723 46.3607 29.2934 47.3911 28.34L51.4788 24.5466C51.8038 24.2442 51.8033 23.7547 51.478 23.4527ZM33.6323 8.75961C35.1725 8.09072 36.8521 7.74351 38.5526 7.74234H43.3802V12.2225C43.3795 13.801 43.0055 15.3602 42.2849 16.7901C41.0734 16.4379 39.8113 16.2585 38.5417 16.2583H38.208C36.4544 16.2578 34.7203 16.6007 33.1193 17.2647C33.8347 15.7789 34.2043 14.1696 34.2038 12.5422V12.2326C34.204 11.0547 34.0113 9.88371 33.6323 8.75961ZM38.208 17.8066H38.5417C39.5271 17.8084 40.5077 17.9345 41.4565 18.1813C41.019 18.7945 40.5159 19.3651 39.9549 19.8845L39.778 20.0486C37.5922 22.0875 34.6184 23.2304 31.5192 23.2227L27.8753 23.2258L30.5382 20.7547C32.5679 18.8607 35.3297 17.7992 38.208 17.8066ZM32.5353 12.2326V12.5422C32.5431 15.213 31.3992 17.7758 29.3586 19.6592L26.6958 22.1311V18.7457C26.6875 15.8696 27.919 13.1099 30.1161 11.0814L30.2929 10.9172C30.8526 10.3966 31.4675 9.92977 32.1282 9.52372C32.3957 10.4054 32.5326 11.3167 32.5353 12.2326ZM22.3645 5.1148L25.8615 1.86946L29.3586 5.1148C30.2712 5.96465 31.0123 6.95946 31.5468 8.05202C30.6653 8.5532 29.8493 9.14728 29.115 9.82255L28.9381 9.98668C27.5753 11.2523 26.5256 12.7779 25.8615 14.4575C25.1976 12.7782 24.1481 11.2529 22.7858 9.98745L22.6089 9.82333C21.8744 9.14776 21.0581 8.55339 20.1763 8.05202C20.7107 6.95956 21.4518 5.96475 22.3645 5.1148ZM19.1878 12.2326C19.1897 11.3181 19.3256 10.4081 19.5915 9.52759C20.2522 9.93355 20.8672 10.4005 21.4268 10.9211L21.6037 11.0852C23.8007 13.1138 25.0322 15.8735 25.024 18.7496V22.135L22.3611 19.6639C20.3205 17.7788 19.1777 15.2142 19.1878 12.5422V12.2326ZM21.1841 20.7547L23.8477 23.2258H20.1997C17.1005 23.2335 14.1267 22.0906 11.9409 20.0517L11.764 19.8876C11.203 19.3682 10.7 18.7976 10.2624 18.1844C11.2125 17.9363 12.1945 17.8092 13.1814 17.8066H13.515C16.3931 17.7993 19.1546 18.8609 21.1841 20.7547ZM8.34287 7.74234H13.1705C14.8715 7.74302 16.5516 8.09005 18.0924 8.75884C17.7129 9.88313 17.5196 11.0544 17.5193 12.2326V12.5422C17.5188 14.1696 17.8884 15.7789 18.6038 17.2647C17.0027 16.6007 15.2687 16.2578 13.515 16.2583H13.1814C11.9122 16.2582 10.6503 16.4369 9.43904 16.7886C8.71827 15.3592 8.34412 13.8005 8.34287 12.2225V7.74234ZM5.51152 27.2453L2.01446 24L5.51152 20.7547C6.42729 19.9077 7.49926 19.22 8.67656 18.724C9.21661 19.542 9.85678 20.2993 10.5844 20.9807L10.7613 21.1448C12.125 22.4096 13.769 23.3838 15.5789 24C13.7693 24.6161 12.1258 25.5901 10.7621 26.8544L10.5853 27.0185C9.8573 27.7002 9.21682 28.4577 8.67656 29.276C7.49937 28.78 6.42739 28.0923 5.51152 27.2453ZM18.0908 39.2404C16.5506 39.9093 14.871 40.2565 13.1705 40.2577H8.34287V35.7775C8.3436 34.199 8.71754 32.6398 9.4382 31.2099C10.6497 31.5621 11.9118 31.7415 13.1814 31.7417H13.515C15.2687 31.7422 17.0027 31.3993 18.6038 30.7353C17.8884 32.2211 17.5188 33.8304 17.5193 35.4578V35.7674C17.5192 36.9453 17.7119 38.1163 18.0908 39.2404ZM13.515 30.1934H13.1814C12.1959 30.1915 11.2154 30.0655 10.2666 29.8187C10.704 29.2055 11.2072 28.6349 11.7682 28.1155L11.945 27.9514C14.1309 25.9125 17.1047 24.7696 20.2038 24.7773L23.8477 24.7742L21.1849 27.2453C19.1552 29.1393 16.3933 30.2008 13.515 30.1934ZM19.1878 35.7674V35.4578C19.1799 32.787 20.3239 30.2242 22.3645 28.3408L25.0273 25.8689V29.2543C25.0355 32.1304 23.804 34.8901 21.607 36.9186L21.4301 37.0828C20.8705 37.6034 20.2556 38.0703 19.5949 38.4763C19.3275 37.5947 19.1906 36.6834 19.1878 35.7674ZM29.3586 42.8852L25.8615 46.1305L22.3645 42.8852C21.4523 42.0364 20.7112 41.0431 20.1763 39.9519C21.058 39.4495 21.874 38.8541 22.6081 38.1774L22.7849 38.0133C24.1476 36.7477 25.1975 35.2221 25.8615 33.5425C26.5255 35.2218 27.5749 36.7471 28.9373 38.0126L29.1142 38.1767C29.8485 38.8533 30.6648 39.4487 31.5468 39.9511C31.012 41.0426 30.2709 42.0362 29.3586 42.8852ZM32.5353 35.7674C32.5332 36.6819 32.3975 37.5919 32.1315 38.4724C31.4708 38.0665 30.8559 37.5995 30.2963 37.0789L30.1194 36.9148C27.9224 34.8862 26.6909 32.1265 26.6991 29.2504V25.8689L29.3619 28.34C31.4015 30.2241 32.5443 32.7871 32.5353 35.4578V35.7674ZM30.539 27.2453L27.8753 24.7742H31.5234C34.6225 24.7665 37.5963 25.9094 39.7822 27.9483L39.9591 28.1124C40.5201 28.6318 41.0231 29.2024 41.4607 29.8156C40.5106 30.0637 39.5287 30.1909 38.5417 30.1934H38.208C35.3301 30.2007 32.5686 29.1391 30.539 27.2453ZM43.3802 40.2577H38.5526C36.8516 40.257 35.1715 39.91 33.6306 39.2412C34.0102 38.1169 34.2034 36.9456 34.2038 35.7674V35.4578C34.2043 33.8304 33.8347 32.2211 33.1193 30.7353C34.7203 31.3993 36.4544 31.7422 38.208 31.7417H38.5417C39.8109 31.7418 41.0727 31.5631 42.284 31.2114C43.0048 32.6408 43.3789 34.1995 43.3802 35.7775V40.2577ZM46.2115 27.2453C45.2969 28.0919 44.2265 28.7797 43.0507 29.276C42.5094 28.4578 41.8678 27.7005 41.1386 27.0193L40.9618 26.8552C39.598 25.5905 37.9541 24.6162 36.1442 24C37.9538 23.3839 39.5973 22.4099 40.961 21.1456L41.1378 20.9815C41.8669 20.3 42.5085 19.5425 43.0498 18.724C44.2257 19.2203 45.2962 19.9081 46.2107 20.7547L49.7086 24L46.2115 27.2453Z"
                fill="#F63E7B"
              />
              <path
                d="M59.5681 21.252V20.136H59.9461C60.2821 20.136 60.6181 20.034 60.9541 19.83C61.2901 19.626 61.5721 19.29 61.8001 18.822C62.0401 18.354 62.1601 17.73 62.1601 16.95V6.114C62.1601 5.73 62.0761 5.466 61.9081 5.322C61.7401 5.178 61.5601 5.106 61.3681 5.106H60.4861V4.08H67.0921V5.106H66.2281C66.0241 5.106 65.8381 5.184 65.6701 5.34C65.5021 5.484 65.4181 5.754 65.4181 6.15V16.932C65.4181 17.748 65.2741 18.432 64.9861 18.984C64.6981 19.536 64.3081 19.98 63.8161 20.316C63.3361 20.652 62.7961 20.892 62.1961 21.036C61.5961 21.18 60.9781 21.252 60.3421 21.252H59.5681Z"
                fill="black"
                fillOpacity="0.85"
              />
              <path
                d="M73.4661 17.112C71.8341 17.112 70.6161 16.68 69.8121 15.816C69.0081 14.94 68.6061 13.716 68.6061 12.144C68.6061 10.452 69.0081 9.18 69.8121 8.328C70.6281 7.464 71.7741 7.032 73.2501 7.032C74.6181 7.032 75.6921 7.398 76.4721 8.13C77.2641 8.862 77.6601 9.942 77.6601 11.37V12.342H71.7921C71.8161 13.494 72.0321 14.34 72.4401 14.88C72.8481 15.408 73.4301 15.672 74.1861 15.672C74.8101 15.672 75.3141 15.522 75.6981 15.222C76.0941 14.922 76.3941 14.55 76.5981 14.106C76.7901 14.178 76.9461 14.292 77.0661 14.448C77.1861 14.604 77.2461 14.79 77.2461 15.006C77.2461 15.354 77.1141 15.69 76.8501 16.014C76.5981 16.338 76.1901 16.602 75.6261 16.806C75.0741 17.01 74.3541 17.112 73.4661 17.112ZM74.5281 11.118C74.5281 10.218 74.4321 9.522 74.2401 9.03C74.0601 8.526 73.7541 8.274 73.3221 8.274C72.8781 8.274 72.5181 8.52 72.2421 9.012C71.9781 9.492 71.8401 10.194 71.8281 11.118H74.5281Z"
                fill="black"
                fillOpacity="0.85"
              />
              <path
                d="M79.027 16.932V15.906H79.099C79.495 15.906 79.813 15.834 80.053 15.69C80.293 15.534 80.413 15.174 80.413 14.61V9.534C80.413 9.006 80.311 8.67 80.107 8.526C79.903 8.382 79.603 8.31 79.207 8.31H79.153V7.284H83.095L83.455 8.832H83.545C83.821 8.208 84.163 7.758 84.571 7.482C84.979 7.194 85.543 7.05 86.263 7.05C86.959 7.05 87.469 7.206 87.793 7.518C88.117 7.818 88.279 8.208 88.279 8.688C88.279 9.312 88.051 9.774 87.595 10.074C87.139 10.362 86.533 10.506 85.777 10.506C85.777 10.014 85.723 9.636 85.615 9.372C85.507 9.108 85.285 8.976 84.949 8.976C84.601 8.976 84.325 9.132 84.121 9.444C83.929 9.756 83.791 10.134 83.707 10.578C83.623 11.022 83.581 11.43 83.581 11.802V14.7C83.581 15.228 83.689 15.564 83.905 15.708C84.121 15.84 84.403 15.906 84.751 15.906H85.363V16.932H79.027Z"
                fill="black"
                fillOpacity="0.85"
              />
              <path
                d="M92.094 5.736C91.602 5.736 91.188 5.622 90.852 5.394C90.528 5.166 90.366 4.824 90.366 4.368C90.366 3.9 90.528 3.558 90.852 3.342C91.188 3.114 91.602 3 92.094 3C92.562 3 92.97 3.114 93.318 3.342C93.678 3.558 93.858 3.9 93.858 4.368C93.858 4.824 93.678 5.166 93.318 5.394C92.97 5.622 92.562 5.736 92.094 5.736ZM89.196 16.932V15.906H89.412C89.724 15.906 90 15.822 90.24 15.654C90.492 15.486 90.618 15.15 90.618 14.646V9.462C90.618 9.006 90.492 8.7 90.24 8.544C89.988 8.388 89.712 8.31 89.412 8.31H89.124V7.284H93.768V14.682C93.768 15.174 93.888 15.504 94.128 15.672C94.38 15.828 94.662 15.906 94.974 15.906H95.172V16.932H89.196Z"
                fill="black"
                fillOpacity="0.85"
              />
              <path
                d="M96.2202 16.932V15.906H96.2742C96.6822 15.906 97.0002 15.834 97.2282 15.69C97.4682 15.546 97.5882 15.21 97.5882 14.682V9.462C97.5882 8.97 97.4802 8.658 97.2642 8.526C97.0602 8.382 96.7602 8.31 96.3642 8.31H96.3102V7.284H100.432L100.666 8.49H100.756C101.044 7.986 101.398 7.62 101.818 7.392C102.25 7.152 102.808 7.032 103.492 7.032C104.44 7.032 105.166 7.308 105.67 7.86C106.186 8.4 106.444 9.276 106.444 10.488V14.628C106.444 15.18 106.528 15.534 106.696 15.69C106.876 15.834 107.164 15.906 107.56 15.906H107.632V16.932H103.294V11.136C103.294 10.356 103.21 9.756 103.042 9.336C102.874 8.916 102.562 8.706 102.106 8.706C101.758 8.706 101.482 8.838 101.278 9.102C101.086 9.354 100.948 9.69 100.864 10.11C100.78 10.518 100.738 10.962 100.738 11.442V14.736C100.738 15.228 100.84 15.546 101.044 15.69C101.26 15.834 101.566 15.906 101.962 15.906H102.016V16.932H96.2202Z"
                fill="black"
                fillOpacity="0.85"
              />
              <path
                d="M109.95 9.318L109.032 4.08H112.2L111.282 9.318H109.95Z"
                fill="black"
                fillOpacity="0.85"
              />
              <path
                d="M118.164 17.112C117.216 17.112 116.466 17.016 115.914 16.824C115.362 16.632 114.966 16.38 114.726 16.068C114.486 15.744 114.366 15.384 114.366 14.988C114.366 14.616 114.456 14.334 114.636 14.142C114.816 13.938 115.044 13.794 115.32 13.71C115.596 13.626 115.878 13.584 116.166 13.584C116.166 14.376 116.352 14.964 116.724 15.348C117.096 15.732 117.582 15.924 118.182 15.924C118.782 15.924 119.208 15.816 119.46 15.6C119.724 15.372 119.856 15.114 119.856 14.826C119.856 14.454 119.688 14.16 119.352 13.944C119.016 13.716 118.452 13.476 117.66 13.224C116.628 12.9 115.842 12.504 115.302 12.036C114.774 11.568 114.51 10.902 114.51 10.038C114.51 9.018 114.882 8.268 115.626 7.788C116.37 7.296 117.354 7.05 118.578 7.05C119.37 7.05 120.006 7.134 120.486 7.302C120.966 7.47 121.314 7.686 121.53 7.95C121.758 8.214 121.872 8.484 121.872 8.76C121.872 9.18 121.722 9.498 121.422 9.714C121.122 9.93 120.636 10.038 119.964 10.038C119.964 9.45 119.808 8.994 119.496 8.67C119.196 8.346 118.794 8.184 118.29 8.184C117.918 8.184 117.594 8.268 117.318 8.436C117.054 8.604 116.922 8.85 116.922 9.174C116.922 9.414 116.988 9.624 117.12 9.804C117.252 9.972 117.48 10.134 117.804 10.29C118.14 10.446 118.614 10.62 119.226 10.812C119.814 11.004 120.336 11.226 120.792 11.478C121.248 11.73 121.602 12.048 121.854 12.432C122.106 12.816 122.232 13.296 122.232 13.872C122.232 14.856 121.884 15.642 121.188 16.23C120.492 16.818 119.484 17.112 118.164 17.112Z"
                fill="black"
                fillOpacity="0.85"
              />
              <path
                d="M60.6841 36.932V36.176H60.9181C61.3261 36.176 61.6741 36.104 61.9621 35.96C62.2501 35.804 62.3941 35.444 62.3941 34.88V26.06C62.3941 25.532 62.2441 25.196 61.9441 25.052C61.6561 24.908 61.3141 24.836 60.9181 24.836H60.6841V24.08H65.7421C67.2541 24.08 68.3701 24.416 69.0901 25.088C69.8101 25.748 70.1701 26.666 70.1701 27.842C70.1701 28.55 70.0141 29.216 69.7021 29.84C69.4021 30.464 68.8981 30.968 68.1901 31.352C67.4821 31.736 66.5341 31.928 65.3461 31.928H64.2121V34.97C64.2121 35.498 64.3561 35.834 64.6441 35.978C64.9441 36.11 65.2921 36.176 65.6881 36.176H66.2821V36.932H60.6841ZM65.1661 31.082C66.2581 31.082 67.0381 30.842 67.5061 30.362C67.9861 29.87 68.2261 29.054 68.2261 27.914C68.2261 26.906 68.0161 26.162 67.5961 25.682C67.1761 25.19 66.4561 24.944 65.4361 24.944H64.2121V31.082H65.1661Z"
                fill="black"
                fillOpacity="0.85"
              />
              <path
                d="M74.9494 37.112C74.1454 37.112 73.4794 36.878 72.9514 36.41C72.4234 35.942 72.1594 35.216 72.1594 34.232C72.1594 33.272 72.4954 32.564 73.1674 32.108C73.8514 31.652 74.8834 31.4 76.2634 31.352L77.7574 31.298V30.218C77.7574 29.786 77.7214 29.408 77.6494 29.084C77.5774 28.748 77.4214 28.484 77.1814 28.292C76.9414 28.1 76.5754 28.004 76.0834 28.004C75.6274 28.004 75.2794 28.088 75.0394 28.256C74.7994 28.424 74.6374 28.658 74.5534 28.958C74.4814 29.246 74.4454 29.582 74.4454 29.966C73.9414 29.966 73.5574 29.882 73.2934 29.714C73.0414 29.534 72.9154 29.24 72.9154 28.832C72.9154 28.412 73.0594 28.076 73.3474 27.824C73.6474 27.572 74.0434 27.392 74.5354 27.284C75.0274 27.164 75.5674 27.104 76.1554 27.104C77.2594 27.104 78.0814 27.338 78.6214 27.806C79.1734 28.274 79.4494 29.078 79.4494 30.218V34.88C79.4494 35.384 79.5334 35.726 79.7014 35.906C79.8694 36.086 80.1574 36.176 80.5654 36.176H80.6194V36.932H78.1894L77.9014 35.384H77.7574C77.5054 35.72 77.2594 36.02 77.0194 36.284C76.7794 36.536 76.4974 36.74 76.1734 36.896C75.8614 37.04 75.4534 37.112 74.9494 37.112ZM75.3634 35.996C76.0954 35.996 76.6774 35.774 77.1094 35.33C77.5414 34.874 77.7574 34.262 77.7574 33.494V32.036L76.6054 32.09C75.5854 32.138 74.8774 32.348 74.4814 32.72C74.0974 33.08 73.9054 33.614 73.9054 34.322C73.9054 35.438 74.3914 35.996 75.3634 35.996Z"
                fill="black"
                fillOpacity="0.85"
              />
              <path
                d="M82.392 36.932V36.176H82.446C82.854 36.176 83.202 36.104 83.49 35.96C83.778 35.804 83.922 35.444 83.922 34.88V29.264C83.922 28.736 83.772 28.4 83.472 28.256C83.184 28.112 82.842 28.04 82.446 28.04H82.392V27.284H85.164L85.506 29.066H85.596C85.752 28.706 85.92 28.376 86.1 28.076C86.28 27.776 86.52 27.542 86.82 27.374C87.12 27.194 87.534 27.104 88.062 27.104C88.722 27.104 89.208 27.218 89.52 27.446C89.844 27.674 90.006 27.998 90.006 28.418C90.006 28.79 89.874 29.096 89.61 29.336C89.358 29.576 88.932 29.696 88.332 29.696C88.332 29.204 88.26 28.85 88.116 28.634C87.972 28.406 87.726 28.292 87.378 28.292C87.042 28.292 86.76 28.424 86.532 28.688C86.304 28.952 86.124 29.288 85.992 29.696C85.86 30.104 85.764 30.53 85.704 30.974C85.644 31.406 85.614 31.796 85.614 32.144V34.97C85.614 35.498 85.758 35.834 86.046 35.978C86.346 36.11 86.694 36.176 87.09 36.176H87.594V36.932H82.392Z"
                fill="black"
                fillOpacity="0.85"
              />
              <path
                d="M90.9006 36.932V36.176H91.1346C91.5426 36.176 91.8906 36.104 92.1786 35.96C92.4666 35.804 92.6106 35.444 92.6106 34.88V25.232C92.6106 24.704 92.4606 24.368 92.1606 24.224C91.8726 24.08 91.5306 24.008 91.1346 24.008H90.9006V23.252H94.3026V34.88C94.3026 35.444 94.4466 35.804 94.7346 35.96C95.0226 36.104 95.3706 36.176 95.7786 36.176H96.0126V36.932H90.9006Z"
                fill="black"
                fillOpacity="0.85"
              />
              <path
                d="M101.801 37.112C100.505 37.112 99.4849 36.698 98.7409 35.87C97.9969 35.042 97.6249 33.782 97.6249 32.09C97.6249 30.41 97.9789 29.162 98.6869 28.346C99.4069 27.518 100.463 27.104 101.855 27.104C103.151 27.104 104.171 27.518 104.915 28.346C105.659 29.162 106.031 30.41 106.031 32.09C106.031 33.782 105.671 35.042 104.951 35.87C104.243 36.698 103.193 37.112 101.801 37.112ZM101.837 36.176C102.737 36.176 103.367 35.834 103.727 35.15C104.099 34.454 104.285 33.434 104.285 32.09C104.285 30.746 104.099 29.738 103.727 29.066C103.355 28.394 102.719 28.058 101.819 28.058C100.919 28.058 100.283 28.394 99.9109 29.066C99.5509 29.738 99.3709 30.746 99.3709 32.09C99.3709 33.434 99.5569 34.454 99.9289 35.15C100.301 35.834 100.937 36.176 101.837 36.176Z"
                fill="black"
                fillOpacity="0.85"
              />
              <path
                d="M112.334 37.112C111.386 37.112 110.654 36.836 110.138 36.284C109.622 35.72 109.364 34.82 109.364 33.584V29.264C109.364 28.736 109.214 28.4 108.914 28.256C108.626 28.112 108.284 28.04 107.888 28.04H107.834V27.284H111.056V33.494C111.056 34.274 111.188 34.88 111.452 35.312C111.716 35.744 112.214 35.96 112.946 35.96C113.738 35.96 114.314 35.696 114.674 35.168C115.034 34.628 115.214 33.92 115.214 33.044V29.336C115.214 28.772 115.07 28.418 114.782 28.274C114.494 28.118 114.146 28.04 113.738 28.04H113.684V27.284H116.906V34.97C116.906 35.498 117.05 35.834 117.338 35.978C117.638 36.11 117.986 36.176 118.382 36.176H118.436V36.932H115.574L115.34 35.474H115.25C114.878 36.146 114.446 36.59 113.954 36.806C113.462 37.01 112.922 37.112 112.334 37.112Z"
                fill="black"
                fillOpacity="0.85"
              />
              <path
                d="M119.835 36.932V36.176H119.889C120.297 36.176 120.645 36.104 120.933 35.96C121.221 35.804 121.365 35.444 121.365 34.88V29.264C121.365 28.736 121.215 28.4 120.915 28.256C120.627 28.112 120.285 28.04 119.889 28.04H119.835V27.284H122.607L122.949 29.066H123.039C123.195 28.706 123.363 28.376 123.543 28.076C123.723 27.776 123.963 27.542 124.263 27.374C124.563 27.194 124.977 27.104 125.505 27.104C126.165 27.104 126.651 27.218 126.963 27.446C127.287 27.674 127.449 27.998 127.449 28.418C127.449 28.79 127.317 29.096 127.053 29.336C126.801 29.576 126.375 29.696 125.775 29.696C125.775 29.204 125.703 28.85 125.559 28.634C125.415 28.406 125.169 28.292 124.821 28.292C124.485 28.292 124.203 28.424 123.975 28.688C123.747 28.952 123.567 29.288 123.435 29.696C123.303 30.104 123.207 30.53 123.147 30.974C123.087 31.406 123.057 31.796 123.057 32.144V34.97C123.057 35.498 123.201 35.834 123.489 35.978C123.789 36.11 124.137 36.176 124.533 36.176H125.037V36.932H119.835Z"
                fill="black"
                fillOpacity="0.85"
              />
            </svg>
          </Link>
        </div>
        <div>
          <ul className="items-stretch font-semibold hidden space-x-3 md:flex">
            <li className="flex">
              <Link className="flex items-center px-4 -mb-1 text-[#474747] text-xl">
                Home
              </Link>
            </li>
            <li className="flex">
              <Link className="flex items-center px-4 -mb-1 text-[#474747] text-xl">
                About us
              </Link>
            </li>
            <li className="flex">
              <Link className="flex items-center px-4 -mb-1 text-[#474747] text-xl">
                Projects
              </Link>
            </li>
            <li className="flex">
              <Link className="flex items-center px-4 -mb-1 text-[#474747] text-xl">
                Contact
              </Link>
            </li>
            <li className="flex">
              <Link className="flex items-center px-4 -mb-1 text-[#474747] text-xl">
                Admin
              </Link>
            </li>
          </ul>
        </div>
        <button className="flex justify-end p-4">
          <Link className="bg-[#F63E7B] flex items-center px-14 py-4 -mb-1 text-white text-xl rounded-lg">
            Login
          </Link>
        </button>
      </nav>
    </div>
  );
};

export default Register;
