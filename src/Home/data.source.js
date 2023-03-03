import React from "react";
export const Nav30DataSource = {
  wrapper: { className: "header3 home-page-wrapper" },
  page: { className: "home-page" },
  logo: {
    className: "header3-logo",
    children:
      "https://imagenesrutalab.s3.amazonaws.com/quikyempresa/logoQuikyempresa3.png",
  },
  Menu: {
    className: "header3-menu",
    children: [
      // {
      //   name: "item0",
      //   className: "header3-item",
      //   children: {
      //     href: "/cotiza",
      //     children: [
      //       {
      //         children: (
      //           <span>
      //             <p>Cotiza</p>
      //           </span>
      //         ),
      //         name: "Cotiza",
      //       },
      //     ],
      //   },
      // },
      // {
      //   name: "item1",
      //   className: "header3-item",
      //   children: {
      //     href: "#",
      //     children: [
      //       {
      //         children: (
      //           <span>
      //             <p>公司简介</p>
      //           </span>
      //         ),
      //         name: "text",
      //       },
      //     ],
      //   },
      // },
      // {
      //   name: "item2",
      //   className: "header3-item",
      //   children: {
      //     href: "#",
      //     children: [
      //       {
      //         children: (
      //           <span>
      //             <p>回收项目</p>
      //           </span>
      //         ),
      //         name: "text",
      //       },
      //     ],
      //   },
      // },
      // {
      //   name: "item3",
      //   className: "header3-item",
      //   children: {
      //     href: "#",
      //     children: [
      //       {
      //         children: (
      //           <span>
      //             <p>成功案例</p>
      //           </span>
      //         ),
      //         name: "text",
      //       },
      //     ],
      //   },
      // },
      // {
      //   name: "item4",
      //   className: "header3-item",
      //   children: {
      //     href: "#",
      //     children: [
      //       {
      //         children: (
      //           <span>
      //             <span>
      //               <span>
      //                 <span>
      //                   <span>
      //                     <p>新闻咨询</p>
      //                   </span>
      //                 </span>
      //               </span>
      //             </span>
      //           </span>
      //         ),
      //         name: "text",
      //       },
      //     ],
      //   },
      // },
      // {
      //   name: "item5",
      //   className: "header3-item",
      //   children: {
      //     href: "#",
      //     children: [
      //       {
      //         children: (
      //           <span>
      //             <span>
      //               <span>
      //                 <p>在线留言</p>
      //               </span>
      //             </span>
      //           </span>
      //         ),
      //         name: "text",
      //       },
      //     ],
      //   },
      // },
      // {
      //   name: "item6",
      //   className: "header3-item",
      //   children: {
      //     href: "#",
      //     children: [
      //       {
      //         children: (
      //           <span>
      //             <span>
      //               <span>
      //                 <p>联系我们</p>
      //               </span>
      //             </span>
      //           </span>
      //         ),
      //         name: "text",
      //       },
      //     ],
      //   },
      // },
    ],
  },
  mobileMenu: { className: "header3-mobile-menu" },
};
export const Banner10DataSource = {
  wrapper: { className: "banner1" },
  BannerAnim: {
    children: [
      {
        name: "elem0",
        BannerElement: { className: "banner-user-elem" },
        textWrapper: { className: "banner1-text-wrapper" },
        bg: { className: "bg bg0" },
        title: {
          className: "banner1-title",
          children:
            "https://imagenesrutalab.s3.amazonaws.com/quikyempresa/logoQuikyempresablanco.png",
        },
        content: {
          className: "banner1-content",
          children: "Lleva tus ideas a una APP",
        },
        button: { className: "banner1-button", children: "Cotiza" },
      },
      {
        name: "elem1",
        BannerElement: { className: "banner-user-elem" },
        textWrapper: { className: "banner1-text-wrapper" },
        bg: { className: "bg bg1" },
        title: {
          className: "banner1-title",
          children:
            "https://imagenesrutalab.s3.amazonaws.com/quikyempresa/logoQuikyempresablanco.png",
        },
        content: {
          className: "banner1-content",
          children: "Confianza, seguridad y compromiso",
        },
        button: { className: "banner1-button", children: "Cotiza" },
      },
      {
        name: "elem2",
        BannerElement: { className: "banner-user-elem" },
        textWrapper: { className: "banner1-text-wrapper" },
        bg: { className: "bg bg2" },
        title: {
          className: "banner1-title",
          children:
            "https://imagenesrutalab.s3.amazonaws.com/quikyempresa/logoQuikyempresablanco.png",
        },
        content: {
          className: "banner1-content",
          children: "Obtén un presupuesto rápido y sencillo",
        },
        button: { className: "banner1-button", children: "Cotiza" },
      },
    ],
  },
};

