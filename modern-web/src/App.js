import './App.css';
import backgroundImage from './bg.png';

function App() {
  return (
    <>
      <div className="container">
        <nav>
          <div className="logo_container">
            <svg width="133" height="40" viewBox="0 0 133 40" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M53 29.3821H70.0274V24.5057H58.1598V5.00012H53V29.3821Z" fill="black" />
              <path d="M71.2421 20.5001C71.2421 25.7248 75.3356 29.9046 80.8738 29.9046C86.3432 29.9046 90.5054 25.7248 90.5054 20.5001C90.5054 15.2754 86.3432 11.0956 80.8738 11.0956C75.3356 11.0956 71.2421 15.2754 71.2421 20.5001ZM76.2299 20.5001C76.2299 17.3653 78.2939 15.2754 80.8738 15.2754C83.4537 15.2754 85.5176 17.3653 85.5176 20.5001C85.5176 23.635 83.4537 25.7248 80.8738 25.7248C78.2939 25.7248 76.2299 23.635 76.2299 20.5001Z" fill="black" />
              <path d="M92.4094 20.326C92.4094 25.8642 96.0213 29.5563 100.493 29.5563C102.419 29.5563 103.727 28.8597 104.655 28.163C105.171 27.7451 105.619 27.2574 105.997 26.735H106.169V31.8203H94.9893V36.0001H110.985V11.6181H106.169V13.917H105.997C105.619 13.3945 105.171 12.9417 104.655 12.5237C103.727 11.8271 102.419 11.0956 100.493 11.0956C96.0213 11.0956 92.4094 14.7878 92.4094 20.326ZM97.3973 20.326C97.3973 17.1563 99.2548 15.2754 101.869 15.2754C104.311 15.2754 106.169 17.1563 106.169 20.326C106.169 23.4956 104.311 25.3765 101.869 25.3765C99.2548 25.3765 97.3973 23.4956 97.3973 20.326Z" fill="black" />
              <path d="M113.737 20.5001C113.737 25.7248 117.83 29.9046 123.368 29.9046C128.838 29.9046 133 25.7248 133 20.5001C133 15.2754 128.838 11.0956 123.368 11.0956C117.83 11.0956 113.737 15.2754 113.737 20.5001ZM118.725 20.5001C118.725 17.3653 120.788 15.2754 123.368 15.2754C125.948 15.2754 128.012 17.3653 128.012 20.5001C128.012 23.635 125.948 25.7248 123.368 25.7248C120.788 25.7248 118.725 23.635 118.725 20.5001Z" fill="black" />
            </svg>
          </div>
          <div className="menu_container">
            <ul>
              <li>
                <a
                  href="www.ziontutorial.com"
                  className="active"
                >Home
                </a>
              </li>
              <li>
                <a
                  href="www.ziontutorial.com"
                >Why Us
                </a>
              </li>
              <li>
                <a
                  href="www.ziontutorial.com"
                >Review
                </a>
              </li>
              <li>
                <a
                  href="www.ziontutorial.com"
                >Blog
                </a>
              </li>
            </ul>
          </div>
          <div className="btn_container">
          <ul>
            <li>
              <a href="www.ziontutorial.com"> Sign In</a>
            </li>
          </ul>
          <button className="btn_register">
            Register
          </button>
        </div>
      </nav>
 
      {/* hero section */}
      <div className="content">
        <div class="hero-text">
          {/* <p className="content_para">Trusted by over 2800+ companies</p> */}
          <h1>Delievr  <span className="content_span">Your Food </span></h1>
          <h1>Easy And Fast.</h1>
          <p className="content_alice">Vivamus vitae odio quam. Etiam non nibh luctus ligula tristique tristique.</p>
          <form>
            <input type="text" placeholder="Enter delivery address" />
            <button type="submit" className="btn_sec">
            Search
            </button>
          </form>
        </div>
        <div className="hero-image">
          <img className="image" src={backgroundImage} alt="Background" />
        </div>
      </div>
      <p></p>
    </div>
    </>
  );
}

export default App;
