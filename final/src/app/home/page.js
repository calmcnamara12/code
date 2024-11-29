"use client"
import { useState } from "react";
import Nav from "../nav";
import SearchComponent from '../search/page';
import ShowCourseComponent from '../search/showcoursecomponet';
import UserCartComponent from '../search/usercartcomponent';
import './app.css'
//import './App.css'





export default function Base() {
    const [courses, setCourses] = useState([
        { id: 1, 
        name: 'Math Book', 
        price: 125, 
        description:"math details",
        image: 
'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT767RSm_3VZKb0bWMmeTdqWhmFbkf6mGmbxQ&s'
        },
        { id: 2, 
        name: 'History Book', 
        description:"History details",
        price: 80, 
        image: 
'https://media.wired.com/photos/5926f79caf95806129f51367/master/pass/GettyImages-532456845.jpg'
        },
        { id: 3, 
        name: 'Science Book',
        description:"Science details", 
        price: 330, 
        image: 
'https://bennewmark.wordpress.com/wp-content/uploads/2017/12/textbooks.png'
        }
    ]);

    const [cartCourses, setCartCourses] = useState([]);
    const [searchCourse, setSearchCourse] = useState('');


    const addCourseToCartFunction = (GFGcourse) => {
        const alreadyCourses = cartCourses
                            .find(item => item.product.id === GFGcourse.id);
        if (alreadyCourses) {
            
            const latestCartUpdate = cartCourses.map(item =>
                item.product.id === GFGcourse.id ? { 
                ...item, quantity: item.quantity + 1 } 
                : item
            );
            setCartCourses(latestCartUpdate);
        } else {
            setCartCourses([...cartCourses, {product: GFGcourse, quantity: 1}]);
            
          
        }
    };
    const deleteCourseFromCartFunction = (GFGCourse) => {
        const updatedCart = cartCourses
                            .filter(item => item.product.id !== GFGCourse.id);
        setCartCourses(updatedCart);
    };

    const totalAmountCalculationFunction = () => {
        return cartCourses
            .reduce((total, item) => 
                        total + item.product.price * item.quantity, 0);
    };

    const courseSearchUserFunction = (event) => {
        setSearchCourse(event.target.value);
    };

    const filterCourseFunction = courses.filter((course) =>
        course.name.toLowerCase().includes(searchCourse.toLowerCase())
    );

    return (
        <div className="App">
            <Nav/>
        <SearchComponent searchCourse={searchCourse} 
                        courseSearchUserFunction=
                            {courseSearchUserFunction}
                            />
        <main className="App-main">
            <ShowCourseComponent
                courses={courses}
                filterCourseFunction={filterCourseFunction}
                addCourseToCartFunction={addCourseToCartFunction}
            />

            <UserCartComponent
                cartCourses={cartCourses}
                deleteCourseFromCartFunction={deleteCourseFromCartFunction}
                totalAmountCalculationFunction={
                    totalAmountCalculationFunction
                }
                setCartCourses={setCartCourses}
                needbutton={true}
            />
        </main>
    </div>
);
}

    
    
    