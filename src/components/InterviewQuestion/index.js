import './index.css'

const downArrow = {
  src: 'https://assets.ccbp.in/frontend/react-js/down-arrow.png',
  alt: 'down arrow',
}
const upArrow = {
  src: 'https://assets.ccbp.in/frontend/react-js/up-arrow.png',
  alt: 'up arrow',
}

const filterTagColors = [
  '#16a34a',
  '#d97706',
  '#dc2626',
  '#0284c7',
  '#9333ea',
  '#db2777',
]

const filterBgColors = [
  '#16a34a16',
  '#d9770616',
  '#dc262616',
  '#0284c716',
  '#9333ea16',
  '#db277716',
]

const InterviewQuestion = props => {
  const {question, showHideButton, showAnswer} = props

  const {id, questionText, answerText, language, difficultyLevel} = question

  const toggleShowHide = () => {
    showHideButton(id)
  }

  const randomColor = Math.ceil(Math.random() * 5)

  return (
    <div className="question-container">
      <div className="filter-tags-container">
        <p
          className="tag-text"
          style={{
            color: `${filterTagColors[randomColor]}`,
            backgroundColor: `${filterBgColors[randomColor]}`,
          }}
        >
          {difficultyLevel}
        </p>
        <p
          className="tag-text"
          style={{
            color: `${filterTagColors[randomColor - 1]}`,
            backgroundColor: `${filterBgColors[randomColor - 1]}`,
          }}
        >
          {language}
        </p>
      </div>
      <h1 className="question-text">{questionText}</h1>
      <button type="button" onClick={toggleShowHide}>
        <p className="button-text">{showAnswer ? 'Hide' : 'Show'}</p>
        <img
          src={showAnswer ? upArrow.src : downArrow.src}
          className="arrow-img"
          alt={showAnswer ? upArrow.alt : downArrow.alt}
        />
      </button>
      <p className="answer-text">{showAnswer ? answerText : ''}</p>
    </div>
  )
}

export default InterviewQuestion
