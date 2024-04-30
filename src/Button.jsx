const Button = ()=>{
    function Buttonclick(){
        console.log('Button click!')
    }
    return (
        <>
        <button onClick={Buttonclick}>Salam</button>
        </>
    )
}

export default Button;