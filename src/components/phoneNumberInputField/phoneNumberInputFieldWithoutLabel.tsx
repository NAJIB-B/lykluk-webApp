import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'
import flags from 'react-phone-number-input/flags'
import { E164Number } from 'libphonenumber-js/types'
import  {useState} from "react";

 const PhoneNumberInputFieldWithoutLabel =()=> {
	const numberField:E164Number|null =""
	const [value, setValue] = useState(numberField)
	
	const me=()=>{
		setValue(value)
	}
	
  return (
	<div>
    
		<PhoneInput 
		flags={flags} 
		onChange={me} 
		defaultCountry="NG"
		international={true}
		
		value={value}/>
	</div>
  )
}

export default PhoneNumberInputFieldWithoutLabel