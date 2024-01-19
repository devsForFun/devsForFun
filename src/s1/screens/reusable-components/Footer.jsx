import "./Footer.css";

export const Footer = () => {
  return (
    <footer>
      <p style={{ color: "white" }}>devsForFun(❤️)</p>
      <p>
        <a href="https://twitter.com/devsForFun">
          <i className="fa-brands fa-square-x-twitter space-to-right"></i>
        </a>
        <a href="https://www.linkedin.com/company/devsforfun/">
          <i className="fa-brands fa-linkedin"></i>
        </a>
      </p>
      <p>
        by
        <a href="https://gdsc.community.dev/raghu-engineering-college-visakhapatnam/"> gdscrec</a>,
        <a href="https://gdsc.community.dev/university-of-indonesia/"> gdsc.ui</a>,
        <a href="https://gdsc.community.dev/kristu-jayanti-college-bengaluru/"> gdsc.kjc</a>,
        <a href="https://gdsc.community.dev/university-of-hull/"> gdsc_hull</a>
      </p>
      <p>
        website design inspired by{" "}
        <a href="https://buildspace.so/" className="footlink">
          buildspace
        </a>
      </p>
      <p>this program is not endorsed by Google, GDSC program, or buildspace in any way</p>
    </footer>
  );
};
