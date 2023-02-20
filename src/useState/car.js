import React from 'react'

export default function Car({ click }) {
    const hclick = () => {
        click("我是子组件传来的数据")
    }
    return (
        <div>
            自组件
            <button onClick={hclick}>
                dinjijijihji
            </button>
        </div>
    )
}
