import React from "react";
import MenuItem from "../menu-item/menu-item.component";
import "./directory.styles.scss";

class Directory extends React.Component {
  constructor() {
    super();

    this.state = {
      sections: [
        {
          title: "SỰ KIỆN",
          imageUrl:
            "https://images8.alphacoders.com/115/thumb-1920-1156676.jpg",
          id: 1,
          linkUrl: "news/events",
          subtitle: "Thông tin về các sự kiện...",
        },
        {
          title: "GIẢI ĐẤU",
          imageUrl:
            "https://images3.alphacoders.com/118/thumb-1920-1187697.png",
          id: 2,
          linkUrl: "news/tournaments",
          subtitle: "Thông tin về các giải đấu...",
        },
        {
          title: "VIDEO HIGHLIGHT",
          imageUrl:
            "https://images6.alphacoders.com/114/thumb-1920-1142244.jpg",
          id: 3,
          linkUrl: "news/videos",
          subtitle: "Thông tin về những loạt video giải trí...",
        },
        {
          title: "KHUYẾN MÃI",
          imageUrl: "https://images4.alphacoders.com/600/thumb-1920-600528.png",
          size: "large",
          id: 4,
          linkUrl: "news/promotions",
          subtitle: "Thông tin về khuyến mãi nạp thẻ...",
        },
        {
          title: "THAY ĐỔI CẬP NHẬT",
          imageUrl: "https://images8.alphacoders.com/657/thumb-1920-657974.jpg",
          size: "large",
          id: 5,
          linkUrl: "news/updates",
          subtitle: "Thông tin về bản cập nhật...",
        },
      ],
    };
  }
  render() {
    return (
      <div className="directory-menu">
        {this.state.sections.map(({ id, ...otherSectionProps }) => (
          <MenuItem key={id} {...otherSectionProps} />
        ))}
      </div>
    );
  }
}
export default Directory;
