// Write your code here

import './index.css'

const AppItem = props => {
  const {resources} = props
  const {imageUrl, appName} = resources

  return (
    <li className="app-item">
      <img src={imageUrl} className="image" alt={appName} />
      <p className="app-name">{appName}</p>
    </li>
  )
}

export default AppItem
