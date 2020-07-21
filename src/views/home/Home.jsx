import React from 'react'
import { Link } from 'react-router-dom';
import { MENU } from '../../constants/routes';
import HeartSpinner from '../../components/ui/HeartSpinner';
import { useSelector } from 'react-redux';
// import { items } from '../../db';
//  import firebase from '../../firebase/firebase';
import {motion } from 'framer-motion';


const Home = () =>  {

    const { isLoading } = useSelector(state => ({
        isLoading: state.app.loading
    }));

    //  React.useEffect(() => {
    // //     items.forEach(item => {
    // //         const id = firebase.generateId();
    //          firebase.getItems('items');
    // //     })
    //  }, [])

    return (
        
            <>
                {isLoading ? 
                    <div className="spinner-wrapper">
                        <HeartSpinner/>
                    </div>
                : 
                (<div className="home">
                    <div className="overlay"></div>
                    <motion.h2 
                        initial={{scale: 0}}
                        animate={{scale: 1}}
                        transition={{ease: "linear", duration: 0.5, delay: 1.2}}
                        className="brand"
                    >Jagaimo</motion.h2>
                    <div className="home-text">
                        <motion.h1 
                            initial={{y: -100, opacity: 0}}
                            animate={{y: 0, opacity: 1}}
                            transition={{ease: "linear", duration: 0.5, delay: 1}}
                            className="mb-5"
                        >Less waiting <br/> more eating</motion.h1>
                        <motion.div
                            initial={{y: 100, opacity: 0}}
                            animate={{y: 0, opacity: 1}}
                            transition={{ease: "linear", duration: 0.5, delay: 1}}
                        >
                        <Link 
                            to={MENU} 
                            className="main-btn"
                        >Eplore Menu</Link>
                        </motion.div>
                    </div>
                    <div className="social-icons">
                        <i className="fab fa-facebook-f"></i>
                        <i className="fab fa-twitter"></i>
                        <i className="fab fa-instagram"></i>
                    </div>
                </div>)
            }
            </>
        
        
    )
}


export default Home;
