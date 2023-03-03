/* eslint no-undef: 0 */
/* eslint arrow-parens: 0 */
import React from "react";
import { enquireScreen } from "enquire-js";
import { FloatingWhatsApp } from "react-floating-whatsapp-button";
import "react-floating-whatsapp-button/dist/index.css";

import Nav3 from "./Nav3";
import Banner1 from "./Banner1";
import Content0 from "./Content0";
import Content5 from "./Content5";
import Content3 from "./Content3";
import Feature5 from "./Feature5";
import Footer1 from "./Footer1";

import {
  Nav30DataSource,
  Banner10DataSource,
  Content00DataSource,
  Content50DataSource,
  Content30DataSource,
  Feature50DataSource,
  Footer10DataSource,
} from "./data.source";
import "./less/antMotionStyle.less";
import CotizaBanner from "../CotizaBanner";
import FormContact from "../FormContact";
import { Image } from "antd";

import img1 from '../components/data/img/IMG_2511.jpg';
import img2 from "../components/data/img/IMG_2514.jpg";
import img3 from "../components/data/img/IMG_2516.jpg";
import img4 from "../components/data/img/IMG_2518.jpg";
import img5 from "../components/data/img/IMG_2521.jpg";
import img6 from "../components/data/img/IMG_2524.jpg";
import img7 from "../components/data/img/IMG_2525.jpg";
import img8 from "../components/data/img/IMG_2529.jpg";
import img9 from "../components/data/img/IMG_2530.jpg";
import img10 from "../components/data/img/IMG_2532.jpg";

let isMobile;
enquireScreen(b => {
  isMobile = b;
});

const { location } = window;

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isMobile,
      show: !location.port, // 如果不是 dva 2.0 请删除
    };
  }

  componentDidMount() {
    // 适配手机屏幕;
    enquireScreen(b => {
      this.setState({ isMobile: !!b });
    });
    // dva 2.0 样式在组件渲染之后动态加载，导致滚动组件不生效；线上不影响；
    /* 如果不是 dva 2.0 请删除 start */
    if (location.port) {
      // 样式 build 时间在 200-300ms 之间;
      setTimeout(() => {
        this.setState({
          show: true,
        });
      }, 500);
    }
    /* 如果不是 dva 2.0 请删除 end */
  }

  render() {
    const children = [
      <Nav3
        id="Nav3_0"
        key="Nav3_0"
        dataSource={Nav30DataSource}
        isMobile={this.state.isMobile}
      />,
      <Banner1
        id="Banner1_0"
        key="Banner1_0"
        dataSource={Banner10DataSource}
        isMobile={this.state.isMobile}
      />,
      <Content0
        id="Content0_0"
        key="Content0_0"
        dataSource={Content00DataSource}
        isMobile={this.state.isMobile}
      />,
      <Feature5
        id="Feature5_0"
        key="Feature5_0"
        dataSource={Feature50DataSource}
        isMobile={this.state.isMobile}
      />,
      <Content5
        id="Content5_0"
        key="Content5_0"
        dataSource={Content50DataSource}
        isMobile={this.state.isMobile}
      />,
      <CotizaBanner id="cotizaBanner" key="cotizaBanner_1" />,
      <Content3
        id="Content3_0"
        key="Content3_0"
        dataSource={Content30DataSource}
        isMobile={this.state.isMobile}
      />,
      <FormContact id="FormContact" key="FormContact" />,
      <div style={{ marginBottom: 40 }}>
        <p style={{ textAlign: "center", margin: 5, fontSize: 25 }}>Oficinas</p>
        <p style={{ textAlign: "center", margin: 5 }}>
          Ubicación: Avenida Baja California 245 piso 5 interior 504, Hipodromo
          Condesa, Cuauhtémoc, Ciudad de México, México C.P. 06170
        </p>
        <div style={{ margin: 20, display:"flex", justifyContent:"space-around", flexWrap:"wrap" }}>
          <Image.PreviewGroup>
            <Image width={150} height={150} src={img1} />
            <Image width={150} height={150} src={img2} />
            <Image width={150} height={150} src={img3} />
            <Image width={150} height={150} src={img4} />
            <Image width={150} height={150} src={img5} />
            <Image width={150} height={150} src={img6} />
            <Image width={150} height={150} src={img7} />
            <Image width={150} height={150} src={img8} />
            <Image width={150} height={150} src={img9} />
            <Image width={150} height={150} src={img10} />
          </Image.PreviewGroup>
        </div>
      </div>,
      <Footer1
        id="Footer1_0"
        key="Footer1_0"
        dataSource={Footer10DataSource}
        isMobile={this.state.isMobile}
      />,
      <FloatingWhatsApp
        id="whatsApp_0"
        key="whatsApp_0"
        phone="+5215633485223"
        popupMessage="Hola, ¿cómo podemos ayudarte?"
      />,
    ];
    return (
      <div
        className="templates-wrapper"
        ref={d => {
          this.dom = d;
        }}
      >
        {/* 如果不是 dva 2.0 替换成 {children} start */}
        {this.state.show && children}
        {/* 如果不是 dva 2.0 替换成 {children} end */}
      </div>
    );
  }
}
