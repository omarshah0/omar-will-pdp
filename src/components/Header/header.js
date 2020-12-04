import React, { useState, useEffect } from "react"
import BrandLogo from "../../assets/pdpuz-logo.svg"
import EnterLogo from "../../assets/enter-logo.svg"
import "./Header.css"

function Header() {
  const [sticky, setSticky] = useState(false)

  function handleScrollEvent() {
    if (window.scrollY > 100) {
      setSticky(true)
    } else if (window.scrollY < 100) {
      setSticky(false)
    }
  }
  useEffect(() => {
    window.addEventListener("scroll", handleScrollEvent)
    return () => {
      window.removeEventListener("scroll", handleScrollEvent)
    }
  })

  return (
    <header className={`header ${sticky && "header__sticky"}`}>
      <div className="header__left">
        <div className="header__left__brandLogo">
          <BrandLogo />
        </div>
        <div className="header__left__navigation">
          <div className="hamburger__menu">
            <div className="hamburger__menu__first"></div>
            <div className="hamburger__menu__second"></div>
            <div className="hamburger__menu__third"></div>
          </div>
          <div className="header__left__navigation__item">
            <span>Kurslarimiz</span>
          </div>
        </div>
      </div>
      <div className="header__right">
        <div className="header__right__navigation">
          <div className="header__right__navigation__items">
            <span className="header__right__navigation__item">
              Biz haqimizda
            </span>
            <span className="header__right__navigation__item">Tadbirlar</span>
          </div>
        </div>
        <div className="header__right__ctaButton">
          <EnterLogo />
          <span>Kirish</span>
        </div>
      </div>
    </header>
  )
}

export default Header
