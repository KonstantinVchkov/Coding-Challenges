import React from 'react'
import Icon1 from '../../components/images/svg-1.svg'
import Icon2 from '../images/svg-2.svg'
import Icon3 from '../images/svg-3.svg'
import { ServiceContainer, ServicesH1, ServicesWrapper, ServicesCard,
ServicesIcon, ServicesH2, ServicesP
} from './ServicesElements'
const Services = () => {
    return (
        <ServiceContainer id="Services">
            <ServicesH1>Our Services</ServicesH1>
            <ServicesWrapper>
                <ServicesCard>
                    <ServicesIcon src={Icon1} />
                    <ServicesH2>See What we have in our system</ServicesH2>
                    <ServicesP>We Will Help you for everything you need to know! </ServicesP>
                </ServicesCard>

                <ServicesCard>
                    <ServicesIcon src={Icon2} />
                    <ServicesH2>VIRTUAL MONEY IS HERE!</ServicesH2>
                    <ServicesP>SIGN UP NOW AND YOU WILL GET THE SILVER CARD!</ServicesP>
                </ServicesCard>

                <ServicesCard>
                    <ServicesIcon src={Icon3} />
                    <ServicesH2>SEE HOW TRADING SYSTEM WORKS!</ServicesH2>
                    <ServicesP>With just 5$ monthly you can become VIP MEMBER OF OUR VISA CRYPTO CARD!</ServicesP>
                </ServicesCard>
            </ServicesWrapper>
            
        </ServiceContainer>
    )
}

export default Services
