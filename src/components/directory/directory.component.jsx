import React, { Component } from "react";
import { MenuItem } from "../menu-item/menu-item.component";
import "./directory.styles.scss";

export class Directory extends Component {
  constructor(props) {
    super(props);

    this.state = {
      sections: [
        {
          title: "hats",
          imageUrl: "https://i.ibb.co/cvpntL1/hats.png",
          id: 1,
          bcolor: "pink",
        },
        {
          title: "jackets",
          imageUrl: "https://i.ibb.co/px2tCc3/jackets.png",
          id: 2,
          bcolor: "brown",
        },
        {
          title: "sneakers",
          imageUrl: "https://i.ibb.co/0jqHpnp/sneakers.png",
          id: 3,
          bcolor: "yellow",
        },
        {
          title: "women",
          imageUrl: "https://i.ibb.co/GCCdy8t/women.png",
          id: 4,
          bcolor: "gray",
          size: "large",
        },
        {
          title: "men",
          imageUrl: "https://i.ibb.co/R70vBrQ/men.png",
          id: 5,
          bcolor: "white",
          size: "large",
        },
      ],
    };
  }
  render() {
    return (
      <div className="directory-menu">
        {this.state.sections.map(({ id, title, imageUrl, bcolor, size }) => (
          <MenuItem
            key={id}
            title={title}
            image={imageUrl}
            backgroundColor={bcolor}
            size={size}
          />
        ))}
      </div>
    );
  }
}
