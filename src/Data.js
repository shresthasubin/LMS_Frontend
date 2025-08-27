import axios from 'axios'
// import { publicAPI } from './utils/config'

const res = await axios.get('https://lms-backend-5cm5.onrender.com/api/process/get')
const borrowed = res.data.data

const borrowBook = borrowed.filter(item => item.isReturned === false).length
const returnBook = borrowed.filter(item => item.isReturned === true).length
const hasData = [borrowBook + returnBook] > 0
export const pieChartData = {
    labels: hasData ? ["Returned", "Borrowed"] : ['No Books has been borrowed'],
    datasets: [
        hasData ? {
            labels: 'Circulation',
            data: [returnBook,borrowBook],
            backgroundColor: ["#4CAF50", "#FF5252"],
            hoverOffset: 2,
        }
        : {
            data: [1],
            backgroundColor: ['#313131a2']
        }
    ]
}
