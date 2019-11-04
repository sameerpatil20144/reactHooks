import React,{useState,useEffect} from 'react'  


function Counter() {
    const divStyle = {
        color: 'red'
      };
    //conuter with useState(updating state)
    const [count, setCounter] = useState(0);

    //onClick event
    const incrementCounter=()=>{
        setCounter(count+1);
    }

    //onMouseMoveListener
    // const onMouseMoveListener=(e)=> {
    //     setCounter(count+1)
    //   }
    
    

    // useEffect(calls method everytime while rendering [used as componentDidMount/componentDidUpdate/componentWillUnmount])
    useEffect(() => {
        //componentDidUpdate
        // if(count===3){   
        //     setCounter(count+1)
        // }
        console.log('makeEffect: ', count)

        // return()=>{
        //     console.log("unmounting the counter")
        //     window.removeEventListener('mousemove', onMouseMoveListener)
        // }
    });

    return (
        <div>
            {/* <h2 onClick={handleClick}>{count}</h2> */}
            <button style={divStyle} onClick={incrementCounter}>Click Me {count}</button>
        </div>
    )
}

export default Counter
