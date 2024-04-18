import Button1 from '../buttons/button-1.js';
import TimeSchedule from '/pages/Components/time-schedule/time-schedule.js';
import Location from '/pages/Components/location/location';
import CustomerReview from '/pages/Components/customer-review.js';
import DongVien1 from '/pages/Components/dong-vien/dong-vien-1.js';
import DongVien2 from '/pages/Components/dong-vien/dong-vien-2.js';
import DongVien3 from '/pages/Components/dong-vien/dong-vien-3.js';
import Service1 from '/pages/services/service-1.js';
import Service2 from '/pages/services/service-2.js';
import Service3 from '/pages/services/service-3.js';
import Service4 from '/pages/services/service-4.js';
import Service5 from '/pages/services/service-5.js';
import Service6 from '/pages/services/service-6.js';
import Service7 from '/pages/services/service-7';
import NhanManh1 from '/pages/Components/dong-vien/nhan-manh-1';
import NhanManh2 from '/pages/Components/dong-vien/nhan-manh-2';
import NhanManh3 from '/pages/Components/dong-vien/nhan-manh-3';
import NhanManh4 from '/pages/Components/dong-vien/nhan-manh-4';
import Offers from '/pages/Components/offers/offers';
import { imageAlt } from '/pages/core/info';
import { pageContent } from '/pages/core/info';
import { images } from '/pages/core/info';

export default function DesktopContent(){
    return(
        <>
            <div className="desktop-content">

                <div className="first-screen-block">
                    <img className="first-screen-block-anh" alt={imageAlt.desktopCarouselImage1Alt} src={images.desktopCarouselImage1} />
                    <div className="first-screen-block-bottom">
                        <h1 className="first-screen-block-title">
                            {pageContent.carouselHeading}
                        </h1>
                        <div className="button">
                            <Button1 />
                        </div>
                    </div>                
                </div>
                <div className="nhan-manh-1" id="d-section-1">
                    <NhanManh1 />
                </div>
                <div>
                    <CustomerReview />
                </div>
                <div className="homepage-desktop-dong-vien">
                    <div className="dong-vien-5">
                        <NhanManh2 />
                    </div>
                    <div className="dong-vien-6">
                        <NhanManh3 />
                    </div>
                    <div className="dong-vien-7">
                        <NhanManh4 />
                    </div>
                    <div className="location-time-schedule">
                        <div className="location">
                            <Location />
                        </div>
                        <div className="time-schedule">
                            <TimeSchedule />
                        </div>
                    </div>
                </div>
                <div className="homepage-desktop-services">
                    <div className="services-list-1">
                        <div className="service-container">
                            <Service1 />
                        </div>
                    </div>
                    <div className="services-list-2">
                        <div className="service-container">
                            <Service2 />
                        </div>
                    </div>
                    <div className="services-list-3">
                        <div className="service-container">
                            <Service3 />
                        </div>
                    </div>
                    <div className="services-list-4">
                        <div className="service-container">
                            <Service4 />
                        </div>
                    </div>
                    <div className="services-list-5">
                        <div className="service-container">
                            <Service5 />
                        </div>
                    </div>
                    <div className="services-list-6">
                        <div className="service-container">
                            <Service6 />
                        </div>
                    </div>
                    <div className="services-list-7">
                        <div className="service-container">
                            <Service7 />
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}