const CommentCard = ({ singleComment }) => {
  return (
    <div className="flex items-center gap-3 mb-5">
      <div>
        <img
          className="rounded-full object-cover w-10 h-10"
          src={singleComment.userImage}
          alt=""
        />
      </div>
      <div>
        <p className="text-base font-bold mb-0.5">{singleComment.userName}</p>
        <p className="text-sm">{singleComment.comment}</p>
      </div>
    </div>
  );
};

export default CommentCard;
