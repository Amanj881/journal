import React,{useState} from 'react'
import TextInput from "../../components/TextInput/TextInput";
import Btn from '../../components/Button/Button';
import axios from '../../http-common';
import { useNavigate } from "@reach/router"

function Form({label}) {

const navigate=useNavigate();
const [volume,setVolume] = useState();

const handleSubmit = (e) => {
	e.preventDefault();
	let payload = {
			volume: volume,
		};
		console.log("volume",volume);

		// axios.post('/add_volume',payload).
		// then((res)=>{
		// 	console.log(res);
		// })
		setVolume('');
		navigate('/volume');
}
	return (
		<div className=" w-full">
			<label className="text-center font-bold text-4xl ">Add Volume</label>	
			<hr className="w-full h-4" />
			<form onSubmit={handleSubmit} >
				 <TextInput
                	id="volume_name"
					labelText="Volume Name"
					name="volume"
					onChange={(e => setVolume(e.target.value))}
					value={volume}

              	/>
              	
	              <div className="mt-6">
                <span className="block w-full rounded-md shadow-sm">
                  <Btn type="submit" width="full" 
					>
                   Add Volume
                  </Btn>
                </span>
              </div>



			</form>
		</div>
	)
}

export default Form