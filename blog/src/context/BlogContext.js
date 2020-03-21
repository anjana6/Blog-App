import React, { useReducer } from 'react';
import jsonServer from '../api/jsonServer';

const BlogContext = React.createContext();

const blogReducer = (state,action) =>{
    switch(action.type){
        case 'GET_BLOGPOST':
            return action.Payload
        case'ADD_BLOGPOST':
            return [...state,{id: Math.floor(Math.random()*99999),title:action.Payload.title,content:action.Payload.content}];
        case 'DELETE_BLOGPOST':
            return state.filter((blogPost) => blogPost.id !== action.Payload);
        case 'EDIT_BLOGPOST':
            return state.map((blogPost) =>{
                return blogPost.id === action.Payload.id ? action.Payload : blogPost;
            });
        default:
            return state;
    }
}

export const BlogProvider = ({children}) => {
    const[blogPosts,dispatch] = useReducer(blogReducer,[]);

    const getBlogPost = async () => {
        const res = await jsonServer.get('/blogposts');
        dispatch({
            type: 'GET_BLOGPOST',
            Payload:res.data
        })
    }

    const addBlogPost =async (title,content,callback) => {
        await jsonServer.post('/blogposts',{title,content});
        dispatch({
            type: 'ADD_BLOGPOST',Payload:{title,content}
        });
        if(callback)
            callback();
    };
    const deleteBlogPost =async (id) =>{
        await jsonServer.delete(`/blogposts/${id}`);
        dispatch({
            type:'DELETE_BLOGPOST',
            Payload: id
        })
    };
    const editBlogPost =async (id,title,content,callback) => {
        await jsonServer.put(`/blogposts/${id}`,{title,content})
        dispatch({
            type:'EDIT_BLOGPOST',
            Payload:{id,title,content}
        });
        if(callback)
            callback();

    }


    return <BlogContext.Provider value={{data:blogPosts, addBlogPost,deleteBlogPost,editBlogPost,getBlogPost}}>
        {children}
    </BlogContext.Provider>;
};

export default BlogContext;



// import React, { useReducer } from 'react';
// import createDataContext from './createDataContext';


// const blogReducer = (state,action) =>{
//     switch(action.type){
//         case'ADD_BLOGPOST':
//             return [...state,{title: `Blog Post #${state.length+1}`}];
//         default:
//             return state;
//     }
// }

// const addBlogPost = dispatch => {
//     return () =>{
//         dispatch({type: 'ADD_BLOGPOST'});
//     };
    
// };


// export const {Context,Provider} = createDataContext(blogReducer,{addBlogPost},[]);