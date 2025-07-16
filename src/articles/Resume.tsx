function Resume() {
  return (
    <>
    <section className="timeline">
    <ol>

      <li >

        <h4 className="h4 timeline-item-title">University Of Science, HCM</h4>

        <p className="timeline-year">2021 — 2025</p>

        <p className="timeline-text">
          GPA: 8.2 - Bachelor of Infomation of Technology. Expected to graduate in November 2025
        </p>
      </li>

    </ol>

    </section>

    <section className="timeline">

    <div className="title-wrapper">
      <div className="icon-box">
        <i className="fa-solid fa-book" style={{ fontSize: '20px' }}></i>
      </div>
      <h3 className="h3" style={{ fontSize: '28px', color: 'hwb(45 70% 0%)' }}>Experiences</h3>
    </div>

    <ol className="timeline-list">

      <li className="timeline-item">

        <h4 className="h4 timeline-item-title">UniBot - The Case of an Automated Document Retrieval Chatbot</h4>

        <p className="timeline-year">Dec, 2024 — now</p>

        <p className="timeline-text">
        A domain-specific chatbot that integrates information retrieval (IR) 
        techniques with large language models (LLMs) to facilitate automated internal document 
        retrieval in a university setting.
        <br/>
        I detail the theoretical
        background on chatbots, LLMs, and RAG, and outline the design of UniBot’s
        architecture and components – including a document indexing module, a vector
        database for semantic search, and a conversational interface.
        <br/>
        Source: <a style={{ color: 'hwb(45 70% 0%)' }} href="https://github.com/Khoa-Nguyen-Kevin/Thesis-UniBot-HCMUS">https://github.com/Khoa-Nguyen-Kevin/Thesis-UniBot-HCMUS</a>
        <br/>
        Demo: <a style={{ color: 'hwb(45 70% 0%)' }} href="https://youtu.be/Rw_mRmgnjTU">https://youtu.be/Rw_mRmgnjTU</a>
        
        </p>

      </li>

      <li className="timeline-item">

        <h4 className="h4 timeline-item-title">Intern Of Research and Development Department–  at CloudGo</h4>

        <p className="timeline-year">June, 2024 — Dec, 2024</p>

        <p className="timeline-text">
          Built a web application integrating a chatbot to answer internal policy questions for company staff. <br/>
          Developed using PHP Laravel and Filament admin panel for rapid backend interface generation. <br/>
          Implemented real-time chatbot interface for user interaction with internal knowledge base. <br/>
          Improved usability through structured admin UI for managing chatbot content and responses. <br/>
        </p>

      </li>

      <li className="timeline-item">

        {/* Driving Test Support Website (HBO) */}
        <h4 className="h4 timeline-item-title">Front-end developer - at Hiep Phat Center</h4>
        <p className="timeline-year">Jan, 2024 — May, 2024</p>

        <p className="timeline-text">
          Developed a web platform to assist users in preparing for driving license tests. <br/>
          Built practice modules for traffic signs, theory questions, and simulated mock exams. <br/>
          Implemented user progress tracking and result statistics for personalized learning. <br/>
          Used React to ensure responsive and interactive user experience. <br/>
          Product: <a style={{ color: 'hwb(45 70% 0%)' }} href="https://hpo.edu.vn/">https://hpo.edu.vn/</a>
        </p>

      </li>

    </ol>

    </section>
    </>
  )
}

export default Resume
