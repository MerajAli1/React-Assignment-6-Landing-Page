import React, { useEffect, useState } from 'react'
import axios from 'axios'
import LoadingScreen from '../LoadingScreen/LoadingScreen'
import "../../App.css"
import { Typography } from '@mui/material'
const Github = () => {
  const [githubData, setGithubData] = useState([])
  const [loading, setloading] = useState(true)
  const arr = [1, 2, 3, 4, 5, 2]
  const getData = async () => {
    try {
      const response = await axios.get("https://api.github.com/users/MerajAli1")
      setGithubData(response.data)
      console.log(response.data);
      setloading(false)
    } catch (error) {
      console.log("ERROR: " + error)
    }
  }
  useEffect(() => {
    getData()
    setloading(true)
  }, [])
  return (
    <>
     {loading && <LoadingScreen />}
      <div  style={{ display: "flex", justifyContent: "center", alignItems: "center", flexWrap: "warp" }}>
        <div style={{textAlign:"center", marginTop:"50px"}}>
          <Typography >My Github Profile</Typography>
          <a target='_blank' style={{display:"block"}} href={githubData.html_url}>{githubData.html_url}</a>
          <h1>Username: MerajAli1</h1>
          <img  src={githubData.avatar_url} alt="" /><br/>
          <h1>Followers: {githubData.followers}</h1>
          <p>Bio: {githubData.bio}</p>
        </div>
      </div>
    </>
  )
}

export default Github