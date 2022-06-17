import Button from './ButtonFunction';

export default function ResumePage({ firstName, lastName, setSubmitClicked })
{
    return(
        <div>
            <h1>{firstName} {lastName}</h1>
            <Button onClick={()=>{
                setSubmitClicked(false);
            }}>Go back to the information submit page</Button>
        </div>
    )
}