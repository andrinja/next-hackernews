import Comment from './Comment';
export default ({ comments }) => (
    // purly functional
    <React.Fragment>
        {comments.map(comment => (
            <Comment key={comment.id} comment={comment}/>
        ))}
    </React.Fragment>
)