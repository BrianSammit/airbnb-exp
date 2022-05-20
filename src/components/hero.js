import collage from '../assests/img/Group-airbnb.png'
import './hero.css'

export default function Hero () {
 return (
    <div className="hero">
      <img src={collage} alt="collage" />
      <div className='hero--experiences_text'>
        <h1>Online Experiences</h1>
        <p>Join unique interactive activities led by one of a kind hosts all without leaving home</p>
      </div>
    </div>
 )
}
