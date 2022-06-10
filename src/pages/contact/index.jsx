import React from 'react'
import { Container, Content } from './style'
import { FaLinkedin, FaFacebook, FaInstagram, FaEnvelope } from 'react-icons/fa'
import ItemContact from '../../../components/itemcontact'

export default function Contact() {
  return (
    <Container>
      <Content>
        <ItemContact 
          IconFa={FaLinkedin} 
          LinkContact="https://www.linkedin.com/in/igor-gomes012/" 
        />
        <ItemContact 
          IconFa={FaFacebook} 
          LinkContact="https://www.facebook.com/profile.php?id=100004514914630" 
        />
        <ItemContact 
          IconFa={FaInstagram} 
          LinkContact="https://www.instagram.com/igor_gomes02/" 
        />
        <ItemContact 
          IconFa={FaEnvelope} 
          LinkContact="igoroliveirasl0210@gmail.com" 
        />
      </Content>
    </Container>
  )
}