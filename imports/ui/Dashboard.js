import React from 'react';
import { withRouter } from 'react-router-dom';

import LinksList from './LinksList';
import PrivateHeader from './PrivateHeader';
import AddLink from './AddLink';
import LinksListFilters from './LinksListFilters';

export default () => {
  return (
    <div>
    <PrivateHeader title="Your Links"/>
    <div className="page-content">
    <LinksListFilters/>
    <AddLink/>
    <LinksList/>
  </div>
  </div>
);
};


// export default class Dashboard extends React.Component {
//   render() {
//     return (
//       <div>
//       <PrivateHeader title="Your Links"/>
//       <LinksList/>
//       <AddLink/>
//     </div>
//     );
//   }
// }
