import React from "react";
import { Link } from "react-router";
import Footer from "../components/layout/Footer";
import Nav from "../components/layout/Nav";

export default class Layout extends React.Component {
   nagative(com, link) {
      var lay = Layout.getLayout(com);
      lay.props.history.pushState(null, link);
   }

   static getLayout(com) {
      var parentElem = com._reactInternalInstance._currentElement._owner._instance;
      var name = parentElem.__proto__.constructor.name;
      if (name == "RoutingContext") {
         return com;
      }
      if (name == "Layout") {
         return parentElem;
      } else {
         return getLayout(parentElem);
      }
   }

   render() {
      const { location } = this.props;
      const containerStyle = {
         marginTop: "60px"
      };

      console.log("layout");
      return (
         <div>
            <Nav location={location}  nagative={this.nagative}/>
            <div class="container" style={containerStyle}>
               <div class="row">
                  <div class="col-lg-12">
                     <h1>Layout template</h1>
                     {this.props.children}
                     <ul>
                        <li><Link to="archives">archives</Link></li>
                        <li><Link to="settings">settings</Link></li>
                        <li>
                           <button onClick={(e) => this.nagative(this, "/")}>Featured</button>
                        </li>
                     </ul>
                  </div>
               </div>
               <Footer />
            </div>
         </div>

      );
   }
}
