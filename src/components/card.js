import { FaStar } from 'react-icons/fa';
import './card.css'

export default function Card (props) {
  console.log(props)

  let badgeText

  if (props.data.openSpots === 0) {
    badgeText = "SOLD OUT"
  } else if (props.data.location === "Online") {
    badgeText = "ONLINE"    
  }

 return (
    <div className="card">
      {badgeText && <div className='card--badge'>{badgeText}</div>}
      <img src={`./img/${props.data.coverImg}`} alt="card" />
      <h3><span className="card--star"><FaStar /></span> {props.data.stats.rating} <span className="card--score">({props.data.stats.reviewCount}) • {props.data.location}</span></h3>
      <p>{props.data.title}</p>
      <p><span className="price">From ${props.data.price} </span> /person</p>
    </div>
 ) 
}
