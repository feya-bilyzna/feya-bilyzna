import React, { Children, useRef, useEffect } from 'react'
import cx from 'classnames'
import M from 'materialize-css'

let id = 0

const idgen = () => {
    let oldId = id
    id += 1
    return oldId
}

const CustomFabButton = ({
    children,
    className,
    icon,
    ...props
}) => {
    const _fab = useRef(null)

    useEffect(() => {
        if (_fab.current) {
            const instance = M.FloatingActionButton.init(_fab.current, true)
            return () => instance && instance.destroy()
        }
    }, [])

    return <div
        {...props}
        className='fixed-action-btn'
        ref={_fab}
    >
        <button className={cx(className, "btn-floating", "btn-large")}>
            {icon}
        </button>
        <ul>
            {Children.map(children, child => (
                <li key={idgen()}>{child}</li>
            ))}
        </ul>
    </div>
}

export default CustomFabButton
