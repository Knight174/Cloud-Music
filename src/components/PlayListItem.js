import PropTypes from "prop-types";
import TagBox from "./TagBox";

export default function PlayListItem({ item }) {
  const tags = item.tag.split(",");
  return (
    <div className="border rounded p-2 music-box">
      <h5>歌单名称：{item.name}</h5>
      <h6>作者：{item.creator.nickname}</h6>
      <div>
        标签：
        {tags.map((tag) => (
          <TagBox key={tag} tag={tag} />
        ))}
      </div>
      <img src={item.coverImgUrl} alt={item.name} className="img-fluid my-2" />
      <p className="mutiple-line-ellipsis" title={item.description}>
        {item.description}
      </p>
    </div>
  );
}

PlayListItem.propTypes = {
  item: PropTypes.object
};
