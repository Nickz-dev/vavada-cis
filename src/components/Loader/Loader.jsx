import React from "react";  
import { HashLoader } from "react-spinners";  

export default function Loader() {  
    return (  
        <div className="flex justify-center items-center p-4">  
            <HashLoader color={'#ffffff'} size={50} />  
        </div>  
    );  
} 