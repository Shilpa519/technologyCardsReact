import './index.css'

const CardItem = props => {
  const {cardItems} = props
  const {title, description, className, imgUrl} = cardItems
  return (
    <div className="main-container">
      <li className={className}>
        <h1 className="name">{title}</h1>
        <p className="description">{description}</p>
        <img src={imgUrl} className="image" alt={title} />
      </li>
    </div>
  )
}

export default CardItem
