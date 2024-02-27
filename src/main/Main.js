// import React from 'react'
import Counter from './Counter';
import img from'./img/random.jpg';
import './css/Counter.css';


function Main(){
    return(
        <div className='text-center'>
            <Counter datos={['Leonardo Javier Molina Diaz', '20988', '5A']} />
            <img src={img} alt="random.jpg" class='img'/>
            
        </div>
    )
}

export default Main