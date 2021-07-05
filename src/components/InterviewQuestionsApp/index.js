import './index.css'
import Filters from '../Filters'
import InterviewQuestion from '../InterviewQuestion'

const InterviewQuestionsApp = props => {
  const {filtersCategoryData, filtersLevelsData, questionsData} = props

  return (
    <div className="interview-question-app-container">
      <Filters
        categoryData={filtersCategoryData}
        levelsData={filtersLevelsData}
      />
      <div className="questions-container">
        {questionsData.map(question => (
          <InterviewQuestion question={question} key={question.id} />
        ))}
      </div>
    </div>
  )
}

export default InterviewQuestionsApp
