import {useContext} from "react";
import {MultistepFooter} from "./MultistepFooter"
import {BillingType,SetBillingType} from "./BillingTypeContext"


export function MultiformFourthStep(props){

    const addOnPricing=props.pricingInfo;
    const pricingType=useContext(BillingType);
    const setPricingType=useContext(SetBillingType);
     const addOnElements=props.multiformData.addOn.map((element,index)=>{
        return (element)?<AddOnSelectedCard key={addOnPricing.addOn[index].name} name={addOnPricing.addOn[index].name} price={addOnPricing.addOn[index].price}/>:null;
     });
   
    return (
        <div id="multiformFourthStep" className={"flex-col w-3/4 h-full p-2"+(props.display?" flex":" hidden")}>
            <div className="h-full pt-6  ">
                <h2>Finishing up</h2>
                <p>Double-check everything looks OK before confirming</p>
                <div id="AddOnCardSection" className=" border-4 border-solid border-red-500 flex flex-col justify-between mb-4  h-4/6">
                    <PlanCard onClick={setPricingType} billingType={pricingType} plan={props.multiformData.plan}/>
                    {addOnElements}
                    {/* <TotalPrice/> */}
                </div>
            </div>
            <MultistepFooter goBack={props.goBack} confirm={props.confirm} />
        </div>
    );
}

function PlanCard(props){

    return(
        <div className="border-solid border-green-500 border-4">
            <div>
                <h3>{props.plan}/{props.billingType}</h3>
                <p onClick={props.setPricingType}>Change</p>
            </div>
            <p>${props.price}/mo</p>
        </div>
    );

}

function AddOnSelectedCard(props){

    return(
        <div>
            <p>{props.name}</p>
            <p>{props.price}/mo</p>
        </div>
    );
}
