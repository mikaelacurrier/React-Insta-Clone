import React from 'react';
import Comment from '../../CommentSection/components/Comment';

const Container = props => {
    return ( 
        <div>
            {props.data.map((item, index) => {
                return (
                    <div 
                    class="postContainer"
                    key={index}>
                        <div class="postHeader">
                            <img src={item.thumbnailUrl} />
                            {item.username}
                        </div>
                        <div class="postBody">
                            <img src={item.imageUrl} />
                        </div>
                        372 likes
                        <Comment comment={item}/>
                    </div> 
                )
            })}
        </div> );
}
 
export default Container;