import React, { useEffect, useState } from 'react';
import Layout from '../Layout/Layout';
import { useParams } from 'react-router-dom';
import { detailsPost } from '../ApiRequest/APIRequest';
import Loader from '../Component/Loader';
import BlogDetails from '../Component/BlogDetails';

const DetailsPage = () => {

    let {postID}=useParams()
    let {details,setDetails}=useState(null)

    useEffect(()=>{
        (async()=>{
            let res=await detailsPost(postID)
            console.log(res)
            setDetails(res)
        })()
    },[postID])

    return (
        <div>
            <Layout>
                {console.log(details)}
                {details===null?<Loader></Loader>:<BlogDetails details={details}></BlogDetails>}
            </Layout>
        </div>
    );
};

export default DetailsPage;