import React from 'react';


const Article = (props) => {
    console.log(props);
    

    return (  

        <div>
            <h2>{ props.id}.{props.title} </h2>
        </div>
    );
};

export default Article;