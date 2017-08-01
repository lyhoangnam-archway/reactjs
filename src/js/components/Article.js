import React from "react";
import { Link } from "react-router";

export default class Article extends React.Component {
   render() {
      const { title, wtf } = this.props;

      return (
         <div class="col-md-4">
            <h4>{title}</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe rem nisi accusamus error velit animi non ipsa placeat. Recusandae, suscipit, soluta quibusdam accusamus a veniam quaerat eveniet eligendi dolor consectetur.</p>
            <Link to={"archives/" + wtf} class="btn btn-default">More Info {wtf}</Link>
         </div>
      );
   }
}
