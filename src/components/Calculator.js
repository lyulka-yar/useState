import React, {useState} from 'react';
import {withRouter,Link} from 'react-router-dom';


const Calculator = () => {
    const [count, setCount] = useState(0);
    const [input, setInput] = useState(0);
    const arr = [1, -1, 100, -100, 'reset'];

    const multiply = (value) => {
    	if(value === 'reset'){
			setCount(0)
		}else{
			const num = count + value;
			num >= 0
				? setCount(num)
				: setCount(0)
		}

    }

    const getVal = (value) => {
        let number = +value;
        !isNaN(number)
            ? setCount((prev) => parseInt(prev + number))
            : setCount('WRONG try one more time')
    }


    return (
        <div className="wrapper">
            <h3>result: {count}</h3>
            {
                arr.map(item => <button onClick={() => multiply(item)}>{item}</button>)
            }
            <input style={{textAlign: 'center'}} placeholder={'type a number'}
                   onChange={({currentTarget:{value}}) => setInput(value)} type="text"/>
                   <button onClick={() =>getVal(input)}>Submit</button>
            <Link className={'homePage'} to={'/'}>home</Link>
        </div>
    );
}

export default withRouter(Calculator);
