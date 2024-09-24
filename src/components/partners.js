import Image from 'next/image';

import clickWave from '../app/public/clickWave.png';
import zyphronix from '../app/public/zyphronix.png';
import nova from '../app/public/Nova.png';

export default function Partners() {
    return (
        <div className="partners-container" id='partners'>
            <div className='partners-block'>
                <div className="partners-h2">
                    <h2>
                        Наши партнеры по монетизации
                    </h2>
                </div>
                <div className="partners-logo">
                    <Image className='partners-img'
                        src={clickWave}
                        alt="clickWave"
                        width={210}
                    />
                    <Image className='partners-img'
                        src={zyphronix}
                        alt="zyphronix"
                    />
                    <Image className='partners-img'
                        src={nova}
                        alt="nova"
                    />
                </div>
            </div>
        </div>
    )

}