import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Icon } from "@iconify/react";
import CustomLink from "./CustomLink";
import ScreenInput from "./ScreenInput";
import { sideBarMenu } from "@src/constants";

function SideBar() {
  const dispatch = useDispatch();

  const collections = useSelector((state) => state.collection);

  return (
    <div className="left-side">
      <div className="side-wrapper">
        <div className="side-menu">
          {sideBarMenu.map((menu, index) => (
            <CustomLink to={menu.link} key={index}>
              <svg viewBox="0 0 512 512">
                <g xmlns="http://www.w3.org/2000/svg" fill="currentColor">
                  <path
                    d="M0 0h128v128H0zm0 0M192 0h128v128H192zm0 0M384 0h128v128H384zm0 0M0 192h128v128H0zm0 0"
                    data-original="#bfc9d1"
                  />
                </g>
                <path
                  xmlns="http://www.w3.org/2000/svg"
                  d="M192 192h128v128H192zm0 0"
                  fill="currentColor"
                  data-original="#82b1ff"
                />
                <path
                  xmlns="http://www.w3.org/2000/svg"
                  d="M384 192h128v128H384zm0 0M0 384h128v128H0zm0 0M192 384h128v128H192zm0 0M384 384h128v128H384zm0 0"
                  fill="currentColor"
                  data-original="#bfc9d1"
                />
              </svg>
              {menu.title}
            </CustomLink>
          ))}
        </div>
      </div>
    </div>
  );
}

export default SideBar;
