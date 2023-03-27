import React from 'react';
import axios from 'axios'
import { useEffect, useState } from 'react';
import { Spinner } from 'react-bootstrap';

const Home = (props) => {
    const [users, setusers] = useState([]);
    const [results, setresults] = useState([]);
    const [loading, setloading] = useState(false);
    const [page, setpage] = useState(1);

    useEffect(() => {
        const isLoggedin = localStorage.getItem('isLoggedin')
        if (isLoggedin === 'false') {
            props.history.push('/login')
        }
    }, [props.history]);

    useEffect(() => {
        axios.get('https://randomuser.me/api/?results=500')
            .then((res) => {
                setresults(res.data.results)
                setusers(res.data.results.filter((a, i) => i < 14))
            }
            )
    }, []);

    useEffect(() => {
        if (page !== 1) {
            setloading(true)
            setTimeout(() => {
                const res = results.filter((a, i) => i > page - 1 * 14 && i < page * 14)
                setusers([...users, ...res])
            }, 1000);
        }
    }, [page]);

    function handleScroll() {
        if (window.innerHeight + document.documentElement.scrollTop < (document.documentElement.offsetHeight - 50)) return;
        setpage(page + 1)
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className="container">
            <button className='btn btn-danger' style={{ width: '10%', marginTop: '10px', float: 'right' }} onClick={() => { localStorage.setItem('isLoggedin', false); props.history.push('/login') }}>Logout</button>
            {users.map((user, i) => <div className="row justify-content-center mt-5" key={i}>
                <div className="col-md-6">
                    <div className="card">
                        <p>{user?.name?.title + '  ' + user?.name?.first + '  ' + user?.name?.last}</p>
                    </div>
                </div>
                <div className="col-md-6">
                    <img className="img-circle" src={user?.picture?.thumbnail} height="50px" width="50px" alt="img`" />
                </div>
            </div>)}
            {loading && <center >
                <Spinner animation="grow" />
                <p style={{ fontSize: '14px' }}>Loading more ..</p>
            </center>}
        </div>
    );
};

export default Home;