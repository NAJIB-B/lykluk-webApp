import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'
import flags from 'react-phone-number-input/flags'
import { E164Number } from 'libphonenumber-js/types'
import { Dispatch, SetStateAction } from 'react'




const PhoneNumberInputField =({changeFunction, value})=> {

	

  return (
	<div>
     <label>Phone Number</label>
		<PhoneInput 
		flags={flags} 
		onChange={changeFunction} 
		defaultCountry="NG"
		international={true}
		
		value={value}/>
		
	</div>
  )
}

export default PhoneNumberInputField