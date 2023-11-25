import React, { useState,useEffect } from 'react';
import Layout from './../Layout/Layout';
import BlogList from '../Component/BlogList';
import { postNewest } from '../ApiRequest/APIRequest';
import Loader from '../Component/Loader';

const HomePage = () => {
    let [newestList,setNewestList]=useState(null)
    useEffect(()=>{
        (async()=>{
            let res=await postNewest()
            setNewestList(res);
        })()
    },[])

    return (
        <div>
            <Layout>
                {newestList===null? <Loader></Loader> :<BlogList newestList={newestList}></BlogList>}
            </Layout>
        </div>
    );
};

export default HomePage;