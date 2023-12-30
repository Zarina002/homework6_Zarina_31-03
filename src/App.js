import React, { useState, useEffect, useRef } from 'react'

const App = () => {
    const [count, setCount] = useState(0)
    const [inputText, setInputText] = useState('')
    const inputRef = useRef()

    useEffect(() => {
        document.title = `Count: ${count} | Text: ${inputText}`
        inputRef.current.focus()
        return () => (document.title = 'React App')
    }, [count, inputText])

    const handleInputChange = (e) => {
        setInputText(e.target.value);
    };

    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <div>
                <p>Count: {count}</p>
                <button onClick={() => setCount(count + 1)}>Увеличить</button>
            </div>

            <div style={{ marginTop: '20px', textAlign: 'center' }}>
                <label>
                    Введите текст:
                    <input type="text" ref={inputRef} value={inputText} onChange={handleInputChange} />
                </label>
                <div style={{ marginTop: '10px', padding: '10px', border: '1px solid #ccc', borderRadius: '4px' }}>
                    <p>Введенный текст:</p>
                    <div>{inputText}</div>
                </div>
            </div>
        </div>
    )
};

export default App;