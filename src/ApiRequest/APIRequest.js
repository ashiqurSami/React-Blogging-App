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
        return res.data
    }else{
        return []
    }
}

export async function postByCategory(id){
    let res =await axios (BaseURL+"/post-list/"+id)
    if (res.status===200){
        return res.data
    }else{
        return []
    }
}

export async function detailsPost(id){
    let res =await axios.get(BaseURL+"/post-details/"+id)
    console.log("helllo")
    if (res.status===200){
        console.log("hello")
        return res.data
    }else{
        return []
    }
}