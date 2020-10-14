import React from 'react'
import {Link} from 'gatsby'
import {SectionContact,ContainerContact,H1Contact,PContact} from "./ThankYouComponents"
import Mail from "../../images/svg/message.inline.svg"

const ThankYou = () =>(
    <SectionContact>
        <Link to="/">
        <ContainerContact>
            <H1Contact>Merci pour votre message !</H1Contact>
            <PContact>Nous vous recontacterons dans les plus brefs delais</PContact>
            <PContact style={{textDecoration:"underline"}}>Retour à la page d'acceuil</PContact>
            <Mail style={{maxWidth:"500px", marginLeft:"auto",marginRight:"auto"}}/>
        </ContainerContact>
        </Link>
    </SectionContact>
)

export default ThankYou