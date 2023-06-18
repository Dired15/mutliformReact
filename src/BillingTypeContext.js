import {createContext} from "react"
 
export const BillingType=createContext(null);
export const SetBillingType=createContext(null);

export function BillingTypeProvider(props)
{
   

    return (
        <BillingType.Provider value={props.billingType}>
            <SetBillingType.Provider value={props.setBillingType}>
                {props.children}
            </SetBillingType.Provider>
        </BillingType.Provider>
    );

}