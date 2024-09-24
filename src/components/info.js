import Image from "next/image"
import iconLink from '../app/public/link.png';
import laptop from '../app/public/laptop.png'
export default function Info() {
    return (
        <div className="info" id="info">
            <div className="info-container">
                <h1>Подробные отчёты для вас и правообладателей</h1>
                <div className=" info-block">
                    <div className="info-p">
                        <div>
                            <Image
                                src={iconLink}
                                alt="iconLink"
                            />
                        </div>
                        <p>Выручка, CTR, показы и другие <br />
                            показатели в реальном времени.</p>
                    </div>
                    <div className="info-p">
                        <div>
                            <Image
                                src={iconLink}
                                alt="iconLink"
                            />
                        </div>
                        <p>Инструменты контроля качества трафика.</p>
                    </div>
                    <div className="info-p">
                        <div>
                            <Image
                                src={iconLink}
                                alt="iconLink"
                            />
                        </div>
                        <p>Ежемесячные автоматические отчёты <br /> для каждого правообладателя.</p>
                    </div>
                </div>
                <a href="#" className="button black">Заказать звонок</a>
            </div>
            <Image
                src={laptop}
                alt="laptop"
            />
        </div>
    );

}