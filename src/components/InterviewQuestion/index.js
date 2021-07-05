import './index.css'

const downArrow = {
  src: 'https://assets.ccbp.in/frontend/react-js/down-arrow.png',
  alt: 'down arrow',
}
const upArrow = {
  src: 'https://assets.ccbp.in/frontend/react-js/up-arrow.png',
  alt: 'up arrow',
}

const InterviewQuestion = props => {
  const {question} = props

  const toggleShowHide = () => {}

  return (
    <div className="question-container">
      <div className="filter-tags-container">
        <p
          className="tag-text"
          style={{color: `#9333ea `, backgroundColor: `#9333ea16`}}
        >
          {question.difficultyLevel}
        </p>
        <p
          className="tag-text"
          style={{color: `#16a34a `, backgroundColor: `#16a34a16`}}
        >
          {question.language}
        </p>
      </div>
      <h1 className="question-text">{question.questionText}</h1>
      <button type="button" onClick={toggleShowHide}>
        Show
        <img src={downArrow.src} className="arrow-img" alt={downArrow.alt} />
      </button>
    </div>
  )
}

export default InterviewQuestion
