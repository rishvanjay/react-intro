import React from 'react'
import Counter from './counter'

function SinList(){
    return(
        <div>
        <Counter sinName = "sleeping less"/>
        <Counter sinName = "waking up early"/>
        <Counter sinName = "doing homework"/>
        </div>
    )
}

export default SinList