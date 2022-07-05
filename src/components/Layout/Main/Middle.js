import PostCreator from "../../Make_Post/Post_Creator";
import MyDays from "../../My_Days/MyDays";
import Room from '../../Personal_Room/index'
import Post from "../../PostCard";

const Middle = () => {
    return (
        <div className="max-w-middleMaxWidth mx-auto">
            <section className="md:max-w-mdMaxWidth lg:max-w-lgMaxWidth mx-auto mt-[4.8rem] px-[2rem]">
                <MyDays />
                <PostCreator />
                <Room />
                <Post />
                <Post />
                <Post />
            </section>
        </div>
    )
}

export default Middle