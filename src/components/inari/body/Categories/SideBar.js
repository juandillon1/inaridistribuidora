import React from 'react'

export const SideBar = () => {
        setTimeout(() => {
            const btn = document.querySelector('#menu-btn');
            const menu = document.querySelector('#sidemenu');
            btn.addEventListener('click', e => {
                menu.classList.toggle("sidebar__menu-expanded");
                menu.classList.toggle("sidebar__menu-collapsed");
                document.querySelector('#sidemenu').classList.toggle('sidebar__expanded');
            });
        }, 500);
    return (
        <div id="sidemenu" className="sidebar__menu-expanded">
            {/* Header */}
            <div id="header">
                <div id="title">
                    <span>TEST Titulo</span>
                </div>
                <div id="menu-btn">
                    <div className="sidebar__btn-hamburger"></div>
                    <div className="sidebar__btn-hamburger"></div>
                    <div className="sidebar__btn-hamburger"></div>
                </div>
            </div>
            {/* PROFILE */}
            <div id="profile">
                <div id="name">
                    <span>Juan Dillon</span>
                </div>
            </div>
            {/* ITEMS */}
            <div id="menu-items">
                <div className="sidebar__item">
                    <a href="#" >
                        <div className="sidebar__icon"><img src="https://image.flaticon.com/icons/png/512/174/174295.png" width="50px" height="50px" /></div>
                        <div className="sidebar__title">Aca va un titulo</div>
                    </a>
                </div>
                <div className="sidebar__item sidebar__separator"></div>
                <div className="sidebar__item">
                    <a href="#" >
                        <div className="sidebar__icon"><img src="https://image.flaticon.com/icons/png/512/174/174295.png" width="50px" height="50px" /></div>
                        <div className="sidebar__title">Aca va un titulo</div>
                    </a>
                </div>
            </div>
        </div>
    )
}
