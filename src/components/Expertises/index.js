import React from "react"
import { MyContainer } from "../ParentsComponents"
import { FaCode } from "react-icons/fa"
import { IconContext } from 'react-icons/lib'
import {
  SecTitle,
  ExpSection,
  ExpertisesList,
  ExpertiseElement,
  ExpTitle,
  ExpContent,
} from "./ExpertisesElements"

const Expertises = () => (
  <ExpSection>
    <MyContainer>
      <SecTitle>Expertises</SecTitle>
      <IconContext.Provider value ={{color:"black",size:"80px"}}>
        <ExpertisesList>
          <ExpertiseElement>
            <FaCode />
            <ExpTitle>Devellopement Web</ExpTitle>
            <ExpContent>
              Enim quis pariatur veniam ullamco. Cupidatat laboris est tempor
              esse eu. Nulla est est adipisicing aliqua est cillum anim occaecat
              dolore Lorem nostrud esse irure. Non eu deserunt id proident et
              cillum cillum ad ut. Voluptate occaecat consectetur enim dolor.
              Nulla do cillum consequat sunt.
            </ExpContent>
          </ExpertiseElement>
          <ExpertiseElement>
            <ExpTitle>Devellopement try</ExpTitle>
            <ExpContent>
              Enim quis pariatur veniam ullamco. Cupidatat laboris est tempor
              esse eu. Nulla est est adipisicing aliqua est cillum anim occaecat
              dolore Lorem nostrud esse irure. Non eu deserunt id proident et
              cillum cillum ad ut. Voluptate occaecat consectetur enim dolor.
              Nulla do cillum consequat sunt.
            </ExpContent>
          </ExpertiseElement>
          <ExpertiseElement>
            <ExpTitle>Devellopement Web</ExpTitle>
            <ExpContent>
              Enim quis pariatur veniam ullamco. Cupidatat laboris est tempor
              esse eu. Nulla est est adipisicing aliqua est cillum anim occaecat
              dolore Lorem nostrud esse irure. Non eu deserunt id proident et
              cillum cillum ad ut. Voluptate occaecat consectetur enim dolor.
              Nulla do cillum consequat sunt.
            </ExpContent>
          </ExpertiseElement>
          <ExpertiseElement>
            <ExpTitle>Devellopement Web</ExpTitle>
            <ExpContent>
              Enim quis pariatur veniam ullamco. Cupidatat laboris est tempor
              esse eu. Nulla est est adipisicing aliqua est cillum anim occaecat
              dolore Lorem nostrud esse irure. Non eu deserunt id proident et
              cillum cillum ad ut. Voluptate occaecat consectetur enim dolor.
              Nulla do cillum consequat sunt.
            </ExpContent>
          </ExpertiseElement>
        </ExpertisesList>
      </IconContext.Provider>
    </MyContainer>
  </ExpSection>
)

export default Expertises
