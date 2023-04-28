import React from "react";
 import '../styles/nav.css'
export default function AdminNav({mytog}){
    return(
        <>
        <div className="topbar">
                <div className="toggle">
                    <ion-icon name="menu-outline"  onClick={mytog}></ion-icon>
                </div>

                <div className="search">
                    <label>
                        <input type="text" placeholder="Search here"/>
                        <ion-icon name="search-outline"></ion-icon>
                    </label>
                    
                </div>


                  <div className="profile me-4">
                  <span class="dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                        Profile
                    </span>
                    <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                        <li><a class="dropdown-item" href="#"> My profile</a></li>
                        <li><a class="dropdown-item" href="#">Forget Passwod</a></li>
                        <li><a class="dropdown-item" href="#">Settings</a></li>
                        <li><a class="dropdown-item" href="#">Sign Out</a></li>
                    </ul>
                  </div>
             

                <div className="user">
                    
                    <img src="assets/imgs/customer01.jpg" alt=""/>
                </div>
            </div>
        </>
    )
}