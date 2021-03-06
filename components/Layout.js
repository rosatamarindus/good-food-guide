import Link from "next/link";
import Button from "@material-ui/core/Button";
import { Typography } from "@material-ui/core";

export const PageLink = props => (
  <Link href={`/${props.link}`}>
    <Button style={{ margin: "5px" }} variant="outlined" color="primary">
      {props.title}
    </Button>
  </Link>
);

const Navigation = () => (
  <div>
    <PageLink link="" title="Home" />
    <PageLink link="about" title="About" />
  </div>
);

const Header = () => (
  <div>
    <Link as="/">
      <a style={{ margin: "0px" }}>
        <h1>Good Food Guide</h1>
      </a>
    </Link>
    <h3>A guide to know which foods are good when you have certain disease!</h3>
    <style jsx>{`
      h1 {
        color: #4b4949;
        font-size: 2.5em;
      }
    `}</style>
  </div>
);

const Layout = props => (
  <div id="layout">
    <center>
      <Header />
      <Navigation />
    </center>
    <div id="content">{props.children}</div>
    <style jsx>{`
      #layout,
      #content {
        margin: 20px;
        padding: 20px;
      }
      color: #625f5f;
    `}</style>
    <style jsx global>
      {`
        a {
          margin: 10px;
          color: #0003ff;
        }
      `}
    </style>
  </div>
);

export default Layout;
