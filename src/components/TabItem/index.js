import './index.css'

const TabItem = props => {
  const {tabList, onClickTabItem, isActive} = props
  const {displayText, tabId} = tabList
  const onClickTabButton = () => {
    onClickTabItem(tabId)
  }
  const styleOnClickTabButton = isActive ? 'styleButton' : ''

  return (
    <li>
      <button
        className={`tabButton ${styleOnClickTabButton}`}
        type="button"
        onClick={onClickTabButton}
      >
        {displayText}
      </button>
    </li>
  )
}
export default TabItem
