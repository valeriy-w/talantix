import Image from 'next/image';
import iconLink from '../app/public/link.png';
import balanceIcon from '../app/public/balance-icon.svg';

export default function Balance() {
  return (
    <div className="balance">
      <h1>Баланс между выручкой и удовлетворённостью пользователей</h1>
      <div className="balance-flex">
        <div className="balance-flex-block">
          <Image
            src={iconLink}
            alt="iconLink"
            width={25}
            height={25}
          />
          <h2>Частотность под контролем</h2>
          <p>Чтобы не понять NPS  и не увеличивать отток пользователей</p>
        </div>
        <div className="center-icon">

          <div className='line-block'>
            <div className='circle'></div>
            <div className='line'></div>
          </div>

          <Image className='center-icon-image'
            src={balanceIcon}
            alt="balanceIcon"
            
          />

          <div className='line-block'>
            <div className='line'></div>
            <div className='circle'></div>
          </div>

        </div>

        <div className="balance-flex-block">
          <Image
            src={iconLink}
            alt="iconLink"
            width={25}
            height={25}
          />
          <h2>Максимальная выручка</h2>
          <p>За счёт заполенения всех рекламных мест по высокой цене</p>
        </div>
      </div>
    </div>
  );
}