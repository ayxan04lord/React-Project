// import React from "react";

// const CardForm = ({ handleOpenCard }) => {
//     const onSubmit = (evt) => {
//         evt.preventDefault();
//         const formData = new FormData(evt.target);
//         const number = formData.get('number');
//         const balance = parseFloat(formData.get('balance'));
//         const card = { number, balance };

//         handleOpenCard(card);
//         evt.target.reset();
//     };

//     return (
//         <form
//             onSubmit={onSubmit}
//             className="card"
//             style={{ width: "18rem" }}
//         >
//             <div className="card-body">
//                 <h5 className="card-title">
//                     Карта
//                     <input placeholder="XXXX XXXX XXXX XXXX" name="number" />
//                 </h5>
//                 <div className="card-text">
//                     <ul className="list-group">
//                         <input
//                             className="list-group-item"
//                             placeholder="Баланс"
//                             name="balance"
//                         />
//                         <hr />
//                         <button type="submit" className="btn btn-success">
//                             Открыть карту
//                         </button>
//                     </ul>
//                 </div>
//             </div>
//         </form>
//     );
// }

// export default CardForm;
