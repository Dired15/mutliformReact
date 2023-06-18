export function MultistepFooter(props){

    const goBackClass=" h-3/6 w-1/5 bg-white rounded text-cool-gray font-medium ";
    const nextStepClass=" h-3/6 w-1/5 bg-marine-blue rounded text-white font-medium ";
    const confirmClass="";
    return(
        <div className="multiStepFooter  h-1/6 flex flex-row items-end justify-between  ">
            {props.goBack?<button className={goBackClass} onClick={props.goBack}>Go back</button>:<div></div>}
            {props.nextStep?<button className={nextStepClass} onClick={props.nextStep}>Next Step</button>:null}
            {props.confirm?<button onClick={props.confirm}>Confirm</button>:null}
        </div>
    );
}