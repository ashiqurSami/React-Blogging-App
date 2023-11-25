import React, { useState,useEffect } from 'react';
import Layout from './../Layout/Layout';
import BlogList from '../Component/BlogList';
import { postNewest } from '../ApiRequest/APIRequest';

const HomePage = () => {
    let [newestList,setNewestList]=useState(null)
    useEffect(()=>{
        (async()=>{
            let res=await postNewest()
            console.log(res.data)
            setNewestList(res);
        })()
    },[])

    return (
        <div>
            <Layout>
                {newestList===null? <h1>hello</h1> :<BlogList newestList={newestList}></BlogList>}
            </Layout>
        </div>
    );
};

export default HomePage;