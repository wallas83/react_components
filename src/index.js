import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';

import CommentDetail from './CommentDetail';
import AprovalCard from './AprovalCard';
const App = () => {
    return (        
    <div className="ui container comments">
        <AprovalCard>
            <div>
                <h4>
                    Warning!
                </h4>
                Are you sure you want to do this?
            </div>
        </AprovalCard>

        <AprovalCard>

            <CommentDetail 
              nameFatherComp="mario"
              timeAgo="Today at 4:45PM"
              detail="nice"
              avatar={faker.image.avatar()} 
              />
        </AprovalCard>
        <AprovalCard>
            <CommentDetail 
            nameFatherComp="emilio" 
            timeAgo="Yesterday at 12:35PM" 
            detail="awful your picture" 
            avatar={faker.image.avatar()}
            />
            </AprovalCard>
            <AprovalCard>
            <CommentDetail 
            nameFatherComp="luisa" 
            timeAgo="Today at 5:45AM" 
            detail="awesome, have a nice day"
            avatar={faker.image.avatar()}
            />
            </AprovalCard>
            <AprovalCard>
            <CommentDetail 
            nameFatherComp="maria" 
            timeAgo="Today at 10:45PM" 
            detail="good Luck!" 
            avatar={faker.image.avatar()}
            />
            </AprovalCard>
        </div>
    );
};

ReactDOM.render(<App />, document.querySelector('#root'));