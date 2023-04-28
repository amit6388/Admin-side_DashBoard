import React from 'react'
import '../styles/sidebar.css'
import { Link } from 'react-router-dom'
export default function AdminSidebar({isActive}) {
  return (
    <div className={isActive?"active navigation":"navigation"}>
      
      <div className=" px-0 bg-transparent overflow-auto left">

<div className=" px-0">
    <div className=" px-3 pt-2 text-white">
        <ul className="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start" id="menu">
            <li>
                <Link to="#submenu1" data-bs-toggle="collapse" className="nav-link px-0 align-middle">
                    <i className="fs-4 bi-speedometer2"></i><span className=" text-white fs">User</span> </Link>
                <ul className="collapse  nav flex-column  " id="submenu1" data-bs-parent="#menu">
                    <li className="w-100">
                        <Link to="/add-user" className="nav-link px-0"> <span className=" text-white fs ">Add New User</span></Link>
                    </li>
                    <li>
                        <Link to="/user-list" className="nav-link px-0"> <span className=" text-white fs ">user List</span> </Link>
                    </li>
                </ul>
            </li>
            <li>
                <Link to="#submenu2" data-bs-toggle="collapse" className="nav-link px-0 align-middle ">
                    <i className="fs-4 bi-bootstrap"></i> <span className="text-white fs  ">My Car</span></Link>
                <ul className="collapse nav flex-column  " id="submenu2" data-bs-parent="#menu">
                    <li className="w-100">
                        <Link to="/add-car" className="nav-link px-0"> <span className=" text-white fs ">Add New Car</span></Link>
                    </li>
                    <li>
                        <Link to="/car-list" className="nav-link px-0"> <span className="  text-white fs">Car List</span></Link>
                    </li>
                </ul>
            </li>
            <li>
                <Link to="#submenu3" data-bs-toggle="collapse" className="nav-link px-0 align-middle ">
                    <i className="fs-4 bi-bootstrap"></i> <span className="  text-white fs">All Car</span></Link>
                <ul className="collapse nav flex-column  " id="submenu3" data-bs-parent="#menu">
                    <li className="w-100">
                        <Link to="/all-cars-list" className="nav-link px-0"> <span className="  ">All List</span></Link>
                    </li>
                </ul>
            </li>

            <li>
                <Link to="#submenu4" data-bs-toggle="collapse" className="nav-link px-0 align-middle ">
                    <i className="fs-4 bi-bootstrap"></i> <span className=" text-white fs ">Vendor</span></Link>
                <ul className="collapse nav flex-column  " id="submenu4" data-bs-parent="#menu">
                    <li className="w-100">
                        <Link to="/add-vendor" className="nav-link px-0"> <span className=" text-white fs ">Add New Vendor</span></Link>
                    </li>
                    <li>
                        <Link to="/client-vendor" className="nav-link px-0"> <span className=" text-white fs ">Client Vendor</span></Link>
                    </li>
                </ul>
            </li>

            <li>
                <Link to="#submenu5" data-bs-toggle="collapse" className="nav-link px-0 align-middle ">
                    <i className="fs-4 bi-bootstrap"></i> <span className=" text-white fs ">Booking</span></Link>
                <ul className="collapse nav flex-column  " id="submenu5" data-bs-parent="#menu">
                    <li className="w-100">
                        <Link to="/new-booking" className="nav-link px-0"> <span className=" text-white fs ">New Booking</span></Link>
                    </li>
                    <li>
                        <Link to="#" className="nav-link px-0"> <span className=" text-white fs ">Complete Booking</span></Link>
                    </li>
                    <li>
                        <Link to="#" className="nav-link px-0"> <span className="  text-white fs">Cancel Booking</span></Link>
                    </li>
                </ul>
            </li>

            <li>
                <Link to="#submenu6" data-bs-toggle="collapse" className="nav-link px-0 align-middle">
                    <i className="fs-4 bi-grid"></i> <span className=" text-white fs ">Driver</span> </Link>
                <ul className="collapse nav flex-column  " id="submenu6" data-bs-parent="#menu">
                    <li className="w-100">
                        <Link to="/add-driver" className="nav-link px-0"> <span className=" text-white fs ">Add Driver</span></Link>
                    </li>
                    <li>
                        <Link to="/driver-list" className="nav-link px-0"> <span className=" text-white fs ">Driver List</span></Link>
                    </li>
                    <li>
                        <Link to="#" className="nav-link px-0"> <span className="  ">Driver Request</span></Link>
                    </li>
                    <li>
                        <Link to="driver-id-card" className="nav-link px-0"> <span className=" text-white fs ">Driver ID Card</span></Link>
                    </li>
                </ul>
            </li>
            <li>
                <Link to="#submenu7" data-bs-toggle="collapse" className="nav-link px-0 align-middle ">
                    <i className="fs-4 bi-bootstrap"></i> <span className="text-white fs  ">Payment</span></Link>
                <ul className="collapse nav flex-column  " id="submenu7" data-bs-parent="#menu">
                    <li className="w-100">
                        <Link to="#" className="nav-link px-0"> <span className=" text-white fs ">Payment</span></Link>
                    </li>
                    <li>
                        <Link to="#" className="nav-link px-0"> <span className=" text-white fs ">Vendor Payment</span></Link>
                    </li>
                </ul>
            </li>

            <li>
                <Link to="#submenu8" data-bs-toggle="collapse" className="nav-link px-0 align-middle ">
                    <i className="fs-4 bi-bootstrap"></i> <span className=" text-white fs ">Blog</span></Link>
                <ul className="collapse nav flex-column  " id="submenu8" data-bs-parent="#menu">
                    <li className="w-100">
                        <Link to="/add-blog" className="nav-link px-0"> <span className="  text-white fs">Add Blog</span></Link>
                    </li>
                    <li>
                        <Link to="/blog-list" className="nav-link px-0"> <span className="  text-white fs">Blog List</span></Link>
                    </li>
                </ul>
            </li>

            <li>
                <Link to="#submenu9" data-bs-toggle="collapse" className="nav-link px-0 align-middle ">
                    <i className="fs-4 bi-bootstrap"></i> <span className=" text-white fs ">Testimonial</span></Link>
                <ul className="collapse nav flex-column  " id="submenu9" data-bs-parent="#menu">
                    <li className="w-100">
                        <Link to="#" className="nav-link px-0"> <span className=" text-white fs ">Add Testimonial</span></Link>
                    </li>
                    <li>
                        <Link to="#" className="nav-link px-0"> <span className=" text-white fs ">Testimonial Data</span></Link>
                    </li>
                </ul>
            </li>

            <li>
                <Link to="#submenu10" data-bs-toggle="collapse" className="nav-link px-0 align-middle ">
                    <i className="fs-4 bi-bootstrap"></i> <span className=" text-white fs ">Category</span></Link>
                <ul className="collapse nav flex-column  " id="submenu10" data-bs-parent="#menu">
                    <li className="w-100">
                        <Link to="/add-category" className="nav-link px-0"> <span className=" text-white fs ">Add Category</span></Link>
                    </li>
                    <li>
                        <Link to="#" className="nav-link px-0"> <span className=" text-white fs ">Add Services</span></Link>
                    </li>
                </ul>
            </li>

            <li>
                <Link to="#submenu11" data-bs-toggle="collapse" className="nav-link px-0 align-middle ">
                    <i className="fs-4 bi-bootstrap"></i> <span className=" text-white fs ">Web Setting</span></Link>
                <ul className="collapse nav flex-column  " id="submenu11" data-bs-parent="#menu">
                    <li className="w-100">
                        <Link to="#" className="nav-link px-0"> <span className=" text-white fs ">Terms Page</span></Link>
                    </li>
                    <li>
                        <Link to="#" className="nav-link px-0"> <span className=" text-white fs ">Policy Page</span></Link>
                    </li>
                    <li>
                        <Link to="#" className="nav-link px-0"> <span className=" text-white fs ">FAQ Page</span></Link>
                    </li>
                    <li>
                        <Link to="#" className="nav-link px-0"> <span className=" text-white fs ">Disclaimer Page</span></Link>
                    </li>
                    <li>
                        <Link to="#" className="nav-link px-0"> <span className=" text-white fs ">About Page</span></Link>
                    </li>
                    <li>
                        <Link to="#" className="nav-link px-0"> <span className=" text-white fs ">Contact Details</span></Link>
                    </li>
                    <li>
                        <Link to="#" className="nav-link px-0"> <span className=" text-white fs ">SEO (Meta)</span></Link>
                    </li>
                    <li>
                        <Link to="#" className="nav-link px-0"> <span className=" text-white fs ">SEO (Meta) List</span></Link>
                    </li>
                    <li>
                        <Link to="#" className="nav-link px-0"> <span className=" text-white fs ">SEO (Keyword)</span></Link>
                    </li>
                    <li>
                        <Link to="#" className="nav-link px-0"> <span className=" text-white fs ">SEO (Keyword) List</span></Link>
                    </li>
                </ul>
            </li>

            <li>
                <Link to="#submenu12" data-bs-toggle="collapse" className="nav-link px-0 align-middle ">
                    <i className="fs-4 bi-bootstrap"></i> <span className="  ">Package</span></Link>
                <ul className="collapse nav flex-column  " id="submenu12" data-bs-parent="#menu">
                    <li className="w-100">
                        <Link to="/create-package" className="nav-link px-0"> <span className=" text-white fs">Create Package</span></Link>
                    </li>
                    <li>
                        <Link to="/package-list" className="nav-link px-0"> <span className=" text-white fs">Package List</span></Link>
                    </li>
                </ul>
            </li>

        </ul>
    </div>
</div>
</div>
      
    </div>
  )
}
