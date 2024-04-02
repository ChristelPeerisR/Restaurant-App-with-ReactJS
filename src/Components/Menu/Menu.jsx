import React from 'react'
import './Menu.css'
import menu1 from '../../assets/menu1.jpg'
import menu2 from '../../assets/menu2.jpg'
import menu3 from '../../assets/menu3.jpg'

const Menu = () => {
  return (
    <div id="menu" className='mainmenu'>
        <h1>SATISFY YOUR CRAVINGS</h1>
        <div className='menus'>
            <div className='menu'>
                <img src={menu1} alt=""/>
                <h4>CHEESY CHICKEN CRISPANADA</h4>
                <p>We packed the Cheesy Chicken Crispanada <br/> to the brim with pure deliciousness.</p>
                <button className='menubtn'>Order Now</button>
            </div>
            <div className='menu'>
                <img src={menu2} alt=""/>
                <h4>CRAVE THIS MENU FOR LESS</h4>
                <p>Fill up on items for $3 or less each when you <br/> order off the new Cravings Value 
                Menu.</p>
                <button className='menubtn'>Explore Menu</button>
            </div>
            <div className='menu'>
                <img src={menu3} alt=""/>
                <h4>BUILD YOUR OWN CRAVINGS BOX</h4>
                <p>Fill veggie crowd-pleasers with choice of a <br/> specialty, classic, side, and medium 
                drink.</p>
                <button className='menubtn'>Build Yours</button>
            </div>
        </div>
    </div>
  )
}

export default Menu