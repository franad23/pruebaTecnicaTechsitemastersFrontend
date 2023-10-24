import './buttons.css'

//Interfaces
interface ButtonsProps {
  name: string;
  onClick: () => void;
}

function Buttons({name, onClick}: ButtonsProps) {
  return (
    <button className='buttonComponent' onClick={() => onClick()}>{name}</button>
  )
}

export default Buttons