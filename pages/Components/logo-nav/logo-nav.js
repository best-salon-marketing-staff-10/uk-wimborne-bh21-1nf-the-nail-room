import Link from "next/link";
import { changedInfo } from '/pages/core/info';

export default function LogoNav(){

    return(
        <>
            <Link href="/">
                <div className="logo-container">
                    <div className="logo">
                        <img className="logo"src={changedInfo.businessLogo} />
                    </div>
                    <div className="logo-text">
                        <div className="logo-text-1">
                            {changedInfo.businessName}
                        </div>
                        <div className="logo-text-2">
                            {changedInfo.businessAddressLevel2}, {changedInfo.businessAddressLevel3}
                        </div>
                    </div>
                </div>
            </Link>
            <style>{`
                
            `}</style>
        </>
    );
}