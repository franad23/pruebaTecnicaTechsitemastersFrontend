import './register.css';
import logo from "../../assets/virtual.png"

//Components
import InputComponent from '../../components/Input/InputComponent';
import Buttons from '../../components/button/Buttons';

function Register() {
  return (
    <div className='registerMainContainer'>
      <div className='formContainer'>
        <div className='headerFormRegister'>
          <img src={logo} alt="logo" className='logo'/>
          <h2>TechSiteMaster</h2>
        </div>
        <form className='formRegister'>
          <InputComponent
            nameInput='name'
            placeholderInput='Nombre'
            titleInput='Nombre'
            typeInput='text'
            onChangeInput={(name, value) => console.log(`${name}: ${value}`)}
          />
          <InputComponent
            nameInput='lastname'
            placeholderInput='Apellido'
            titleInput='Apellido'
            typeInput='text'
            onChangeInput={(name, value) => console.log(`${name}: ${value}`)}
          />
          <InputComponent
            nameInput='dateOfBirth'
            placeholderInput='Nacimiento'
            titleInput='Fecha de Nacimiento'
            typeInput='date'
            onChangeInput={(name, value) => console.log(`${name}: ${value}`)}
          />
          <InputComponent
            nameInput='phoneNumber'
            placeholderInput='38141030123'
            titleInput='Numero de Telefono'
            typeInput='number'
            onChangeInput={(name, value) => console.log(`${name}: ${value}`)}
          />
          <InputComponent
            nameInput='email'
            placeholderInput='nombre@nombre.com'
            titleInput='Email'
            typeInput='email'
            onChangeInput={(name, value) => console.log(`${name}: ${value}`)}
          />
          <div className='buttonFormContainer'>
            <Buttons
              name='Registrar'
              onClick={() => console.log('Registro')}
            />
          </div>
        </form>
      </div>
    </div>
  )
}

export default Register