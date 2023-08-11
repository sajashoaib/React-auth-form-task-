import React from 'react'
import './style.css'
import { Route, Routes } from 'react-router-dom'
import UsersPage from '../../../pages/UsersPage'
import Card from '../Card'
import CardData from '../CardData'
import Card2 from '../Card 2'
import CardData2 from '../CardData2'
const PageContent = () => {
    return (
        <div id='pageContent' >
            <h3>   NEW GAMES </h3>
            <Card details={CardData} />
            <div className="foot">

                <div className="footcontent">
                    <div className='footcontent1'>
                        <h3>last played</h3>
                        <Card2 details={CardData2} />
                    </div>
                    <div className='footcontent3'>
                        <h3>most recent trophy</h3>
                        <div className="fooimage">
                            <div className="ringlight">
                                <img src='/assets/Ellipse 1.png' alt="sxas" class="imagefo" />
                                <img src='/assets/e2.png' alt="sxas" class="imagefo" />
                            </div>


                        </div>
                        <p>assassin's creed odyssey <br />last played: 34 hours ago</p>
                    </div>

                    <div className='footcontent2'>
                        <h3>friends</h3>
                        <img src='/assets/FRIENDSS.png' alt="sxas" className='imgfoot' />

                    </div>



                </div>


            </div>


        </div>

    )
}

export default PageContent
