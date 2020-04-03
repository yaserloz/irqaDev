import React from 'react'
import { Header, Icon } from 'semantic-ui-react';
import Menu from '../Menu/Menu'
import './Header.css'
const HeaderNormal = props => {
    return (
        <div className='headerWrapper'>

        <Header  as='h2' icon textAlign='center'>
            <Icon name='code' circular />
            <Header.Content>ALQAISI yasir</Header.Content>
            </Header>
        <Menu />
            
        </div>
    )
}



export default HeaderNormal
