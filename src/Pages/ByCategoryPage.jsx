import React, { useEffect, useState } from 'react';
import Layout from './../Layout/Layout';
import { postByCategory } from '../ApiRequest/APIRequest';
import Loader from '../Component/Loader';
import BlogList from '../Component/BlogList';
import {useParams} from "react-router-dom";

const ByCategoryPage = () => {

    let {categoryID}=useParams();
    let [categoryList,setCategoryList]=useState(null);

    useEffect(()=>{
        (async()=>{
            let res=await postByCategory(categoryID);
            setCategoryList(res)
        })()
    },[categoryID])

    return (
        <div>
            <Layout>
                {categoryList===null?<Loader></Loader>:<BlogList newestList={categoryList}></BlogList>}
            </Layout>
        </div>
    );
};

export default ByCategoryPage;