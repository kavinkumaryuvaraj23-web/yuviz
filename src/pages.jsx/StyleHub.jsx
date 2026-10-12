
import { Link, Outlet, useLocation } from 'react-router-dom'

import './StyleHub.css'

import heroImg from '../images/stylehub/style-hub-bgd.webp'
import sizeImg from '../images/stylehub/stylehub-size-guide.webp'
import wardrobeImg from '../images/stylehub/stylehub-wardrobe.webp'
import mensStyleImg from '../images/stylehub/stylehub-mens-style.webp'
import careImg from '../images/stylehub/stylehub-clothing-care.webp'

export default function StyleHub() {

  const location = useLocation();

  const isMainPage = location.pathname === "/stylehub";

  return (
    <div className="stylehub-page">

      {isMainPage ? (
      <>

      <div className="stylehub-hero" style={{ backgroundImage: `url(${heroImg})` }}>
        <div className="stylehub-hero-content">

          <p className="stylehub-label">STYLE HUB</p>

          <h1>
            DRESS BETTER <br />
            LIVE <span>CONFIDENT</span>
          </h1>

          <p className="stylehub-description">
            Your complete guide to better style, perfect fits
            and long-lasting clothing.
          </p>

          <div className="stylehub-benefits">
            <div>Better Fit</div>
            <div>Smart Style</div>
            <div>Lasting Quality</div>
            <div>Everyday Confidence</div>
          </div>

        </div>
      </div>

      <div className="stylehub-container">

        <div
          className="stylehub-card"
          style={{ backgroundImage: `url(${sizeImg})` }}
        >
          <div className="stylehub-card-content">
            <p className="stylehub-number">01 </p>
            <h2>SIZE GUIDE & <br /> FIT FINDER</h2>
            <p>Find your perfect fit with detailed size charts and measurement guides.</p>
            <Link to="/stylehub/size-guide" className="stylehub-btn">
              EXPLORE →
            </Link>
          </div>
        </div>

        <div
          className="stylehub-card"
          style={{ backgroundImage: `url(${wardrobeImg})` }}
        >
          <div className="stylehub-card-content">
            <p className="stylehub-number">02 </p>
            <h2>WARDROBE <br /> ESSENTIALS</h2>
            <p>Discover must-have pieces every man should have in his wardrobe.</p>
            <Link to="/stylehub/wardrobe" className="stylehub-btn">
              EXPLORE →
            </Link>
          </div>
        </div>

        <div
          className="stylehub-card"
          style={{ backgroundImage: `url(${mensStyleImg})` }}
        >
          <div className="stylehub-card-content">
            <p className="stylehub-number">03 </p>
            <h2>MEN'S <br /> STYLE GUIDE</h2>
            <p>Get outfit ideas for college, office, casual outings and special occasions.</p>
            <Link to="/stylehub/mens-style" className="stylehub-btn">
              EXPLORE →
            </Link>
          </div>
        </div>

        <div
          className="stylehub-card"
          style={{ backgroundImage: `url(${careImg})` }}
        >
          <div className="stylehub-card-content">
            <p className="stylehub-number">04 </p>
            <h2>FABRIC & <br /> CLOTHING CARE</h2>
            <p>Learn how to maintain your clothes and keep them looking new for longer.</p>
            <Link to="/stylehub/clothing-care" className="stylehub-btn">
              EXPLORE →
            </Link>
          </div>
        </div>

      </div>

      </>
    ) : (
      <Outlet />
    )}

    </div>
  )
}
