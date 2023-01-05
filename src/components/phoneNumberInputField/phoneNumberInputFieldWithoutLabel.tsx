import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'
import flags from 'react-phone-number-input/flags'
import { E164Number } from 'libphonenumber-js/types'
import { Dispatch, SetStateAction } from 'react'



  type PhoneNumberInputFieldWithoutLabelPropType={
	changeFunction:Dispatch<SetStateAction<E164Number | undefined>>;
	value: E164Number | undefined;
  }
 const PhoneNumberInputFieldWithoutLabel =({changeFunction, value}: PhoneNumberInputFieldWithoutLabelPropType)=> {
	// const numberField:E164Number|null =""
	// const [value, setValue] = useState(numberField)
	
	// const me=()=>{
	// 	setValue(value)
	// }
	
  return (
	<div>
    
		<PhoneInput 
		flags={flags} 
		onChange={changeFunction} 
		defaultCountry="NG"
		international={true}
		
		value={value}/>
	</div>
  )
}

export default PhoneNumberInputFieldWithoutLabel