// import { useEffect, useState } from "react"
import { useLoaderData } from "react-router";


function Github(){
    // const [avatar, setAvatar] = useState('')
    // const [followers, setFollowers] = useState(0)
    
    // useEffect(()=>{
    //     const fetchAvatar = async() => {
    //         const response = await fetch("https://api.github.com/users/saurabhsonalkar")
    //         const data = await response.json()

    //         setAvatar(data.avatar_url)
    //         setFollowers(data.followers)
    //     }

    //     fetchAvatar()
    // },[])

    const data = useLoaderData()

return(
    <>
    <div className="text-center m-4 bg-gray-600 text-white p-4 text-3xl">Followers: 1{data.followers}M
    <img src={data.avatar_url} alt="" className="sm:w-96 w-48"/></div>
    
    </>
)


}

export default Github;

export const GithubInfo = async () => {
    const data= await fetch("https://api.github.com/users/saurabhsonalkar").then((response)=>response.json())

    return data;
}