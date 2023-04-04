import './index.css'

const HistoryItem = props => {
  const {eachItem, onDeleteItem} = props
  const {timeAccessed, logoUrl, title, domainUrl, id} = eachItem

  const onClickDeleteButton = () => {
    onDeleteItem(id)
  }
  return (
    <li className="list-item-container">
      <div className="time-container">
        <p className="time">{timeAccessed}</p>
        <div className="logo-container">
          <img src={logoUrl} alt="domain logo" className="logo-img" />
          <div className="data">
            <p className="title">{title}</p>
            <p className="domain">{domainUrl}</p>
          </div>
        </div>
      </div>
      <button
        type="button"
        className="delete-button"
        onClick={onClickDeleteButton}
        data-testid="delete"
      >
        <img
          src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
          alt="delete"
          className="delete-img"
        />
      </button>
    </li>
  )
}

export default HistoryItem
