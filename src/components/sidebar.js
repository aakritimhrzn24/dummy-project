"use client"
import { useState } from "react";


export default function sidebar(){
    const[sidebarOpen,setsidebarOpen]=useState(true);

    function toggleSidebar(){
        setsidebarOpen(!sidebarOpen)
    }
    if(sidebarOpen){
        return(
            <div className="h-full bg-green-600 w-[300px] py-2 py-2">
                <div className="flex items-center justify-between"> 
                    <h1>Name</h1>
                    <button onClick={toggleSidebar}>Close</button>
                </div>
                        <ul>
                            <li className="py-2">Home Page</li>
                            <li className="py-2">Projects</li>
                            <li className="py-2">Course</li>
                            <li className="py-2">FAQ</li>
                            <li className="py-2">Contacts</li>
                        </ul>
                      </div>
               ) 

    }
    else{
       return <button onClick={toggleSidebar}>open</button>
    }

}