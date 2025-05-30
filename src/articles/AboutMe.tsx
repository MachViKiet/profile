import expressJs_image from '../assets/nodejs-removebg-preview.png'
import laravel_image from '../assets/laravel-removebg-preview.png'
import mysql_image from '../assets/mysql-removebg-preview.png'
import react_image from '../assets/react-removebg-preview.png'
import mongo_image from '../assets/mongo-removebg-preview.png'
import filament_image from '../assets/filament-removebg-preview.png'

function AboutMe() {
  return (
    <>
      <p className='text'>
        I am currently a final-year student at University of Science, majoring in Information Technology.
      </p><p className='text'>
        I have nearly one year of experience in web development and have participated in real-world projects using JavaScript (Nodejs) and PHP (Laravel).
        Possessing strong exploration and self-learning skills, I also have a research background in Artificial Intelligence, particularly in Retrieval-Augmented Generation (RAG)
      </p><p className='text'>
        In the future, I aim to grow into a system design or solution architect responsible for designing and implementing solutions to business problems.
      </p>

      <div style = {{ display: 'flex', alignItems: 'center', gap: '15px', margin: '20px 0', marginBottom: '30px', paddingLeft: '5px' }}>
        <i className="fa-solid fa-briefcase fa-2xl"></i>
        <h2>Technical Skills - Freelance-Style Practice</h2>
      </div>

      <div style = {{ display: 'flex', alignItems: 'center', gap: '25px', flexWrap: 'wrap'}}>
        <div className="work-block">
          <i className="fa-solid fa-wand-magic-sparkles"></i>
          <div className="work-info">
            <h3 className="title">Web design</h3>
            <p className="details">Creates visually user-friendly layouts, enhance user experience</p>
          </div>
        </div>
        <div className="work-block">
          <i className="fa-solid fa-display"></i>
          <div className="work-info">
            <h3 className="title">Web Development</h3>
            <p className="details">Developing websites with a focus on quality and usability learning.</p>
          </div>
        </div>
        <div className="work-block">
          <i className="fa-solid fa-database"></i>
          <div className="work-info">
            <h3 className="title">Backend & Security Setup</h3>
            <p className="details">Managed databases, focusing on data integrit, query optimization.</p>
          </div>
        </div>
        <div className="work-block">
          <i className="fa-solid fa-server"></i>
          <div className="work-info">
            <h3 className="title">Architecture system</h3>
            <p className="details">Deployed a system using Docker through self-directed learning.</p>
          </div>
        </div>
      </div>

      <div style = {{ display: 'flex', alignItems: 'center', gap: '15px', 
        flexWrap: 'nowrap', marginTop: '30px', overflow: 'auto', background: '#ffffff40',
        padding: '5px 0px', borderRadius: '12px'}}>
        {[expressJs_image, react_image, laravel_image, filament_image, mysql_image, mongo_image].map((url) => (
          <img style={{ height: '80px', width: 'auto', borderRadius: '10px'}} src={url} alt="" srcSet="" key={url} />
        ))}
      </div>
  </>
  )
}

export default AboutMe