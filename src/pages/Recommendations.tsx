import React from 'react';
import './Recommendations.css';
import chrisProfilePic from '../images/chris.jpg';

const Recommendations: React.FC = () => {
  return (
    <div className='timeline-container'>
      <div className="recommendation-card">
        <div className="recommendation-header">
          <img src={chrisProfilePic} alt="Yunus Yılmaz" className="profile-pic" />
          <div>
            <h3>Yunus Yılmaz</h3>
            <p>Senior Software Developer @ Trendyol</p>
            <p className="date">March 18, 2024</p>
          </div>
        </div>
        <div className="recommendation-body">
          <p>✨ "Enes ile birlikte çalışmak gerçekten harika bir deneyimdi. Teknik becerileri ve kaliteli çözümler üretme konusundaki kararlılığı projelerimize büyük katkı sağladı."</p>
          <p>Birlikte çalıştığımız süre boyunca, Enes özellikle React ve mobil geliştirme konularında güçlü teknik uzmanlık gösterdi. Problem çözme konusundaki tutkusu ve yeni teknolojileri öğrenme istekliliği ekibimizin başarısına önemli katkılar sağladı.</p>
          <p>💼 "Enes aynı zamanda mükemmel takım çalışması ve iletişim becerileri gösterdi, farklı ekiplerle etkili bir şekilde işbirliği yaptı. Profesyonelliği ve pozitif tutumu onunla çalışmayı keyifli hale getirdi."</p>
          <p>🌟 "Enes'in herhangi bir organizasyona değerli katkılar sağlayacağından şüphem yok ve gelecekteki fırsatlar için onu içtenlikle tavsiye ediyorum."</p>
        </div>
      </div>
    </div>
  );
};

export default Recommendations;
