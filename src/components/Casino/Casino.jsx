import { useEffect, useState } from "react";  
import Loader from "../Loader/Loader";  

function Casino({ link }) {  
    const [count, setCount] = useState(5);  
    const [visits, setVisits] = useState(null);  

    useEffect(() => {  
        const API_URL = "https://api.jsonbin.io/v3/b/6754a2d2ad19ca34f8d74471";  
        const API_KEY = "$2a$10$PvH8tIjkRk/gfW3h1uziKOVeQJVQiEdENDICCBHbg8nwkuASpqlVG";  
        fetch(API_URL, {  
            headers: {  
                "X-Master-Key": API_KEY,  
            },  
        })  
            .then((response) => response.json())  
            .then((data) => {  
                const currentVisits = data.record.visits;  
                setVisits(currentVisits);  

                fetch(API_URL, {  
                    method: "PUT",  
                    headers: {  
                        "Content-Type": "application/json",  
                        "X-Master-Key": API_KEY,  
                    },  
                    body: JSON.stringify({ visits: currentVisits + 1 }),  
                });  
            })  
            .catch((error) => console.error("Ошибка при работе с API:", error));  
    }, []);  

    useEffect(() => {  
        const countdownTimer = setTimeout(() => {  
            if (count > 0) {  
                setCount((prevCount) => prevCount - 1);  
            }  
        }, 1000);  

        if (count === 0) {  
            const redirectTimer = setTimeout(() => {  
                window.location.href = link;  
            }, 3000);  

            return () => clearTimeout(redirectTimer);  
        }  

        return () => clearTimeout(countdownTimer);  
    }, [count, link]);  

    return (  
        <div className="min-h-screen w-full flex flex-col items-center justify-center p-4">  
            {/* Первая карточка с таймером */}  
            <div className="bg-blue-600 bg-opacity-90 backdrop-blur-lg rounded-xl p-8 shadow-2xl mb-6 w-full max-w-md border border-blue-400">  
                <h2 className="text-3xl font-bold text-white text-center mb-4">  
                    Search Casino - {count} sec.  
                </h2>  
                {count === 0 && (  
                    <p className="text-emerald-300 text-center text-lg font-semibold animate-pulse">  
                        Зеркало найдено! Перенаправление...  
                    </p>  
                )}  
            </div>  
            
            {/* Карточка с количеством переходов */}  
            {visits !== null && (  
                <div className="bg-purple-600 bg-opacity-90 backdrop-blur-lg rounded-xl p-6 shadow-2xl mb-6 w-full max-w-md border border-purple-400">  
                    <p className="text-white text-center text-lg font-medium">  
                        Всего переходов: <span className="font-bold">{visits}</span>  
                    </p>  
                </div>  
            )}  
            
            {/* Карточка с лоадером */}  
            <div className="bg-indigo-600 bg-opacity-90 backdrop-blur-lg rounded-xl p-8 shadow-2xl w-full max-w-md flex justify-center border border-indigo-400">  
                <Loader />  
            </div>  
        </div>  
    );  
}  

export default Casino;