import { MultiformFirstStep } from "./MultiformFirstStep"
import { MultiformSecondStep } from "./MultiformSecondStep";
import { MultiformThirdStep } from "./MultiformThirdStep";
import { MultiformFourthStep } from "./MultiformFourthStep";
import {BillingTypeProvider} from "./BillingTypeContext"
import {useReducer,useState} from "react";
import {CurrentStepDisplay} from "./CurrentStepDisplay";



const billingInfo={
    plan:[
        {name:"Arcade",price:9,imgSource:""},
        {name:"Advanced",price:12,imgSource:""},
        {name:"Pro",price:15,imgSource:""},
    ],
    addOn:[
        {name:"Online Service",description:"Access to multiplayers games",price:1},
        {name:"Large Storage",description:"Extra 1TB of cloud save",price:2},
        {name:"Customizable Profile",description:"Custom theme on your profile",price:2},

    ]
};

const examplemultiforData={
    name:"Idder",
    mail:"iddersidien@ymail.com",
    phoneNumber:"09890989",
    plan:"Arcade",
    addOn:[false,true,true]

}




export function Multiform(props)
{
    const [multiformData,dispatch]=useReducer(multiformReducer,examplemultiforData);
    const [step,setStep]=useState(1);
    const [billingType,setBillingType]=useState("monthly");
    const pricingInfo=billingInfo;

    const nextStep=(formData)=>{

        dispatch(formData);
        setStep(step+1)

    }

    const goBack=()=>{
        setStep(step-1);
    }

    const confirm=()=>{
        setStep(step+1);
    }
    
    return (
        <div id="MultiformSection" className=" bg-white rounded-lg flex flex-row justify-between shadow-2xl  w-3/5 h-4/5 p-3 ">
            <CurrentStepDisplay currentStep={step}/>
            <div className="flex flex-row justify-center items-center w-full">
                <MultiformFirstStep display={step==1?true:false} nextStep={nextStep}/>
                <BillingTypeProvider billingType={billingType} setBillingType={setBillingType}>

                    <MultiformSecondStep display={step==2?true:false} goBack={goBack} nextStep={nextStep} pricingInfo={pricingInfo} />
                    <MultiformThirdStep display={step==3?true:false} goBack={goBack} nextStep={nextStep}  pricingInfo={pricingInfo}/>
                    <MultiformFourthStep display={step==4?true:false} goBack={goBack} multiformData={multiformData} confirm={confirm} pricingInfo={pricingInfo}/>
                </BillingTypeProvider>
            </div>
        </div>
    );

}





function multiformReducer(state,action){
    return {...state,...action.payload};
}