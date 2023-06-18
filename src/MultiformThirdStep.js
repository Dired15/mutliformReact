import {useState,useRef} from "react";
import {MultistepFooter} from "./MultistepFooter"
import checkIcon from "./asset/icon-checkmark.svg"


export function MultiformThirdStep(props){

    const [addOn,setAddOn]=useState([false,false,false]);
    const addOnPricing=props.pricingInfo.addOn;

    const eventHandler=(index)=>{

        return (()=>{
        const newAddOn=[...addOn];
         newAddOn[index]=!addOn[index]
         setAddOn(newAddOn);
        });
    };
    
    const validateAddOn=()=>{

        props.nextStep({
            action:"add",
            payload:{
                addOn:[addOn[0],addOn[1],addOn[2]]
            }
        });
    }


    return (
        <div id="multiformThirdStep" className={"flex-col w-3/4 h-full p-2"+(props.display?" flex":" hidden")}>
            <div className="h-full pt-6  ">
                <h2>Select your plan</h2>
                <p>You have the option of monthly or yearly billing.</p>
                <div id="AddOnCardSection" className=" flex flex-col justify-between mb-4  h-4/6">
                    {addOnPricing.map((element,index)=>{

                        const isChecked=addOn[index];
                        return (<AddOnOptionCard key={element.name} name={element.name} description={element.description}  price={element.price} checked={isChecked} onClick={eventHandler(index)}/>);

                    })}
                    
                </div>
            </div>
            <MultistepFooter goBack={props.goBack} nextStep={validateAddOn}/>
        </div>
    );
}


function AddOnOptionCard(props)
{
    const checkedClass=(props.checked)?" bg-purplish-blue flex":" hidden";
    console.log("checked:",props.checked);
    return(
        <div className={"addOnOptionCard flex flex-row justify-between items-center  p-3 border-solid  border-2 w-full h-[30%] border-light-gray rounded-lg "} onClick={props.onClick}>
            <div className="flex flex-row items-center w-3/5" >
                <div className="check border-solid border-light-gray border-2 aspect-square w-1/12 mr-3">
                    <div className={"w-full h-full bg-contain bg-no-repeat "+checkedClass} style={{backgroundImage:"url('"+checkIcon+"')"}}></div>
                </div>

                <div className="addOnInfo ">

                    <h3 className="font-medium text-left">{props.name}</h3>
                    <p className="font-medium text-sm text-cool-gray text-left">{props.description}</p>

                </div>

            </div>
            <p className="font-medium text-sm text-left">${props.price}/month</p>
        </div>
    );
}