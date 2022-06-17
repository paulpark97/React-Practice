import Button from './ButtonFunction';
import { useState } from "react"

export default function DefaultPage({ setFirstName, setLastName, pageNumb, setPageNumb, setSubmitClicked, submitClicked })
{
    const [addButton, setAddButton] = useState(0);
    //Storing page based on pageNumb
    let page = <InputName setFirstName={setFirstName} setLastName={setLastName} /> 
    if(pageNumb == 1)
    {
        page = <Organization addButton={addButton} setAddButton={setAddButton} />
    }
    else if(pageNumb === 2)
    {
        page = <SubmitPage setSubmitClicked={setSubmitClicked} submitClicked={submitClicked} />
    }
    else
    {
        page = <InputName setFirstName={setFirstName} setLastName={setLastName} /> 
    }
    
    //Changing pages by clicking next page or previous page
    let pageButton = <Button onClick={()=>{
        setPageNumb(++pageNumb);
    }}>Next Page</Button>
    if(pageNumb === 0)
    {
        pageButton = (
        <Button onClick={()=>{
            setPageNumb(++pageNumb);
        }}>Next Page</Button>
        )
    }
    else if(pageNumb > 0 && pageNumb < 2)
    {
        pageButton = (
            <tr>
            <Button onClick={()=>{
                setPageNumb(--pageNumb);
            }}>Previous Page</Button>
            <Button onClick={()=>{
                setPageNumb(++pageNumb);
            }}>Next Page</Button>
            </tr>
        )
    }
    else if(pageNumb === 2)
    {
        pageButton = <Button onClick={()=>{
            setPageNumb(--pageNumb);
        }}>Previous Page</Button>
    }
   
    return(
        <div>
            <Header />
            {page}
            <br />
            {pageButton}
        </div>
    )
}

function SubmitPage({ setSubmitClicked, submitClicked })
{
    return(
        <div style={{
            color:"red" 
        }}>
            <p>Would you like to submit your information?</p>
            <Button onClick={()=>{
                setSubmitClicked(!submitClicked);
            }}>Yes</Button>
        </div>
    )
}

function Organization({ addButton, setAddButton })
{
    const [inputArray, setInputArray] = useState([]); //User inputs
    const [blankTextArray, setBlankTextArray] = useState([]); //Blank input lines
    
    const blankTextList = blankTextArray.map(element =>
        <li>
            {element}
        </li>
        );
    const inputList = inputArray.map(element=>
        <li>
            {element}
        </li>
        )

    //Minus Button
    let minusButton = <Button onClick={()=>{
        setAddButton(--addButton);
        blankTextArray.pop();
        inputArray.pop();
        }}>Minus</Button>
    if(addButton === 0){
        minusButton = <></>;
    }

    return(
        <div>
            <h4>Organizations</h4>
            <Button onClick={()=>{
                blankTextArray.push(
                    <form>
                        <input type="text" placeholder="Organization" onChange={(e)=>{
                            setInputArray(e.target.value)
                        }}
                        />
                    </form>
                );
                setAddButton(++addButton);
            }}>Add More</Button>
            {minusButton}
            <ol>
                {blankTextList}
            </ol>
            <ul>
                <h3>List</h3>
                {inputList}
            </ul>
        </div>
    )
    
}

function Header()
{
    return(
        <div style={{
         backgroundColor: "lightblue",
         alignContent: "center"
    
        }}>
            <h1>Resume Builder</h1>
            <p style={{
                alignContent: "center"
            }}>This app builds your resume</p>

        </div>
    )
}

function InputName({ setFirstName, setLastName })
{
    return(
        <form>
                
                <text>First Name</text>
                <br />
                <input type="text" placeholder="First Name" onChange={(e)=>{
                    setFirstName(e.target.value);
                }}
                />
                <br />
                <br />
                <text>Last Name</text>
                <br />
                <input type="text" placeholder="Last Name" onChange={(e)=>{
                    setLastName(e.target.value);
                }}
                />
        </form>
    )
}


