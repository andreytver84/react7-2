import Article from './Article';
import Video from './Video';
import withPopularity from './withPopularity';

export default function List(props) {

    const PopularArticle = withPopularity(Article);
    const PopularVideo = withPopularity(Video);

    return props.list.map(item => {
        switch (item.type) {
          case 'video':
            return (
              <PopularVideo {...item} />
            );
    
          case 'article':
            return (
              <PopularArticle {...item} />
            );
        }
    });
};