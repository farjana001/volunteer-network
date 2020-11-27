import React from 'react';
import { useContext } from 'react';
import { UserContext } from '../../App';
import AdminEvents from '../Pages/Admin/AdminEvents';
import Footer from './Footer';
import Header from './Header';
import HomeCard from './HomeCard';
import spinner from '../../images/spinner.gif';

const Home = () => {
    const { value1 } = useContext(UserContext);
    const [data, setData] = value1;
    const [inputData, setInputData] = useState("");
    const handleChange = (e) => {
        const getData = e.target.value;
        setInputData(getData);
    }

    const filteredData = data.filter(dt => {
        return dt.title.toLowerCase().includes(inputData.toLowerCase())
    })


    return (
        <div className="header-bg">
            <Header />
            <div className="container text-center mt-5 pt-5 ">
                <h2>I GROW BY HELPING PEOPLE IN NEED</h2>

                <div className="search my-4">
                    <form action="form-control">
                        <input
                            className='input ml-4'
                            type="text"
                            value={inputData}
                            onChange={handleChange}
                            placeholder="Search..." />
                        <button className="search-button rounded-right">Search</button>
                    </form>
                </div>

                <div className="row d-flex">
                    <div className="col row mt-4">
                        {
                            filteredData.length === 0 && <div className="my-5 spinner mx-auto"><img className="w-50" src={spinner} alt="" /></div>
                        }
                        {
                            filteredData.map(dt => <HomeCard key={dt._id} data={dt} getData={inputData} />)
                        }
                    </div>
                </div>
                <AdminEvents />
            </div>
            <Footer />
        </div>
    );
};

export default Home;