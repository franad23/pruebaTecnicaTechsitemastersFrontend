import './inputcomponent.css';

//Interfaces
interface InputComponentProps {
  titleInput: string;
  nameInput: string;
  typeInput: string;
  placeholderInput: string;
  valueInput?: string;
  onChangeInput: (name: string, value: string) => void;
}

function InputComponent({nameInput, placeholderInput, titleInput, typeInput, onChangeInput} : InputComponentProps) {
  return (
    <div className='inputComponentMainContainer'>
      <h4 className='titleInputComponent'>{titleInput}:</h4>
      <input 
        type={typeInput} 
        name={nameInput} 
        placeholder={placeholderInput} 
        onChange={(e) => onChangeInput(nameInput, e.target.value)} 
        className='inputComponent'
        minLength={5}
        maxLength={30}
      />
    </div>
  )
}

export default InputComponent