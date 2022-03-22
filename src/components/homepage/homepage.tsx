import React, { Component } from 'react'
import Searchengine from '../searchengine/searchengine'
import Donationpage from '../donationpage/donationpage'
import Nav from '../nav/nav'
import Myaccount from '../myaccount/myaccount'
import './homepage.css'
import Login from '../login/login'



// define the type of the state
export type AssociationsState = {
  associations: {
    id:number,
    name:string,
    description: string
  }[],
  associationSelected: {
    id: number,
    name:string,
    description: string
  }
  accountPageOpened: Boolean,
  userIsLoggingIn: Boolean
}



// creation of the home page component
export default class Homepage extends React.Component<{}, AssociationsState>{
  
 
  // initialize the state
  state = {
    associations: [
      {id:0, name: 'asso1', description: 'description1'},
      {id:1, name: 'asso2', description: 'description2'},
      {id:2, name: 'asso3', description: 'description3'},
      {id:3, name: 'bilbou', description: 'description1'},
      {id:4, name: 'ccccc', description: 'description2'},
      {id:5, name: 'nanmaisnanmaisnanmains', description: 'description3'}
    ],
    associationSelected: {
      id: -1,
      name:'none',
      description: 'none'
    },
    accountPageOpened: true,
    userIsLoggingIn: false
  }

  handleLogin = () => {
    let associationSelected = this.state.associationSelected
    let associations = this.state.associations
    let accountPageOpened = this.state.accountPageOpened
    let userIsLoggingIn = !this.state.userIsLoggingIn
    let newState = {associations, associationSelected, accountPageOpened, userIsLoggingIn}

    this.setState(newState)
  }

  // function to modify the association selected in the state
  handleAssociation = (associationSelectedId:number, associationSelectedName:string, associationSelectedDescription:string) => {
    let associationSelected = {id:associationSelectedId, name:associationSelectedName , description:associationSelectedDescription}
    let associations = this.state.associations
    let accountPageOpened = this.state.accountPageOpened
    let newAssociations = {associations, associationSelected, accountPageOpened}
    
    this.setState(newAssociations)
  }

  // function for quitting the DonationPAge and going back to the homepage
  quitDonationPage = () => {
    let associations = this.state.associations
    let assoSelectedName = this.state.associationSelected.name
    let assoSelectedDescription = this.state.associationSelected.description
    let associationSelected = {id:-1, name:assoSelectedName, description:assoSelectedDescription}
    let accountPageOpened = this.state.accountPageOpened
    let newAssoState = {associations, associationSelected, accountPageOpened}

    this.setState(newAssoState)
  }

  handleAccountPageOpened = () => {
    let associations = this.state.associations
    let assoSelectedName = this.state.associationSelected.name
    let assoSelectedDescription = this.state.associationSelected.description
    let assoSelectedId = this.state.associationSelected.id
    let associationSelected = {id:assoSelectedId, name:assoSelectedName, description:assoSelectedDescription}
    let accountPageOpened = !this.state.accountPageOpened
    let newState = {associations, associationSelected, accountPageOpened}

    this.setState(newState)
  }



  

  render() {
    
    if(this.state.accountPageOpened==true && this.state.userIsLoggingIn == false){
      return (
        <div> 
          <Nav handleAccountPageOpened={this.handleAccountPageOpened} handleLogin={this.handleLogin}/>
          <Myaccount />
        </div>
      )                 
    } else if(this.state.associationSelected.id==-1 && this.state.accountPageOpened == false && this.state.userIsLoggingIn == false)
      return (     
        <div>
          la homepage
          <Nav handleAccountPageOpened={this.handleAccountPageOpened} handleLogin={this.handleLogin}/>   
          <Searchengine  associations={this.state.associations} handleAssociation={this.handleAssociation}/>
        </div>  
      ) 
    else if(this.state.userIsLoggingIn == true){
      return (
        <div>
          <Nav handleAccountPageOpened={this.handleAccountPageOpened} handleLogin={this.handleLogin}/>
          <Login />
        </div>
      )
    } else {
      return (
        <div>
          <Nav handleAccountPageOpened={this.handleAccountPageOpened} handleLogin={this.handleLogin}/>
          <Donationpage association={this.state.associationSelected} handleAssociation={this.handleAssociation} quitPage={this.quitDonationPage} />
        </div>
      )
    } 

  }
}