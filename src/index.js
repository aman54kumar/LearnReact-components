import React from 'react';
import ReachDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail'
import ApprovalCard from './ApprovalCard'

const App = () => {
    return (
        <div className="ui container comments">
            <ApprovalCard> 
                <CommentDetail author="Sam" timeAgo="2 days ago" content="Nice" avatar={faker.image.avatar()} />
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail author="Alex" timeAgo="yesterday" content="Good" avatar={faker.image.avatar()}/>
            </ApprovalCard>
            <ApprovalCard>    
                <CommentDetail author="Jane" timeAgo="today" content="Awesome" avatar={faker.image.avatar()}/>
            </ApprovalCard>
        </div>
    )
};

ReachDOM.render( < App / > , document.querySelector('#root'));