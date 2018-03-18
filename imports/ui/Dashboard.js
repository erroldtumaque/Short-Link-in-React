import React from 'react';
import { withRouter } from 'react-router-dom';

import { LinkDB } from '../api/linkDB';
import LinksList from './LinksList';
import PrivateHeader from './PrivateHeader';
import AddLink from './AddLink';


export default () => {
  return (
    <div>
    <PrivateHeader title="Your Links"/>
    <LinksList/>
    <AddLink/>
  </div>
  )
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
