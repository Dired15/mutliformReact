import {useContext} from "react"
import {BillingType,SetBillingType} from "./BillingTypeContext"


export function BillingTypeSwitch(){

    const billingType=useContext(BillingType);
    const setBillingType=useContext(SetBillingType);

   

    const eventHandlerSwitch=(billingType)=>{
        console.log("oye");
        return ()=>{setBillingType(billingType)};
    }
    const monthlyClass=(billingType=="monthly")?" text-marine-blue ":" text-cool-gray";
    const yearlyClass=(billingType=="yearly")?" text-marine-blue ":" text-cool-gray";
    const selectBall=<div className="h-full bg-white aspect-1 rounded-full"></div>
    return(
        <div className="BillingTypeComponent flex flex-row justify-center items-center  h-1/6">

            <p className={" text-right font-medium "+monthlyClass} onClick={eventHandlerSwitch("monthly")}>Monthly</p>
            
            <div className="switchButton bg-marine-blue flex flex-row rounded-full aspect-[2/1] h-3/6  mx-2">

                <div className={"  w-1/2 p-1  h-full"} onClick={eventHandlerSwitch("monthly")}>
                    {(billingType=="monthly")?selectBall:null}
                </div>
                <div className={" w-1/2 p-1 h-full"} onClick={eventHandlerSwitch("yearly")}>
                    {(billingType=="yearly")?selectBall:null}
                </div>

            </div>

            <p className={"  text-left font-medium "+yearlyClass} onClick={eventHandlerSwitch("yearly")}>Yearly</p>
        </div>
    );
}