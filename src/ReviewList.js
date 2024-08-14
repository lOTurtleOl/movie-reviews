import React from 'react';
import Review from './Review';


export default function ReviewList(props) {
    const {reviews } = props;

    return (
        <div className="container text-center mt-3">
            <h4 className="text-center">Reviews:</h4>
            <ul className="row">
                {reviews.map((review, index) => (
                    <Review key={index} text={review} />
                ))}
            </ul>
        </div>
    );
}







// export default class ReviewList extends React.Component {
//     constructor(props) {
//         super(props);
//         let reviews = this.reviews;
//     }
//     render() {
//         return(
//             <div className="container text-center">
//                     <div className="row">
//                         <div className="col">
//                             <Review />
//                         </div>
//                         <div className="col">
//                             <Review />
//                         </div>
//                         <div className="col">
//                             <Review />
//                         </div>
//                     </div>                    
//                 </div>
//         )
//     }
// }