export const Banner30DataSource = {
  wrapper: { className: "banner1" },
  BannerAnim: {
    children: [
      {
        name: "elem0",
        BannerElement: { className: "banner-user-elem" },
        textWrapper: { className: "banner1-text-wrapper" },
        bg: { className: "bg bg2" },
        title: {
          className: "banner1-title",
          children:
            "https://imagenesrutalab.s3.amazonaws.com/quikyempresa/logoQuikyempresablanco.png",
        },
        content: {
          className: "banner1-content",
          children: "Página no econtrada",
        },
        button: { className: "banner1-button", children: "Inicio" },
      },
    ],
  },
};
export const Content00DataSource = {
  wrapper: { className: "home-page-wrapper content0-wrapper" },
  page: { className: "home-page content0" },
  OverPack: { playScale: 0.3, className: "" },
  titleWrapper: {
    className: "title-wrapper",
    children: [
      {
        name: "title",
        children: (
          <span>
            <p>¿Cómo digitalizamos tus ideas en una App?</p>
          </span>
        ),
      },
    ],
  },
  childWrapper: {
    className: "content0-block-wrapper k9h76g7v2q-editor_css",
    children: [
      {
        name: "block0",
        className: "content0-block",
        md: 8,
        xs: 24,
        children: {
          className: "content0-block-item",
          children: [
            {
              name: "image",
              className: "content0-block-icon",
              children:
                "https://zos.alipayobjects.com/rmsportal/WBnVOjtIlGWbzyQivuyq.png",
            },
            {
              name: "title",
              className: "content0-block-title",
              children: (
                <span>
                  <span>
                    <span>
                      <p>{""}</p>
                    </span>
                  </span>
                </span>
              ),
            },
            {
              name: "content",
              children: (
                <span>
                  <p>Realizamos una primera propuesta con alcances</p>
                </span>
              ),
            },
          ],
        },
      },
      {
        name: "block1",
        className: "content0-block",
        md: 8,
        xs: 24,
        children: {
          className: "content0-block-item",
          children: [
            {
              name: "image",
              className: "content0-block-icon",
              children:
                "https://zos.alipayobjects.com/rmsportal/YPMsLQuCEXtuEkmXTTdk.png",
            },
            {
              name: "title",
              className: "content0-block-title",
              children: (
                <span>
                  <p>{""}</p>
                </span>
              ),
            },
            {
              name: "content",
              children: (
                <span>
                  <span>
                    <span>
                      <p>Definimos objetivos a alcanzar</p>
                    </span>
                  </span>
                </span>
              ),
            },
          ],
        },
      },
      {
        name: "block2",
        className: "content0-block",
        md: 8,
        xs: 24,
        children: {
          className: "content0-block-item",
          children: [
            {
              name: "image",
              className: "content0-block-icon",
              children:
                "https://zos.alipayobjects.com/rmsportal/EkXWVvAaFJKCzhMmQYiX.png",
            },
            {
              name: "title",
              className: "content0-block-title",
              children: (
                <span>
                  <p>{""}</p>
                </span>
              ),
            },
            {
              name: "content",
              children: (
                <span>
                  <p>Desarrollo, Lanzamiento y Acompañamiento</p>
                </span>
              ),
            },
          ],
        },
      },
      // {
      //   name: "block3",
      //   className: "content0-block",
      //   md: 8,
      //   xs: 24,
      //   children: {
      //     className: "content0-block-item",
      //     children: [
      //       {
      //         name: "image",
      //         className: "content0-block-icon",
      //         children:
      //           "https://zos.alipayobjects.com/rmsportal/EkXWVvAaFJKCzhMmQYiX.png",
      //       },
      //       {
      //         name: "title",
      //         className: "content0-block-title",
      //         children: (
      //           <span>
      //             <span>
      //               <p>工程拆除</p>
      //             </span>
      //           </span>
      //         ),
      //       },
      //       {
      //         name: "content",
      //         children: (
      //           <span>
      //             <p>Engineering dismantling</p>
      //           </span>
      //         ),
      //       },
      //     ],
      //   },
      // },
      // {
      //   name: "block4",
      //   className: "content0-block",
      //   md: 8,
      //   xs: 24,
      //   children: {
      //     className: "content0-block-item",
      //     children: [
      //       {
      //         name: "image",
      //         className: "content0-block-icon",
      //         children:
      //           "https://zos.alipayobjects.com/rmsportal/EkXWVvAaFJKCzhMmQYiX.png",
      //       },
      //       {
      //         name: "title",
      //         className: "content0-block-title",
      //         children: (
      //           <span>
      //             <span>
      //               <p>中央空调回收</p>
      //             </span>
      //           </span>
      //         ),
      //       },
      //       {
      //         name: "content",
      //         children: (
      //           <span>
      //             <p>Air conditioning recovery</p>
      //           </span>
      //         ),
      //       },
      //     ],
      //   },
      // },
    ],
  },
};
export const Content50DataSource = {
  wrapper: { className: "home-page-wrapper content5-wrapper" },
  page: { className: "home-page content5" },
  OverPack: { playScale: 0.3, className: "" },
  titleWrapper: {
    className: "title-wrapper",
    children: [
      {
        name: "title",
        children: (
          <span>
            <p>¿Cuáles son nuestros servicios?</p>
          </span>
        ),
        className: "title-h1",
      },
    ],
  },
  block: {
    className: "content5-img-wrapper",
    gutter: 16,
    children: [
      {
        name: "block0",
        className: "block",
        md: 6,
        xs: 24,
        children: {
          wrapper: { className: "content5-block-content" },
          img: {
            children:
              "http://www.parzlogic.com/wp-content/uploads/2017/10/web-dev.jpg",
          },
          content: {
            children: (
              <span className="titleServicios">
                Desarrollo de aplicaciones Web
              </span>
            ),
            children1: (
              <span className="h5Servicios">
                Con nuevos frameworks y librerías Sketch, Angular, Bootstrap,
                Webflow, React, React native, Flutter etc. desarrollamos de
                manera muy rápida, a bajos precios y con gran calidad páginas
                web responsive para diferentes tipos de industria
              </span>
            ),
          },
        },
      },
      {
        name: "block1",
        className: "block",
        md: 6,
        xs: 24,
        children: {
          wrapper: { className: "content5-block-content" },
          img: {
            children:
              "https://miro.medium.com/max/1400/1*_9b6Zt10K0cBB5vJNAhA7A.jpeg",
          },
          content: {
            children: (
              <span className="titleServicios">
                Desarrollo de aplicaciones Móviles
              </span>
            ),
            children1: (
              <span className="h5Servicios">
                A medida que los teléfonos inteligentes se convierten cada vez
                más en la plataforma central para una experiencia digital más
                amplia, los líderes empresariales aportan ideas únicas para
                crear aplicaciones móviles atractivas para los clientes. Pero
                para crear una aplicación de alto rendimiento, fácil de usar y
                rentable, es necesario seguir un enfoque estratégico. No te
                preocupes aquí te ayudamos.
              </span>
            ),
          },
        },
      },
      {
        name: "block2",
        className: "block",
        md: 6,
        xs: 24,
        children: {
          wrapper: { className: "content5-block-content" },
          img: {
            children:
              "https://nothingad.com/wp-content/uploads/2019/04/Que-es-el-posicionamiento-SEO-en-marketing-digital.jpg",
          },
          content: {
            children: (
              <span className="titleServicios">
                Marketing digital avanzado y técnicas de SEO
              </span>
            ),
            children1: (
              <span className="h5Servicios">
                Nuestro equipo utiliza herramientas estadísticas bayesianas para
                definir estrategias de marketing que apunten directamente al
                mercado objetivo. Además, implementando google analytics,
                pixels, así como funnels de facebook, sabemos exactamente que
                hacen los usuarios.
              </span>
            ),
          },
        },
      },
      {
        name: "block3",
        className: "block",
        md: 6,
        xs: 24,
        children: {
          wrapper: { className: "content5-block-content" },
          img: {
            children:
              "https://www.web-media.com.ar/uploads/imagenes/blog/lightbox_dise%C3%B1ador-ux-ui-cordoba.jpg",
          },
          content: {
            children: (
              <span className="titleServicios">
                User Experience UX y User Interface UI
              </span>
            ),
            children1: (
              <span className="h5Servicios">
                Pensamos en entornos tecnológicos aplicativos que generen alto
                valor para el usuario, pues es importante no sólo que se vea
                bien, sino que sean funcionales, vendan y que generen una gran
                experiencia al usuario.
              </span>
            ),
          },
        },
      },
      // {
      //   name: "block4",
      //   className: "block",
      //   md: 6,
      //   xs: 24,
      //   children: {
      //     wrapper: { className: "content5-block-content" },
      //     img: {
      //       children:
      //         "https://t.alipayobjects.com/images/rmsweb/T11aVgXc4eXXXXXXXX.svg",
      //     },
      //     content: { children: "Ant Design" },
      //   },
      // },
      // {
      //   name: "block5",
      //   className: "block",
      //   md: 6,
      //   xs: 24,
      //   children: {
      //     wrapper: { className: "content5-block-content" },
      //     img: {
      //       children:
      //         "https://zos.alipayobjects.com/rmsportal/faKjZtrmIbwJvVR.svg",
      //     },
      //     content: { children: "Ant Motion" },
      //   },
      // },
      // {
      //   name: "block6",
      //   className: "block",
      //   md: 6,
      //   xs: 24,
      //   children: {
      //     wrapper: { className: "content5-block-content" },
      //     img: {
      //       children:
      //         "https://t.alipayobjects.com/images/rmsweb/T11aVgXc4eXXXXXXXX.svg",
      //     },
      //     content: { children: "Ant Design" },
      //   },
      // },
      // {
      //   name: "block7",
      //   className: "block",
      //   md: 6,
      //   xs: 24,
      //   children: {
      //     wrapper: { className: "content5-block-content" },
      //     img: {
      //       children:
      //         "https://zos.alipayobjects.com/rmsportal/faKjZtrmIbwJvVR.svg",
      //     },
      //     content: { children: "Ant Motion" },
      //   },
      // },
    ],
  },
};
export const Content30DataSource = {
  wrapper: { className: "home-page-wrapper content3-wrapper" },
  page: { className: "home-page content3" },
  OverPack: { playScale: 0.3 },
  titleWrapper: {
    className: "title-wrapper",
    children: [
      {
        name: "title",
        children: (
          <span>
            <p>Por qué escogernos</p>
          </span>
        ),
        className: "title-h1",
      },
      {
        name: "content",
        className: "title-content",
        children: (
          <span>
            <span>
              <span>
                <h2>Calidad y servicio</h2>
              </span>
            </span>
          </span>
        ),
      },
    ],
  },
  block: {
    className: "content3-block-wrapper",
    children: [
      {
        name: "block0",
        className: "content3-block",
        md: 12,
        xs: 24,
        children: {
          icon: {
            className: "content3-icon",
            children:
              "https://zos.alipayobjects.com/rmsportal/ScHBSdwpTkAHZkJ.png",
          },
          textWrapper: { className: "content3-text" },
          title: {
            className: "content3-title",
            children: (
              <span>
                <span>
                  <span>
                    <p>Precios accesibles</p>
                  </span>
                </span>
              </span>
            ),
          },
          content: {
            className: "content3-content",
            children: (
              <span>
                <p>
                  Te proponemos un stack tecnológico que se ajuste a tu
                  presupuesto.
                </p>
              </span>
            ),
          },
        },
      },
      {
        name: "block1",
        className: "content3-block",
        md: 12,
        xs: 24,
        children: {
          icon: {
            className: "content3-icon",
            children:
              "https://zos.alipayobjects.com/rmsportal/NKBELAOuuKbofDD.png",
          },
          textWrapper: { className: "content3-text" },
          title: {
            className: "content3-title",
            children: (
              <span>
                <p>Pensamos en tus ventas</p>
              </span>
            ),
          },
          content: {
            className: "content3-content",
            children: (
              <span>
                <p>
                  El diseño está pensando en atraer a clientes, no sólo en verse
                  bien.
                </p>
              </span>
            ),
          },
        },
      },
      {
        name: "block2",
        className: "content3-block",
        md: 12,
        xs: 24,
        children: {
          icon: {
            className: "content3-icon",
            children:
              "https://zos.alipayobjects.com/rmsportal/xMSBjgxBhKfyMWX.png",
          },
          textWrapper: { className: "content3-text" },
          title: {
            className: "content3-title",
            children: (
              <span>
                <p>Detalles</p>
              </span>
            ),
          },
          content: {
            className: "content3-content",
            children: (
              <span>
                <p>
                  Cuidamos cada detalle en todas las etapas: diseño, desarrollo,
                  lanzamiento y acompañamiento.
                </p>
              </span>
            ),
          },
        },
      },
      {
        name: "block3",
        className: "content3-block",
        md: 12,
        xs: 24,
        children: {
          icon: {
            className: "content3-icon",
            children:
              "https://zos.alipayobjects.com/rmsportal/MNdlBNhmDBLuzqp.png",
          },
          textWrapper: { className: "content3-text" },
          title: {
            className: "content3-title",
            children: (
              <span>
                <span>
                  <p>Testing</p>
                </span>
              </span>
            ),
          },
          content: {
            className: "content3-content",
            children: (
              <span>
                <p>
                  Aquí hacemos todas las pruebas que se requieran para que te
                  sientas complacido con lo que pagaste.
                </p>
              </span>
            ),
          },
        },
      },
    ],
  },
};
export const Feature50DataSource = {
  wrapper: { className: "home-page-wrapper content7-wrapper" },
  page: { className: "home-page content7" },
  OverPack: {},
  titleWrapper: {
    className: "title-wrapper",
    children: [
      {
        name: "title",
        children: (
          <span>
            <p>Grandes productos desarrollados</p>
          </span>
        ),
        className: "title-h1",
      },
    ],
  },
  tabsWrapper: { className: "content7-tabs-wrapper" },
  block: {
    children: [
      {
        name: "block0",
        tag: {
          className: "content7-tag",
          text: {
            children: (
              <span>
                <p>Itam</p>
              </span>
            ),
            className: "content7-tag-name",
          },
          icon: { children: "mobile" },
        },
        content: {
          className: "content7-content",
          text: {
            className: "content7-text",
            md: 14,
            xs: 24,
            children: (
              <span>
                <h3>Diseño</h3>
                <p>
                  Entender las necesidades del cliente para que el diseño cumpla
                  con los estándares más altos de UX y UI
                </p>
                <br />
                <h3>Front End & Back End</h3>
                <p>Proponer desarrollo acorde al presupuesto</p>
                <br />
                <h3>Conoce nuestro trabajo</h3>
                <a href="https://relacionesinternacionales.itam.mx/es">
                  https://relacionesinternacionales.itam.mx/
                </a>
              </span>
            ),
          },
          img: {
            className: "content7-img",
            children:
              "https://imagenesrutalab.s3.amazonaws.com/quikyempresa/imageApp/itamApp2.png",
            md: 10,
            xs: 24,
          },
        },
      },
      {
        name: "block1",
        tag: {
          className: "content7-tag",
          icon: { children: "tablet" },
          text: {
            className: "content7-tag-name",
            children: (
              <span>
                <p>Spendee</p>
              </span>
            ),
          },
        },
        content: {
          className: "content7-content",
          text: {
            className: "content7-text",
            md: 14,
            xs: 24,
            children: (
              <span>
                <h3>FIGMA, SKETCH</h3>
                <p>
                  Realizamos tu diseño en tecnologías para que tengas claro qué
                  vas a recibir.
                </p>
                <br />
                <h3>Tecnologías de Punta</h3>
                <p>
                  Utlizamos las últimas tendencias en stacks de tecnología como
                  MERN o JAM.
                </p>
                <br />
                <h3>Conoce nuestro trabajo</h3>
                <a href="https://www.spendee.com/">https://www.spendee.com/</a>
              </span>
            ),
          },
          img: {
            className: "content7-img",
            md: 10,
            xs: 24,
            children:
              "https://www.spendee.com/build/images/visual-mobil@2.51eeb89e.jpg",
          },
        },
      },
    ],
  },
};
export const Footer10DataSource = {
  wrapper: { className: "home-page-wrapper footer1-wrapper" },
  OverPack: { className: "footer1", playScale: 0.2 },
  block: {
    className: "home-page",
    gutter: 0,
    children: [
      {
        name: "block0",
        xs: 24,
        md: 8,
        className: "block",
        title: {
          className: "logo",
          children:
            "https://imagenesrutalab.s3.amazonaws.com/quikyempresa/logoQuikyempresa3.png",
        },
        childWrapper: {
          className: "slogan",
          children: [
            {
              name: "content0",
              children: "Digitalizamos tus ideas en una APP",
            },
          ],
        },
      },

      // {
      //   name: "block1",
      //   xs: 24,
      //   md: 8,
      //   className: "block",
      //   title: { children: "Cotiza" },
      //   childWrapper: {
      //     children: [
      //       { href: "/cotiza", name: "link0", children: "Cotizadora" },
      //       { href: "#", name: "link1", children: "" },
      //     ],
      //   },
      // },
      {
        name: "block1",
        xs: 24,
        md: 16,
        className: "block",
        title: {
          children: (
            <span>
              <span>
                <p>Galardones</p>
              </span>
            </span>
          ),
          className: "k9h7k134cu-editor_css",
        },
        childWrapper: {
          children: [
            {
              name: "Premios obtenidos",
              className: "k9h7irl6jgj-editor_css imagenPremio",
              children:
                "https://premioentrepreneur.com/assets/images/logo-hrzt-premio.png",
            },
          ],
        },
      },
    ],
  },
  copyrightWrapper: { className: "copyright-wrapper" },
  copyrightPage: { className: "home-page" },
  copyright: {
    className: "copyright",
    children: (
    
        <span>
          ©2018 Quiky empresa Derechos Reservados email:
          <a href="mailto:support@quikyempresa.com?Subject=Quiero%20cotizar%20mi%20APP%20">
            support@quikyempresa.com
          </a>
        </span>
       
   
    ),
  },
};
