import './index.css'
import {Component} from 'react'
import Filters from '../Filters'
import InterviewQuestion from '../InterviewQuestion'

class InterviewQuestionsApp extends Component {
  state = {showAnswerText: null, level: '', language: ''}

  onToggleShowHide = id => {
    const {showAnswerText} = this.state
    if (id !== showAnswerText) {
      this.setState({showAnswerText: id})
    } else {
      this.setState({showAnswerText: null})
    }
  }

  onSelectFilterLanguageQuestions = value => {
    this.setState({language: value})
  }

  onSelectFilterDifficultyLevelQuestions = value => {
    this.setState({level: value})
  }

  getFilteredQuestions = () => {
    const {questionsData} = this.props
    const filterQuestions = questionsData.filter(question => {
      const {language, level} = this.state

      return (
        question.language.includes(language) &&
        question.difficultyLevel.includes(level)
      )
    })

    return filterQuestions
  }

  render() {
    const {showAnswerText} = this.state
    const {filtersCategoryData, filtersLevelsData} = this.props
    const filteredQuestionOnSelect = this.getFilteredQuestions()

    return (
      <div className="interview-question-app-container">
        <Filters
          categoryData={filtersCategoryData}
          levelsData={filtersLevelsData}
          languageFilter={this.onSelectFilterLanguageQuestions}
          levelFilter={this.onSelectFilterDifficultyLevelQuestions}
        />
        <div className="questions-container">
          {filteredQuestionOnSelect.map(question => (
            <InterviewQuestion
              question={question}
              key={question.id}
              showHideButton={this.onToggleShowHide}
              showAnswer={showAnswerText === question.id}
            />
          ))}
        </div>
      </div>
    )
  }
}

export default InterviewQuestionsApp
