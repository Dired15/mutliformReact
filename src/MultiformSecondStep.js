import {useState,useContext} from "react";
import {MultistepFooter} from "./MultistepFooter"
import {BillingTypeSwitch} from "./BillingTypeSwitch"
import {BillingType} from "./BillingTypeContext"
import img1 from "./asset/icon-arcade.svg"
import img2 from "./asset/icon-advanced.svg"
import img3 from "./asset/icon-pro.svg"

export function MultiformSecondStep(props){

    const [planChosen,setPlanChosen]=useState("Arcade");
    const planPrice=props.pricingInfo.plan;
    const img=[img1,img2,img3]

    const eventHandler=(plan)=>{
        return (()=>{
         setPlanChosen(plan);
        });
    };
    
    const validatePlan=()=>{

        props.nextStep({
            action:"add",
            payload:{
                plan:planChosen
            }
        });
    }


    return (
        <div id="multiformSecondStep" className={" flex-col w-3/4 h-full p-2"+(props.display?" flex":" hidden")}>
            <div className="h-full pt-6  ">
            <h2>Select your plan</h2>
            <p>You have the option of monthly or yearly billing.</p>
            <div id="planCardSection" className="flex flex-row justify-between mb-4  h-3/6">

                {planPrice.map((element,index)=>{
                    const isSelected=(planChosen==element.name)?true:false;
                    return(
                        <PlanOptionCard key={element.name} name={element.name} price={element.price} src={img[index]} selected={isSelected} onClick={eventHandler(element.name)}/>
                    );
                }
                )}
               
            </div>
            <BillingTypeSwitch/>
            </div>
            <MultistepFooter goBack={props.goBack} nextStep={validatePlan}/>
        </div>
    );
}


function PlanOptionCard(props)
{
    const billingType=useContext(BillingType);
    const priceFinal=(billingType=="monthly")?props.price:(parseInt(props.price)*12);
    const priceDisplay=(billingType=="monthly")?priceFinal+"/month":priceFinal+"/year";
    const borderClass=props.selected?" border-purplish-blue bg-magnolia":" border-light-gray";
    return(
        <div className={"planOptionCard flex flex-col justify-between  p-2 border-solid  border-2 w-[30%] rounded-lg "+borderClass} onClick={props.onClick}>
            <img className="rounded-full w-5/12 aspect-square " src={props.src}/>
            <div>
                <h3 className=" text-left font-medium pb-1">{props.name}</h3>
                <p className=" text-left text-sm font-medium pb-1">${priceDisplay}</p>
                <p className="text-sm text-left font-medium pb-1">Two months free</p>
            </div>
        </div>
    );
}