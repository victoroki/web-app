import { FloatingWhatsApp } from 'react-floating-whatsapp'
import logo from './img/logoai.png'

function App() {

  return (
    <>
    <FloatingWhatsApp
    phoneNumber="+254743076376"
        accountName="TorchBearer"
        statusMessage="We care about Your property"
        chatMessage="Hello! How can I help you?"
        avatar={logo} 
    />
    </>
  );}

export default App;