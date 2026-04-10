function Child({count,name1}){
    return (
        <>
        <h1>Count :{count} </h1>
        <span>{name1}</span>
        <Comp1 count={count} name={name1}/>
        </>

    )
}
export default Child