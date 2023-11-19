import './HomePage.css'
import React, { useRef } from "react"
import Button, { ButtonType } from '../../components/Button/Button'


const Logo = () => {
    return <b className='Logo'>workflow</b>
}


const Header = () => {
    return <header className='HomePage-Header'>
        <div className='HomePage-Header-Menu'>
            <Logo />
            <div className='HomePage-Header-Menu-CTA'>
                <Button 
                    text='Sign in'
                    onClick={() => null}
                    type={ButtonType.Secondary}
                />
                <Button 
                    text='Start now'
                    onClick={() => null}
                    type={ButtonType.Primary}
                />
            </div>
        </div>
        
    </header>
}

const HowToBuildCompilation = () => {
    return <div className='HowToBuildCompilation'>
        <b>Unlock the Secret to Monetizing Your Short Videos {'>'}</b>
    </div>
}

const MainContent = () => {
    return <div className='HomePage-MainContent'>
        <div className='HomePage-MainContent-Menu'>
            <div className='HomePage-MainContent-Menu-TextSection'>
                <h1>Maximizing your content distribution</h1>
                <p>Make an Impact with Powerful Videos: Turn small clips into visual masterpieces and significantly broaden your content's reach across social media platforms. Explore how our innovative solution can assist you in capturing the attention of a larger audience and effectively influence more people.</p>
                <div className='HomePage-MainContent-Menu-TextSection-BtnRow'>
                    <Button 
                        text='Start now'
                        onClick={() => null}
                        type={ButtonType.Primary}
                    />
                    <Button 
                        text='Request a demo'
                        onClick={() => null}
                        type={ButtonType.Secondary}
                    />
                </div>
            </div>
            
        </div>

    </div>
}

const CaseUse = () => {
    return <div className='HomePage-CaseUse'>
        <div className='HomePage-CaseUse-Menu'>
            <h1>Improve your posting routine with workflow.</h1>
            <div className='HomePage-CaseUse-Menu-Cards'>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>
    </div>
}

const LetsGetStarted = () => {
    return <div className='HomePage-LetsGetStarted'>
        <div className='HomePage-LetsGetStarted-Menu'>
            <h1>Ready to get started?</h1>
            <p>Access your free account today by signing up for a trial</p>
            <div className='HomePage-LetsGetStarted-Menu-Btn'>
                <Button 
                    onClick={() => null}
                    text='Start free trial'
                    type={ButtonType.Secondary}
                />
            </div>
        </div>
    </div>
}

const Footer = () => {
    return <div className='Footer'>
        
        <div className='Footer-Wrapper'>
            <div className='Footer-Menu'>
                <Logo />
            </div>
            
            <div className='Footer-Wrapper-Copy'>
                © 2023 Workflow Desenvolvimento de Software LTDA - 52.088.013/0001-68. All rights reserved. <br/>
                Avenida Prefeito Osmar Cunha, 416, Sala 1108, Florianópolis, SC - 88015-100 - Brazil
            </div>
        </div>
    </div>
}

export default function HomePage() {

    return <div className='HomePage'>
        <Header />
        <HowToBuildCompilation />
        <MainContent />
        <CaseUse />
        <LetsGetStarted />
        <Footer />
    </div>
}