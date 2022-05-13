import { Octokit } from "octokit";
const octokit = new Octokit(/*{ auth: `personal-access-token123` }*/);

const  searchUser = async (id) =>{
    try {
    const response = await octokit.request(`GET /users/${id}`, {
            username: id,
            per_page:100,
            page:2
    }) 
    return response.data
        } catch (error) {
            return false
        }
  }
  
  const  searchRepo = async (page, login ) =>{
    try {
    const response = await octokit.request(`GET /users/${login}/repos`, {
        username: login,
        per_page:4,
        page:page,
        sort:'pushed',
      })
      return response.data
       } catch (error) {
         return false
    }
  }

  export {searchUser,searchRepo}