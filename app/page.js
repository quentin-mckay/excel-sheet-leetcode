'use client'

import { useState, useEffect } from 'react'

const Home = () => {
    const [columnNumber, setColumnNumber] = useState(1)
    const [quotient, setQuotient] = useState(0)
    const [remainder, setRemainder] = useState(0)

    const convertToLetter = (n) => String.fromCharCode(n + 64)

    const convertToTitle = () => {
        let start = quotient ? convertToLetter(quotient) : ''
        // let start = convertToLetter(quotient)
        let end = convertToLetter(remainder)
        return start + end
    }

    useEffect(() => {
        const n = columnNumber - 1
        setQuotient(Math.floor(n / 26))
        setRemainder((n % 26) + 1)
    }, [columnNumber])

    return (
        <div className='min-h-screen bg-slate-800 grid place-items-center text-white'>
            <div className=' max-w-7xl px-16'>
                <p className='text-3xl'>
                    Input Column:{' '}
                    <span className='text-amber-500'>{columnNumber}</span>
                </p>
                <input
                    type='range'
                    min='1'
                    max='100'
                    value={columnNumber}
                    onChange={(e) => setColumnNumber(e.target.value)}
                    className='w-full mt-4'
                />

                <div className='text-3xl font-mono mt-12 bg-emerald-200/10 p-4 rounded-lg'>
                    <p className=''>
                        <span className='text-cyan-300'>n:</span> (
                        {`${columnNumber} - 1`}) ={' '}
                        <span className='text-emerald-300'>
                            {columnNumber - 1}
                        </span>
                    </p>
                    <p className=''>
                        <span className='text-cyan-300'>quotient:</span>{' '}
                        {`Math.floor(`}<span className="text-emerald-300">{`${columnNumber - 1}`}</span>  {` / 26) = `} 
                        <span className='text-amber-500'>{quotient} {`[${convertToLetter(quotient)}]`}</span>
                    </p>
                    <p className=''>
                        <span className='text-cyan-300'>remainder:</span> (
                        <span className="text-emerald-300">{`${columnNumber - 1}`}</span> % 26) + 1 ={' '}
                        <span className='text-amber-500'>{remainder} {`[${convertToLetter(remainder)}]`}</span>
                    </p>
                </div>

                <div className='text-center text-7xl mt-16 border border-white rounded-lg py-4 mx-auto'>
                    {convertToTitle(columnNumber - 1)} {'->'} {columnNumber}
                </div>
            </div>
        </div>
    )
}
export default Home
