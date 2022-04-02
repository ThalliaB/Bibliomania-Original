// import {useState} from 'react'

// import DatePicker from 'react-datepicker'
// import "react-datepicker/dist/react-datepicker.css";

// import styles from './Data.module.css'

// function Data({text, placeholder, key}) {

//     const [date, setDate] = useState(null)

//     const formatDateAux = (date) => {
//         var d = new Date(date),
//         month = '' + (d.getMonth() + 1),
//         day = '' + d.getDate(),
//         year = d.getFullYear();

//         return [year, month, day].join('/');
//     }

//     const formatDate = (date) => {

//         // console.log(date);

//         let formatYearMonthDay = formatDateAux(date);
//         // console.log(formatYearMonthDay);
//         return(formatYearMonthDay)
//     }

//     // formatDate(date)

//     return (
//         <div className={styles.date}>
//             <label>{text}:</label>
//             <DatePicker 
//                 selected={date} 
//                 onChange={(date) => setDate(formatDate(date))} 
//                 dateFormat = 'dd/MM/yyyy'
//                 placeholderText={placeholder}
//                 key={key}
//             />
//         </div>
//     )
// }

// export default Data