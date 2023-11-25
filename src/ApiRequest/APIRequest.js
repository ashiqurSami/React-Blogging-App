import axios from "axios";

const BaseURL="https://basic-blog.teamrabbil.com/api";

export async function postByCategories(){
    let res= await axios.get(BaseURL+"/post-categories");
    if (res.status===200){
        return res.data;
    }else{
        return []
    }
}

export async function postNewest(){
    let res=await axios.get(BaseURL+"/post-newest")
    if(res.status===200){
        console.log(res.data)
        return res.data
    }else{
        return []
    }
}