import TimeAgo from "timeago-react";
const FooterCard = ({ image }) => {
  return (
    <div className="card-footer text-muted d-flex justify-content-between">
      <span>{image.userId.username}</span> {"  "}
      <TimeAgo datetime={image.created_at} locale="vi" />
    </div>
  );
};

export default FooterCard;
