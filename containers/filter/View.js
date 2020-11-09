import React from 'react'
import Vector from 'next/image'
export default function FilterView() {
    return (
        <div>
            <header className='header'>
            <div className='header-inner'>
                <div className='header-desktop'>
                    <div className='header-list-navigation'>
                        <ul className='header-list'>
                            <a href=''><li className='header-list-element'>Магазины</li></a>
                            <a href=''><li className='header-list-goods-element'>Товары</li></a> 
                            <a href=''><li className='header-list-element'>Остальное</li></a> 
                        </ul>
                    </div>
                    <div className='header-list-registration'>
                        <ul className='header-list'>
                            <a href=''><li className='header-list-element'>Вход</li></a> 
                            <a href=''><li className='header-list-registration-element'>Регистрация</li></a>  
                        </ul>
                    </div>  
                </div>
            </div>
            </header>
            <div className='main-wrapper'>
                <div className='main-wrapper-positioning'> 
                    <div className='main-menu'>
                        <div className='categories-and-popular'>
                        <a href=''><div className='categories'>
                                <span className='caregories-name'>Категории</span>
                                    <a href=''><div className='list-icon'>
                                    <div className='top-line'></div>
                                    <div className='middle-line'></div>
                                    <div className='bottom-line'></div>
                                    </div></a>
                            </div></a>
                            <a href=''><div className='popular'>
                                <span className='popular-text'>Популярные</span>
                                <a href=''><p><i className="arrow-down"></i></p></a>
                            </div></a>
                        </div>
                        <div>
                            <input type="search" placeholder='Поиск по названию' className='search-field'/>
                        </div>
                    </div>
                    <div className='err-text'>
                        <p className='error'>Ошибка.</p>
                        <p className='not-find'>По вашему запросу ничего не найдено.</p>
                    </div>
                </div>
            </div>
        </div>  
    );
}