import { FC } from "react";
import { Link, useLocation } from "react-router-dom";
import { AppTitle, Brand, HeaderWrapper } from "./Header.styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

interface HeaderProps {}

const Header: FC<HeaderProps> = () => {
  var location = useLocation()

   function active(path: string) {
      return location.pathname === path?'active':null;
   }

   return (
      <HeaderWrapper>
         <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container">
               <Brand className="navbar-brand fs-1" href="https://cmclellen.github.io/">Craig McLellen </Brand><AppTitle className="fs-4">RAG :: Famous Speeches</AppTitle>
               <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
               </button>
               <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                  <ul className="navbar-nav">
                     <li className="nav-item">
                        <Link className={`nav-link ${active("/design")}`} to="/design">Design</Link>
                     </li>
                     <li className="nav-item">
                        <Link className="nav-link" title='cmclellen/FamousSpeeches' target='_blank' to="https://github.com/cmclellen/FamousSpeeches"><FontAwesomeIcon icon={faGithub}></FontAwesomeIcon> <span className="d-inline d-lg-none">cmclellen/FamousSpeeches</span></Link>
                     </li>
                  </ul>
               </div>
            </div>
         </nav>
      </HeaderWrapper>);
};

export default Header;
