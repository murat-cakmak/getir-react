import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa'
import {FiGlobe} from 'react-icons/fi';

export default function Footer() {


    return (
        <div className="bg-white mt-10">
            <div className="container mx-auto">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                    <section className="py-10">
                        <h3 className="text-primary-brand-color font-semibold mb-5">Getir'i indirin!</h3>
                        <nav className="flex flex-col gap-y-2">
                            <a href="#">
                                <img src="https://getir.com/_next/static/images/appstore-tr-141ed939fceebdcee96af608fa293b31.svg" alt=""/>
                            </a>
                            <a href="#">
                                <img src="https://getir.com/_next/static/images/googleplay-tr-6b0c941b7d1a65d781fb4b644498be75.svg" alt=""/>
                            </a>
                            <a href="#">
                                <img src="https://getir.com/_next/static/images/huawei-appgallery-tr-4b890fa3167bc62f9069edaf45aa7f30.svg" alt=""/>
                            </a>
                        </nav>
                    </section>
                    <section className="py-10 gap-y-3">
                        <h3  className="text-primary-brand-color font-semibold  mb-4">Getir'i keşfedin</h3>
                       <ul className="flex gap-y-3 flex-col text-sm text-gray-700">
                           <li>
                               <a href="">Hakkımızda</a>
                           </li>
                           <li>
                               <a href="">Kariyer</a>
                           </li>
                           <li>
                               <a href="">Teknoloji Kariyerleri</a>
                           </li>
                           <li>
                               <a href="">İletişim</a>
                           </li>
                           <li>
                               <a href="">COVID-19 Duyuru</a>
                           </li>
                           <li>
                               <a href="">Sosyal Sorumluluk Projeleri</a>
                           </li>
                       </ul>
                    </section>
                    <section className="py-10 gap-y-3">
                        <h3  className="text-primary-brand-color font-semibold  mb-4">Yardıma mı ihtiyacınız var?</h3>
                        <ul className="flex gap-y-3 flex-col text-sm text-gray-700">
                            <li>
                                <a href="">Sıkça Sorulan Sorular</a>
                            </li>
                            <li>
                                <a href="">Kişisel Verilerin Korunması</a>
                            </li>
                            <li>
                                <a href="">Gizlilik Politikası</a>
                            </li>
                            <li>
                                <a href="">Kullanım Koşulları</a>
                            </li>
                            <li>
                                <a href="">Çerez Politikası</a>
                            </li>
                        </ul>
                    </section>
                    <section className="py-10 gap-y-3">
                        <h3  className="text-primary-brand-color font-semibold  mb-4">İş Ortağımız Olun</h3>
                        <ul className="flex gap-y-3 flex-col text-sm text-gray-700">
                            <li>
                                <a href="">Bayimiz Olun</a>
                            </li>
                            <li>
                                <a href="">Deponuzu Kiralayın</a>
                            </li>
                            <li>
                                <a href="">GetirYemek Restoranı Olun</a>
                            </li>
                            <li>
                                <a href="">GetirÇarşı İşletmesi Olun</a>
                            </li>
                        </ul>
                    </section>
                </div>
                <div className="h-[1px] bg-gray-100"></div>
                <div className="flex justify-between flex-col items-center sm:flex-row text-sm py-6">
                    <div>
                        <span>
                            © 2022 Getir
                        </span>
                            <a href="#">
                                <a href="#" className="text-purple-800 hover:underline"> Bilgi Toplumu Hizmetleri</a>
                            </a>
                    </div>
                    <nav className="flex gap-x-2 items-center">
                        <a href="#" className="transition-colors w-8 h-8 flex items-center justify-center rounded-lg text-gray-600 hover:bg-purple-50 hover:text-purple-700">
                            <FaFacebook size={20} />
                        </a>
                        <a href="#" className="transition-colors w-8 h-8 flex items-center justify-center rounded-lg text-gray-600 hover:bg-purple-50 hover:text-purple-700">
                            <FaTwitter size={20} />
                        </a>
                        <a href="#" className="transition-colors w-8 h-8 flex items-center justify-center rounded-lg text-gray-600 hover:bg-purple-50 hover:text-purple-700">
                            <FaInstagram size={20} />
                        </a>
                        <a href="#" className="transition-colors h-8 flex items-center gap-x-2 border border-gray-100 rounded-lg text-sm text-gray-600 px-3 hover:bg-purple-50 hover:text-purple-700">
                            <FiGlobe size={18} />
                            Türkçe (TR)
                        </a>
                    </nav>
                </div>
            </div>
        </div>
    )
}
