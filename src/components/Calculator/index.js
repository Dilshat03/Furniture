import React, {useState} from 'react';

const Calculator = () => {
    const [amount, setAmount] = useState(0)
    const [width, setWidth] = useState(0)
    const [height, setHeight] = useState(0)
    const [priceMT, setPriceMT] = useState(null)

    const handleChangeWidth = (e) =>{
        setWidth(e.target.value)
    }
    const handleChangeHeight = (e) =>{
        setHeight(e.target.value)
    }
    const handleClick = () =>{

        setAmount((width * height) * priceMT)
    }
    const handlePrice = () =>{
        if (width > 0 && width <= 2.0 && height > 0 && height <= 2.0){
            setPriceMT(3000)
        } else if(width >= 2.0 && width <= 2.5 && height > 2.0 && height <= 2.5 ){
            setPriceMT(5000)
        } else {
            setPriceMT('Введите коректный размер!')
        }
    }
    const handleRemove = () =>{
        setPriceMT(0)
        setAmount(0)
    }




    return (
        <div>
            <div className="ml-10 mt-10">
                <label htmlFor="width"> Ширина</label>
                <input type="number" id='width' onChange={handleChangeWidth}/>
                <label htmlFor="height" className='ml-5'>Высота</label>
                <input type="number" className='' onChange={handleChangeHeight} id='height'/>
                <p> Цена за кв.м. : {priceMT} сом</p>
                <p> Общая стоимость : {amount} сом</p>

                <button className='btn flex mt-4 ' onClick={handlePrice}>
                    Узнать стоимость за кв.м.
                </button>
                <button className='btn flex mt-4 ' onClick={handleClick}>
                    Рассчитать
                </button>
                <button className='btn flex mt-4 ' onClick={handleRemove}>
                    Очистить
                </button>
            </div>
        </div>
    );
};

export default Calculator;