


function Github(){
    

    const avtar = () => {
        const data = fetch("https://api.github.com/users/saurabhsonalkar")
        .then((res)=>res.json())

        const pic = data.avtar
        return pic
    }

    return(
        <>
         
        
        </>
    )
}

export default Github