// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import { useState } from 'react'
import './App.scss'
import UserAvater from './assets/487494505_950733553897958_2789682958683107823_n.jpg'
import AboutMe from './articles/AboutMe'
import Resume from './articles/Resume'
import Project from './articles/Project'

function App() {
  const [navigate, setNavigate] = useState(0)
  const list_navigators = [{
    title: "About",
    article: 'About Me',
    contents: <AboutMe />,
    link: '/'
  }, {
    title: "Resume",
    contents: <Resume/>,
    link: '/'
  }, {
    title: "Project",
    article: 'My Project',
    contents: <Project/>,
    link: '/'
  }, {
    title: "More ...",
    article: ' ',
    link: '/'
  }]
  return (
    <div id='app-background'>
      <div className='bg-overlay'>
        <main id='app-container'>
          <div id="sidebar" className='app-block'>
            <div className='user-info'>
              <div className='avatar-block'>
                <img src={UserAvater} alt="" />
              </div>
              <div className='profile'>
                <h2 className='profile-name'>Mạch Vĩ Kiệt</h2>
                <p className='profile-more'>#unknown</p>
              </div>
            </div>
            <div className='block-devide'></div>
            <div className='user-info-detail'>
              <ul>
                <li className='contact'>
                  <div className="contact-icon">
                    <i className="fa-regular fa-envelope"></i>
                  </div>
                  <div className="contact-info">
                    <p className="contact-title">EMAIL</p>
                    <a href="machkiet252003@gmail.com" className="contact-link ellipsis">machkiet252003@gmail.com</a>
                  </div>
                </li>
                <li className='contact'>
                  <div className="contact-icon">
                    <i className="fa-solid fa-phone"></i>
                  </div>
                  <div className="contact-info">
                    <p className="contact-title">PHONE</p>
                    <a href="0796819550" className="contact-link ellipsis">0796819550</a>
                  </div>
                </li>
                <li className='contact'>
                  <div className="contact-icon">
                    <i className="fa-solid fa-cake-candles"></i>
                  </div>
                  <div className="contact-info">
                    <p className="contact-title">BIRTH</p>
                    <a href="July 25, 2003" className="contact-link ellipsis">July 25, 2003</a>
                  </div>
                </li>
                <li className='contact'>
                  <div className="contact-icon">
                    <i className="fa-regular fa-address-book"></i>
                  </div>
                  <div className="contact-info">
                    <p className="contact-title">ADĐRESS</p>
                    <a href="Binh Tan district, Ho Chi Minh city" className="contact-link ellipsis">Binh Tan district, Ho Chi Minh</a>
                  </div>
                </li>
              </ul>
            </div>
          </div>


          <div id="content" className='app-block'>
            <div className="navigator">
              <ul className="navigate-container">
                {
                  list_navigators.map((navigator, index) =>
                    <li>
                      <button
                        onClick={() => setNavigate(index)}
                        className={`navigate-button ${navigate === index && 'active'}`}>{navigator?.title || 'unknown'}
                      </button>
                    </li>
                  )}
              </ul>
            </div>

            <h2 className="article-title">
              {list_navigators[navigate]?.article || list_navigators[navigate]?.title || 'unknown'}
            </h2>

            <div className="article">
              {list_navigators[navigate]?.contents}
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}

export default App
