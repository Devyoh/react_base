import React from "react";
import "./footer.css";
import { Link } from "react-router-dom";

import { FaTwitter, FaInstagram, FaSnapchatGhost, FaFacebookF } from "react-icons/fa";

export default function Footer() {
  return (
    <>
      <footer className=" w-full bg-footer-radient text-white">
        <div className="text-center">
          <div className=" lg:flex sm:flex-wrap md:flex-row lg:flex-row  lg:h-48">
            <div className="basis-1/3 m-auto">
              <h2>Mes services :</h2>
              <div>
                <ul>
                  <li>
                    <p>Création de site internet</p>
                  </li>
                  <li>
                    <p>Conception de Logos</p>
                  </li>
                </ul>
              </div>
            </div>
            <div className=" flex flex-col md:basis-1/3 m-auto">
              <h2>Nos réseaux :</h2>
              <div className="flex flex-wrap justify-center md:flex-row p-4">
                <Link target="_blank" to="https://github.com/YohanFrontDev" className="relative bg-slate-700 w-10 h-10 mx-1 rounded-3xl hover:bg-teal-600">
                  <FaFacebookF className="absolute inset-2 text-2xl" />
                </Link>
                <Link target="_blank" to="https://github.com/YohanFrontDev" className="relative bg-slate-700 w-10 h-10 mx-1 rounded-3xl hover:bg-teal-600">
                  <FaTwitter className="absolute inset-2 text-2xl" />
                </Link>
                <Link target="_blank" to="https://github.com/YohanFrontDev" className="relative bg-slate-700 w-10 h-10 mx-1 rounded-3xl hover:bg-teal-600">
                  <FaInstagram className="absolute inset-2 text-2xl" />
                </Link>
                <Link target="_blank" to="https://github.com/YohanFrontDev" className="relative bg-slate-700 w-10 h-10 mx-1 rounded-3xl hover:bg-teal-600">
                  <FaSnapchatGhost className="absolute inset-2 text-2xl" />
                </Link>
              </div>
            </div>
            <div className=" flex flex-col basis-1/3 m-auto">
              <div className="title-container">
                <h2>Liens utiles :</h2>

              </div>
              <div className="flex  m-auto">
                <ul>
                  <li>
                    <Link to="/">
                      <p className=" hover:text-teal-600" >Accueil</p>
                    </Link>
                  </li>
                  <li>
                    <Link to="/menu">
                      <p className=" hover:text-teal-600" >Nos menus</p>
                    </Link>
                  </li>
                  <li>
                    <Link to="/contact">
                      <p className=" hover:text-teal-600" >Nous contacter</p>
                    </Link>
                  </li>
                  <li>
                    <Link to="/about">
                      <p className=" hover:text-teal-600" >À propos de nous </p>
                    </Link>
                  </li>
                  
                </ul>
              </div>
            </div>
          </div>
          <div className="flex flex-col py-4 justify-center">
            <p className="sm:text-xs">Mentions légales</p>
            <p className="sm:text-xs">Copyright © 2022-2023 - Tous droits réservés.</p>
          </div>
        </div>
      </footer>
    </>
  );
}
