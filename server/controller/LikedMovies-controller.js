import myList from "../models/MyList.js";


export const likedMovie = async(req,res) => {
    try {
        const {email, data} = req.body;
        const user = await myList.findOne({email })
        
        if(user){
            const {movieLiked} = user;
            const movieAlreadyLiked = movieLiked.find(({id}) => (id === data.id))
            console.log(movieLiked);
            if(!movieAlreadyLiked){
                await movieLiked.findByIdAndUpdate(
                    user._id,
                    {
                        movieLiked : [...user.movieLiked,data]
                    },
                    {new : true}
                )
            }else{
                return res.json({ msg : "Movie already added to the liked list."});
            }
        }else{
            await myList.create({email,movieLiked});
            return res.json({ msg : "Movie added successfully."});
        }
        
    } catch (error) {
        return res.json({msg : "error while adding movie"});
    }
}


