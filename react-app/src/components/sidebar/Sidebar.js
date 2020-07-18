import React, { useContext } from 'react';
import { PwaContext } from '../../PwaContext';
import '../sidebar/Sidebar.css'

const Sidebar = () => {
    const [pwaData] = useContext(PwaContext);
    const sidebar = pwaData?.sidebar
    
    return (
        <div className="resumx-sidebar">
           
            
                <div className="sidebar-top">
                    <div className="profile-picture">
                        <img src={sidebar?.profilePicture} alt="Shuvo"/>
                    </div>
                    <div className="profile-name" dangerouslySetInnerHTML={{ __html: sidebar?.name }}></div>
                    <p className="designation">{sidebar?.designation}</p>
                    <div className="social-links">
                        {sidebar?.socialLinks.map( (socialItem, index) => {
                            return (
                                <a href={socialItem.socialUrl} key={index}><i className={`fa ${socialItem.socialIcon}`}></i></a>
                            )
                        } )}
                    </div>
                </div>
                <div className="sidebar-buttons">
                    <a href={sidebar?.sidebarBtnOne?.BtnUrl}>
                        {sidebar?.sidebarBtnOne?.BtnText}
                        <i className={`fa ${sidebar?.sidebarBtnOne?.BtnIcon}`}></i>
                    </a>
                    <a href={sidebar?.sidebarBtnTwo?.BtnUrl}>
                        {sidebar?.sidebarBtnTwo?.BtnText}
                        <i className={`fa ${sidebar?.sidebarBtnTwo?.BtnIcon}`}></i>
                    </a>
                </div>
                
        </div>
    );
};

export default Sidebar;