import './index.css'

const AppItem = props => {
  const {eachAppList} = props
  const {appName, imageUrl} = eachAppList
  return (
    <li className="app-container">
      <div className="image-logo-container">
        <img className="app-icon" alt={appName} src={imageUrl} />
      </div>

      <div className="app-name-container">
        <p className="app-text">{appName}</p>
      </div>
    </li>
  )
}

export default AppItem
