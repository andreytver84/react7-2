import New  from "./New";
import Popular from "./Popular";



export default function withPopularity(Component) {
    return function(props) {
      const { views } = props;
      if (views >= 1000) {
        return <Popular><Component {...props} /></Popular>;
      } else if (views <= 100) {
        return <New><Component {...props} /></New>;
      } else {
        return <Component {...props} />;
      }
    }
  }