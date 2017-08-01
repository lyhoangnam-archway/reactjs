import React from "react";

import Article from "../components/Article";

export default class Archives extends React.Component {
   render() {
      const { query } = this.props.location;
      const { params } = this.props;
      const { article } = params;
      const { date, filter } = query;

      const articles = [
         "Some Article",
         "Some Other Article",
         "Yet Another Article",
         // "Still More",
         // "Fake Article",
         // "Partial Article",
         // "American Article",
         // "Mexican Article",
      ].map((title, i) => <Article key={i} title={title} wtf={i} />);

      console.log(this.props);
      var list = articles;
      var detail = 
        <h1>Article {article} detail</h1>;

      return (
         <div>
            <h1>Articles</h1>
            {article != null ? (
               detail
            ) : (
               list
            )}

         </div>
      );
   }
}
