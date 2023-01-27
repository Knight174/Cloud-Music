import PlayListItem from "./PlayListItem";
import PropTypes from "prop-types";

export default function PlayList({ musicList, state }) {
  return (
    <ul className="row">
      {musicList.length
        ? musicList.map((item) => (
            <li
              key={item.id}
              className="col-xl-3 col-lg-4 col-md-6 col-sm-12 col-xs-12 my-2"
            >
              <PlayListItem item={item} />
            </li>
          ))
        : null}
      {!musicList.length && <p className={`text-center ${state}`}>{state}</p>}
    </ul>
  );
}

PlayList.propTypes = {
  musicList: PropTypes.array,
  state: PropTypes.string.isRequired,
};
