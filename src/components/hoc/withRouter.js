import React from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';

export const withRouter = (Component) => {
   function ComponentWithRouterProp(props) {
      let location = useLocation();
      let navigate = useNavigate();
      let params = useParams();
      return (
         <Component
            {...props}
            router={{ location, navigate, params }}
         />
      );
   }
   return ComponentWithRouterProp;
}

// export function withRouter(Children) {
//    return (props) => {

//       const match = { params: useParams() };
//       return <Children {...props} match={match} />
//    }
// }