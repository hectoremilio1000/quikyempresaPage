import React from "react";
import { Button } from "antd";
import { DownOutlined } from "@ant-design/icons";
import QueueAnim from "rc-queue-anim";
import TweenOne, { TweenOneGroup } from "rc-tween-one";
import BannerAnim, { Element } from "rc-banner-anim";
import { isImg } from "./utils";
import "rc-banner-anim/assets/index.css";
import { HashLink } from "react-router-hash-link";

const { BgElement } = Element;
class Banner extends React.PureComponent {
  render() {
    const { ...props } = this.props;
    const { dataSource } = props;
    delete props.dataSource;
    delete props.isMobile;
    const childrenToRender = dataSource.BannerAnim.children.map((item, i) => {
      const elem = item.BannerElement;
      const elemClassName = elem.className;
      delete elem.className;
      const { bg, textWrapper, title, content, button } = item;

      return (
        <Element key={i.toString()} {...elem} prefixCls={elemClassName}>
          <BgElement key="bg" {...bg} />
          <QueueAnim
            type={["bottom", "top"]}
            delay={200}
            key="text"
            {...textWrapper}
          >
            <div key="logo" {...title} style={{ paddingBottom: 10 }}>
              {typeof title.children === "string" &&
              title.children.match(isImg) ? (
                <img src={title.children} width="100%" alt="img" />
              ) : (
                title.children
              )}
            </div>
            <div key="content" {...content} style={{ paddingTop: 5 }}>
              {content.children}
            </div>
            <HashLink
              to="#formContact1"
              smooth
              scroll={el => el.scrollIntoView({ behavior: "smooth" })}
            >
              <Button ghost key="button" {...button}>
                {button.children}
              </Button>
            </HashLink>
          </QueueAnim>
        </Element>
      );
    });
    return (
      <div {...props} {...dataSource.wrapper}>
        <TweenOneGroup
          key="bannerGroup"
          enter={{ opacity: 0, type: "from" }}
          leave={{ opacity: 0 }}
          component=""
        >
          <div className="banner1-wrapper" key="wrapper">
            <BannerAnim key="BannerAnim" {...dataSource.BannerAnim}>
              {childrenToRender}
            </BannerAnim>
          </div>
        </TweenOneGroup>
        <TweenOne
          animation={{
            y: "-=20",
            yoyo: true,
            repeat: -1,
            duration: 1000,
          }}
          className="banner1-icon"
          style={{ bottom: 40 }}
          key="icon"
        >
          {/* <DownOutlined 
            
          /> */}
        </TweenOne>
      </div>
    );
  }
}

export default Banner;
