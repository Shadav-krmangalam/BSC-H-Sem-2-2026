export function Component1(props){
    return (
        <>
        <h1>Hello {props.name1} Component</h1>
        <p>{props.value}</p>
        <span>{props.assignment}</span>
        
        </>
    )

}

export function ComponentExtra(){
    return (
        <a href="#">Google</a>
    )
}
// export default Component1;