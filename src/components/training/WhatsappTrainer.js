import { FloatingWhatsApp } from 'react-floating-whatsapp'
import logo from '../img/logo2.jpeg'

function App() {

  return (
    <>
    <FloatingWhatsApp
    phoneNumber="+254789173033"
        accountName="TorchBearer Institute of Technologies"
        statusMessage="Empower the mind Energize the community"
        chatMessage="Hello! How can I help you?"
        avatar={logo} 
    />
    </>
  );}

export default App;