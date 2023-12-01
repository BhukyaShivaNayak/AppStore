import './index.css'

const TabItem = props => {
  const {resource1, updateActiveTabId, isActive} = props
  const {tabId, displayText} = resource1

  const changingStyle = isActive ? 'button1' : ''

  const onClickTab = () => {
    updateActiveTabId(tabId)
  }

  return (
    <li className="tab-item">
      <button
        type="button"
        onClick={onClickTab}
        className={`button ${changingStyle}`}
      >
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
