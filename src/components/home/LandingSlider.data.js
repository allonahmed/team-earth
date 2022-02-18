import { Read, Game, Donate, Solution } from "../../assets/SVGExport";
import AutoStoriesIcon from "@mui/icons-material/AutoStories";
import SportsEsportsIcon from "@mui/icons-material/SportsEsports";
import InfoIcon from "@mui/icons-material/Info";
import CommentIcon from "@mui/icons-material/Comment";

const sliderData = [
  {
    buttonContent: "Read More",
    svg: Read,
    textContent: "read more hekfndkj ekj dfkj dsk fkj",
    icon: <AutoStoriesIcon />
  },
  {
    buttonContent: "Play Now",
    svg: Game,
    textContent: "Play now hekfndkj ekj dfkj dsk fkj",
    icon: <SportsEsportsIcon />
  },
  {
    buttonContent: "See solutions",
    svg: Solution,
    textContent: "find solutions here! hekfndkj ekj dfkj dsk fkj",
    icon: <InfoIcon />
  },
  {
    buttonContent: "Go To Blog",
    svg: Donate,
    textContent: "go to blog hekfndkj ekj dfkj dsk fkj",
    icon: <CommentIcon />
  }
];

export default sliderData;
