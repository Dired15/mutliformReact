import backgroundImage from "./asset/bg-sidebar-desktop.svg"

export function CurrentStepDisplay(props)
{
    
    return(
        <div id="stepDisplay" className=" w-2/5 p-4 rounded-lg bg-no-repeat bg-cover" style={{backgroundImage:"url('"+backgroundImage+"')"}}>
            <StepCard number="1" title="YOUR INFO" current={props.currentStep}/>
            <StepCard number="2" title="SELECT PLAN"current={props.currentStep}/>
            <StepCard number="3" title="ADD-ONS" current={props.currentStep}/>
            <StepCard number="4" title="SUMMARY" current={props.currentStep}/>
        </div>
    );
}

function StepCard(props)
{
    const borderClass=(props.number==props.current)?" text-marine-blue bg-pastel-blue":" border-white";
    console.log("borderClass",borderClass);
    console.log("current",props.current);
    console.log("index",props.number);
    return (
        <div className=" flex flex-row items-center h-17 p-0 mb-4 text-white">

            <div className={"w-1/5  min-h-full rounded-full aspect-square mr-2 border-solid border flex justify-center items-center"+borderClass}>{props.number}</div>

            <div className="">

                <p className="text-xs font-bold text-left  text-light-gray">STEP {props.number}</p>
                <p className="font-bold text-sm">{props.title}</p>

            </div>
        </div>
    );

}