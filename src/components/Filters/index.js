import './index.css'

const Filters = props => {
  const {categoryData, levelsData} = props

  const onSelectOption = event => {
    console.log(event.target.value)
  }

  return (
    <div className="filters-container">
      <div className="category-filter-container">
        <p className="language-text">Language</p>
        <select onChange={onSelectOption}>
          {categoryData.map(category => (
            <option key={category.id} value={category.language}>
              {category.language}
            </option>
          ))}
        </select>
      </div>
      <div className="level-filter-container">
        <p className="difficulty-text">Difficulty</p>
        <select onChange={onSelectOption}>
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
