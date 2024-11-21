import { useEffect, useState } from "react"


function Github(){
    const [avatar, setAvatar] = useState('')
    const [followers, setFollowers] = useState(0)
    
    useEffect(()=>{
        const fetchAvatar = async() => {
            const response = await fetch("https://api.github.com/users/saurabhsonalkar")
            const data = await response.json()

            setAvatar(data.avatar_url)
            setFollowers(data.followers)
        }

        fetchAvatar()
    },[])

return(
    <>
    <div className="text-3xl text-center bg-orange-500 p-4 ">Followers: 1{followers}M</div>
    <div><img src={avatar} alt="" className="sm:w-96 w-48"/></div>
    
    </>
)


}

export default Github