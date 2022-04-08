import React, { useEffect } from 'react'
import "./home.scss"
import { Card } from 'antd';
import { useDispatch } from "react-redux";
import { Spin } from 'antd';
import axios from "axios"
const { Meta } = Card;
const Home = () => {
  const [loading,setLoading]=React.useState(false)
  const [userlist,setUserList]=React.useState([]);
  const dispatch = useDispatch();
  const [user,setUser]=React.useState();
  const [deatils,setDetails]=React.useState();
  const getUser=async(id)=>{
    setLoading(true)
    const res=await axios.get(`https://reqres.in/api/users/${id}`)
    console.log(res.data.data)
    setUser(res.data.data)
    console.log(res.data)
    setDetails(res.data.support)
    setLoading(false)
  }
  useEffect(()=>{


   const getData=async()=>{
     setLoading(true)
    const res=await axios.get('https://reqres.in/api/users?page=1')
    
    setUserList(res.data.data)
    setLoading(false)
   }
   getData()
  },[])
  return (
    <div>UserList
     {loading?
     <div  style={{width:"100%",height:"100vh",display:"flex",justifyContent:"center",alignItems:"center"}}>
        <Spin/>
     </div>: <div className='card'>
{user?<Card
    hoverable
    style={{ width: 240 }}
    cover={<img alt={user.first_name} src={user.avatar} />}
  >
    <Meta title={user.first_name+" "+user.last_name} description={deatils&&deatils.text}/>
    <a src={deatils&&deatils.url}>{deatils&&deatils.url}</a>
  </Card>:<Card
    hoverable
    style={{ width: 240 }}
    >
      <h1 style={{textAlign:"center"}}>
        Click on any user ID
      </h1>
  </Card>}
  </div>}
  <div className='buttons'>
    {userlist.map((item,index)=> <button onClick={()=>{getUser(item.id)}}>{item.id}</button>)}
   
  </div>
    </div> 
  )
}

export default Home