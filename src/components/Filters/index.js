import './index.css'

const Filters = props => {
  const {categoryData, levelsData, languageFilter, levelFilter} = props

  const onSelectLanguagesOption = event => {
    languageFilter(event.target.value)
  }

  const onSelectLevelsOption = event => {
    levelFilter(event.target.value)
  }

  return (
    <div className="filters-container">
      <div className="filter-container">
        <p className="filter-text ">LANGUAGE</p>
        <select onChange={onSelectLanguagesOption}>
          {categoryData.map(category => (
            <option key={category.id} value={category.language}>
              {category.language}
            </option>
          ))}
        </select>
      </div>
      <div className="filter-container">
        <p className="filter-text ">DIFFICULTY</p>
        <select onChange={onSelectLevelsOption}>
          {levelsData.map(level => (
            <option key={level.id} value={level.level}>
              {level.level}
            </option>
          ))}
        </select>
      </div>
    </div>
  )
}

export default Filters
