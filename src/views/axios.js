import axios from 'axios'



export default class Api {
    //Get All Post
    static async getAllPost(){
        const res = await axios.get('/movieList');
        return res.data;
    }


    //Get Post by ID
    static async getPostById(id){
        const res = await axios.get(`/movieDetail/${id}`)
        return res.data
    }

    //Create Post
    static async addPost(post){
        const res = await axios.post('/postmovie',post)
        return res.data
    }

     //Update Post
     static async updatePost(id,post){
        const res = await axios.patch(`/${id}`,post)
        return res.data
    }

    //Delete Post by ID
    static async deletePost(id){
        const res = await axios.delete(`/${id}`)
        return res.data
    }


}