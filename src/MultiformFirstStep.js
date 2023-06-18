import {useState,useRef} from "react";
import {MultistepFooter} from "./MultistepFooter"


export function MultiformFirstStep(props){

    const [inputValue,setInputValue]=useState(["","",""]);
    const formRef=useRef();


    
    const validateForm=()=>{
        
           const nameValid=checkInputValidity(formRef.current.elements.name);
           const mailValid=checkInputValidity(formRef.current.elements.mail);
           const phoneNumberValid=checkInputValidity(formRef.current.elements.phoneNumber);

           if(nameValid && mailValid && phoneNumberValid)
           {
                props.nextStep({
                    action:"add",
                    payload:{
                        name:inputValue[0],
                        mail:inputValue[1],
                        phoneNumber:inputValue[2]
                    }
                });

           }
        

    }

    const checkInputValidity=(inputElement)=>{
        return inputElement.classList.contains("valid");
    }

    const onSubmit=(e)=>{
        e.preventDefault();
        validateForm();
    }

    const eventHandlerChange=(index)=>{

        return (e)=>{
            
            const newInput=[...inputValue];
            newInput[index]=e.target.value;
            setInputValue(newInput);
        };
    }
   

    return (
        <div id="MultiformFirstStep" className={" flex-col w-3/4 h-full p-2"+(props.display?" flex":" hidden")}>
            <div className="h-full pt-6">
                <h2>Personal info</h2>
                <p>Please provide your name, email address, and phone number.</p>
                <form ref={formRef} onSubmit={onSubmit} className=" flex flex-col h-4/6" >
                    <label htmlFor="name">Name</label>
                    <input type="text" className="valid" name="name" value={inputValue[0]} placeholder="e.g.Stephen King" onChange={eventHandlerChange(0)}/>

                    <label htmlFor="Email adress">Email adress</label>
                    <input type="text" className="valid" name="mail" value={inputValue[1]} placeholder="e.g.stephenking@lorem.com" onChange={eventHandlerChange(1)}/>

                    <label htmlFor="Phone number">Phone number</label>
                    <input type="text" className="valid" name="phoneNumber" placeholder="e.g. +1 234 567 890" value={inputValue[2]} onChange={eventHandlerChange(2)}/>

                    
                </form>
            </div>
            <MultistepFooter nextStep={validateForm}/>
        </div>
    );

}