import React,{useContext} from 'react';
import BlogContext from '../context/BlogContext';
import BlogPostForm from '../components/BlogPostForm';

const EditScreen = ({route,navigation}) => {
    const {id} = route.params;
    const {data,editBlogPost} = useContext(BlogContext);

    const blogPost = data.find((blogPost) => blogPost.id === id);

    return <BlogPostForm 
        initialValues = {{title:blogPost.title,content:blogPost.content}} 
    onSubmit={(title,content) => editBlogPost(id,title,content,() => navigation.pop()) }/>
}

export default EditScreen;
